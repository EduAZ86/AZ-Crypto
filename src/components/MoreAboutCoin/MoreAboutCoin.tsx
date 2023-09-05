import React from "react";
import { ScrollView, Text, View } from "react-native";
import { CoinDataDetail } from "../../types";

import { commonStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";


const MoreAboutCoin:React.FC <CoinDataDetail> = ({
    description,    
    all_time_high_price,
    ath_change_percentage,
    all_time_low_price,
    atl_change_percentage,
    market_cap,
    total_volume,
    fully_diluted_valuation,
}) => {
    const {currentTheme} = React.useContext(ThemeContext)
    const styles = commonStyles(currentTheme)

    return(
        <View style={styles.container}>
            <ScrollView  style={styles.scrollView}>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >Market capitalization</Text>
                    <Text
                        style={styles.slimData}
                    >{market_cap} U$d</Text>
                </View>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >Diluted Valuation</Text>
                    <Text
                        style={styles.slimData}
                    >{fully_diluted_valuation} U$d</Text>
                </View>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >Total volume</Text>
                    <Text
                        style={styles.slimData}
                    >{total_volume} U$d</Text>
                </View>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >All time high price</Text>
                    <Text
                        style={styles.slimData}
                    >{all_time_high_price} U$d</Text>
                </View>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >ATH change percentage</Text>
                    <Text
                        style={styles.slimData}
                    >{ath_change_percentage?.toFixed(2)} %</Text>
                </View>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >All time low price</Text>
                    <Text
                        style={styles.slimData}
                    >{all_time_low_price} U$d</Text>
                </View>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >ATL change percentage</Text>
                    <Text
                        style={styles.slimData}
                    >{atl_change_percentage?.toFixed(2)} %</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text
                        style={styles.descriptionTitle}
                    >Description</Text>
                    <Text
                        style={styles.descriptionText}
                    >{description}</Text>
                </View> 
            </ScrollView>
        </View>
    )
}

export default MoreAboutCoin