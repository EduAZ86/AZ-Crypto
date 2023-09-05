import { StyleSheet } from "react-native"
import { roboto_bold, roboto_regular } from "../../constants/fonts"
import { Palette } from "../../types"

export const commonStyles = (currentTheme:Palette) => {
    return StyleSheet.create({
        container:{
            flex: 0.80,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            gap:10
        },
        image:{
            width:30,
            height:30,
        },
        symbol:{
            color:currentTheme.font_color,
            fontSize:14,
            opacity:0.5,
            fontFamily: roboto_regular
        },
        name:{
            color:currentTheme.font_color,
            fontSize:22,
            fontFamily: roboto_bold
        }
    })

}
