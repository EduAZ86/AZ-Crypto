import { StyleSheet } from "react-native"
import { ColorPalette } from "../../types"
import { roboto_regular } from "../../constants/fonts"

export const commonStyles = (currentTheme:ColorPalette) => {
    return StyleSheet.create({
        container:{
            width:'100%',
            height:50,
            display:'flex',
            flexDirection:'row',
            paddingHorizontal:5,
            backgroundColor:currentTheme.secondary_color,
            borderRadius:12,
            marginTop:5,
            alignItems:'center',
            justifyContent:'space-around'
        },
        card:{
            width:75,
            height:40,
            display:'flex',
            flexDirection:'column',
            backgroundColor:currentTheme.primary_color,        
            borderColor:`rgba(${currentTheme.rgbHighlight},0.3)`,
            borderWidth:1,
            borderRadius:12,
            justifyContent:'center',
            gap:1
        },
        change:{
            textAlign:'center',
            fontFamily:roboto_regular,
            fontSize:12,
        },
        green:{
            color:'green',
            opacity:1
        },
        red:{
            color:'red',
            opacity:1
        },
        range:{
            textAlign:'center',
            fontFamily:roboto_regular,
            color:currentTheme.font_color,
            fontSize:9,
            opacity:0.8
        },
    })

}