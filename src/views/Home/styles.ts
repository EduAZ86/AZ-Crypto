import { StyleSheet } from "react-native"
import { ColorPalette } from "../../types"

export const commonStyles = (currentTheme:ColorPalette) => {
    return StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: currentTheme.primary_color
        },
    
    })

}