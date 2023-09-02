import React, { useEffect, useRef} from "react";
import { StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { LineChartProps } from "../../types";
import { font_color, font_color_rgb, highlight_color, highlight_color_rgb, primary_color, secondary_color } from "../../constants/colors";
import { Dimensions } from "react-native";
import { roboto_bold, roboto_light, roboto_regular } from "../../constants/fonts";

const contanierWidth = Dimensions.get("window").width;

const Graph: React.FC<LineChartProps> = ({data,labels}) => {
    
    console.log(data);
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
            backgroundGradientFrom: secondary_color,
            backgroundGradientFromOpacity:1,

            backgroundGradientTo:  secondary_color,
            backgroundGradientToOpacity:1,

            fillShadowGradientFromOffset:0.2,

            fillShadowGradientTo:highlight_color,
            fillShadowGradientToOpacity:0.8,

            strokeWidth:1,
            decimalPlaces: 2,

            
            
            color: () => `rgba(${highlight_color_rgb}, ${0.8})`,
            labelColor: () => `rgba(${font_color_rgb}, ${0.8})`,
            style: {
              borderRadius: 16,
              
            },
            propsForLabels:{
                
            },       
            propsForBackgroundLines:{
                opacity:0.2,
                stroke:font_color,
                strokeDasharray:'none',
                strokeWidth:0.5,                    
            },
            propsForHorizontalLabels: {
                fontSize: 9,  
                opacity:0.7
              },
     
          }}
         
        style={{      
            marginVertical: 8,
            borderRadius: 16,
                      
        }}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:contanierWidth,
        display: "flex",
        fontFamily:roboto_regular,
        marginBottom: -52,        
    }
})

export default Graph