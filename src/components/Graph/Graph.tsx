import React, { useContext} from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { LineChartProps } from "../../types";
import { Dimensions } from "react-native";
import { commonStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";

const Graph: React.FC<LineChartProps> = ({data,labels}) => {
  const contanierWidth = Dimensions.get("window").width;
  const {currentTheme} = useContext(ThemeContext)

  const styles = commonStyles(currentTheme, contanierWidth)
  
    const label = labels
    const dataCoin = [
        {data: data}
    ]
 
    const screenHeight = Dimensions.get("window").height
    const screenWidth = Dimensions.get("window").width;


    return(
        <View
            style={styles.container}
        >   
        <LineChart
          data={{
            labels:label,
            datasets: dataCoin,
            
          }}
          width={screenWidth-10}
          height={screenHeight*0.3}
          yLabelsOffset={2}
          xLabelsOffset={5}         
          yAxisSuffix=" U$d"
          withShadow={true}
          withDots={false}
          withVerticalLines={false}
          withVerticalLabels={false}
          withHorizontalLabels={true}
        
        
          chartConfig={{           
            backgroundGradientFrom: currentTheme.secondary_color,
            backgroundGradientFromOpacity:1,

            backgroundGradientTo:  currentTheme.secondary_color,
            backgroundGradientToOpacity:1,

            fillShadowGradientFromOffset:0.2,

            fillShadowGradientTo:currentTheme.highlight_color,
            fillShadowGradientToOpacity:0.8,

            strokeWidth:1,
            decimalPlaces: 2,

            
            
            color: () => `rgba(${currentTheme.rgbHighlight}, ${0.8})`,
            labelColor: () => `rgba(${currentTheme.rgbFontColor}, ${0.8})`,
            style: {
              borderRadius: 16,
              
            },
            propsForLabels:{
                
            },       
            propsForBackgroundLines:{
                opacity:0.2,
                stroke:currentTheme.font_color,
                strokeDasharray:'none',
                strokeWidth:0.5,                    
            },
            propsForHorizontalLabels: {
                fontSize: 9,  
                opacity:0.7
              },
     
          }}
         
        style={{      
            
            borderRadius: 12,
            marginBottom:9,
            marginTop:5          
        }}
        />
      </View>
    )
}

export default Graph