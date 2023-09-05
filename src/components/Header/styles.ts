import { StyleSheet } from "react-native"
import { Palette } from "../../types"

export const commonStyles = (currentTheme:Palette) => {
    return StyleSheet.create({
        container:{
            height:60,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            backgroundColor: currentTheme.primary_color,
            paddingHorizontal:15,    
          
        },
        brandContainer:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
        },
        search:{
            backgroundColor:currentTheme.secondary_color,
            height:35,
            width:'45%',
            borderRadius:12,
            paddingHorizontal:12,
            fontSize:16,
            color:currentTheme.font_color,
            borderColor: currentTheme.highlight_color,
            borderWidth:1
        }
    })

}