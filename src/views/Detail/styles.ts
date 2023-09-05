import { StyleSheet } from "react-native"
import { ColorPalette } from "../../types"
import { roboto_bold, roboto_light } from "../../constants/fonts"

export const commonStyles = (currentTheme:ColorPalette) => {
    return StyleSheet.create({
        container:{
            flex:1,
            display:'flex',
            flexDirection:'column',
            backgroundColor: currentTheme.primary_color,
            paddingHorizontal:5
        },
        daysButtonContainer:{
            paddingHorizontal:10,
            width:'100%',
            height:45,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        },
        button:{
            width:45,
            backgroundColor:'transparent',
            alignItems:'center',      
            justifyContent:'center',
            marginVertical:8,
            borderRadius:8,
            borderWidth:1,
            borderColor:currentTheme.highlight_color
        },
        press:{
            backgroundColor:currentTheme.highlight_color,
            opacity:0.8,
        },    
        textButton:{
            textAlign:'center',
            fontFamily:roboto_bold,
            color:currentTheme.font_color,
            fontSize:12
        },
        d:{
            textAlign:'center',
            fontFamily:roboto_light,
            color:currentTheme.font_color,
            fontSize:10,
            opacity:0.5
        }
    })
}