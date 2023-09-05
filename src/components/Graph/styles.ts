import { StyleSheet } from "react-native"
import { roboto_bold, roboto_regular } from "../../constants/fonts"
import { Palette } from "../../types"

export const commonStyles = (currentTheme:Palette,contanierWidth:number) => {
    return StyleSheet.create({
        container:{
            width:contanierWidth,
            display: "flex",
            fontFamily:roboto_regular,
            marginBottom: -52,        
        }
    })

}
