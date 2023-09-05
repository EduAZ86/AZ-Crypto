import { StyleSheet } from "react-native"
import { roboto_bold, roboto_regular } from "../../constants/fonts"
import { ColorPalette } from "../../types"

export const commonStyles = (currentTheme:ColorPalette, widthContainer?:number) => {
    return StyleSheet.create({
        container:{
            width:widthContainer,
            height:'auto',
            margin:0,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            gap:5
        },
        image:{
            width:30,
            height:30,
        },
        name:{
            color: currentTheme.highlight_color,
            fontSize:16,
            fontFamily: roboto_bold
        } 
    
    })

}