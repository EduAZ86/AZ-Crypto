import { StyleSheet } from "react-native"
import { ColorPalette } from "../../types"
import { roboto_bold, roboto_regular } from "../../constants/fonts"
export const commonStyles = (currentTheme:ColorPalette) => {
    return  StyleSheet.create({
        container:{
            width:'100%',
            height:70,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-around',  
            borderWidth:1,
            borderRadius:12,
            padding:5,
            borderColor:`rgba(${currentTheme.rgbHighlight},0.3)`,
            
           
        },   
        priceContainer:{      
            width:'95%',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',        
            justifyContent:'space-around'
        },
        price:{
            color:currentTheme.font_color,
            fontSize:40,
            fontFamily:roboto_bold
        },
        change:{
            color:currentTheme.font_color,
            fontSize:20,
            fontFamily:roboto_regular
        },
        green:{
            color:'green'
        },
        red:{
            color:'red'
        },
        period:{
            color:currentTheme.font_color,
            fontSize:10,
            opacity:0.5,
            fontFamily:roboto_regular
        }
    
    })

}