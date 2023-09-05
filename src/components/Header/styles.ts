import { StyleSheet } from "react-native"
import { ColorPalette } from "../../types"
import { roboto_light } from "../../constants/fonts"

export const commonStyles = (currentTheme:ColorPalette) => {
    return StyleSheet.create({
        container:{
            height:60,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            backgroundColor:currentTheme.primary_color,
            paddingHorizontal:15,
            borderBottomColor:currentTheme.secondary_color,
            borderBottomWidth:0.5    
          
        },
        brandContainer:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
        },
        search:{
            backgroundColor:currentTheme.primary_color,
            height:35,        
            paddingHorizontal:12,
            fontSize:16,
            color:currentTheme.font_color,
            borderColor: currentTheme.secondary_color,
            borderWidth:1,
            borderRadius:12,
            borderTopRightRadius:0,
            borderBottomRightRadius:0,
            borderRightWidth:0,
        },
        xButton:{
            backgroundColor:currentTheme.primary_color,
            height:35,
            width:25,
            paddingRight:12,
            
            borderColor: currentTheme.secondary_color,
            borderWidth:1,        
            borderTopRightRadius:12,
            borderBottomRightRadius:12,
            borderLeftWidth:0,
            alignItems:'flex-end',
            justifyContent:'center'
        },
        xButtonText:{
            fontSize:18,  
            color:currentTheme.secondary_color,
            fontFamily:roboto_light
        },
        InputContainer:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-end',
            alignItems:'center',
        
        }
    })

}