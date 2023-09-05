import React from "react";
import { Text, View } from "react-native";
import { CoinDataDetail } from "../../types";

import { commonStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";


const PriceChangeCard:React.FC <CoinDataDetail> = ({
    price_change_percentage_24h,
    price_change_percentage_7d,
    price_change_percentage_30d,
    price_change_percentage_60d,
    price_change_percentage_1y,
}) => {
    const data = [
        price_change_percentage_24h,
        price_change_percentage_7d,
        price_change_percentage_30d,
        price_change_percentage_60d,
        price_change_percentage_1y,
    ]
    const {currentTheme} = React.useContext(ThemeContext)
    const styles = commonStyles(currentTheme)


    return(
        <View style={styles.container}>
            
            {data.map((item,index) => {
                let range = ''
                switch (index) {
                    case 0:
                        range = '24 hours'                    
                    break;
                    case 1:
                        range = '7 days'                     
                    break;
                    case 2:
                        range = '1 month'                     
                    break;
                    case 3:
                        range = '2 months'                 
                    break;
                    case 4:
                        range = '1 year'          
                    break;                
                    default:
                        range= '24 hours'
                        break;
                }
                return(
                    <View
                        key={index}
                        style={styles.card}
                        >
                            <Text
                                style={styles.range}
                            >{range}</Text>
                        { item !== undefined && (item > 0
                            ?   <Text
                                    style={[styles.change, styles.green]}
                                >{`⬆ ${item?.toFixed(2)} %`}</Text>
                            :   <Text
                                    style={[styles.change, styles.red]}
                                >{`⬇ ${item?.toFixed(2)} %`}</Text>
                        )}
                    </View>

                )

            })}

            
        </View>
    )
}

export default PriceChangeCard