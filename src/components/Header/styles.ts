import { StyleSheet } from "react-native"
import { ColorPalette } from "../../types"
import { roboto_bold, roboto_light, roboto_regular } from "../../constants/fonts"

export const commonStyles = (currentTheme:ColorPalette) => {
    return StyleSheet.create({
        container:{
            height:60,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            backgroundColor:`rgba(${currentTheme.rgbSecondary}, 1)`,
            paddingHorizontal:15,
            borderBottomColor:currentTheme.secondary_color,
            borderBottomWidth:0.5,    
            gap:8
        },
        search:{
            flex:1,
            backgroundColor:currentTheme.primary_color,                 
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
            flex:0.2,
            backgroundColor:currentTheme.primary_color,           
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
            backgroundColor:'red',
            width:'40%',
            height:40,
            borderRadius:12,
        },
        marketCapContainer:{
            width:'55%',
            height:40,
            display:'flex',
            flexDirection:'column',    
            justifyContent:'center',
            alignItems:'center',
            borderRadius:12,
            backgroundColor:`rgba(${currentTheme.rgbPrimary}, 1)`,
            gap:5
        },
        titleMarketCap:{
            fontFamily:roboto_bold,
            fontSize:12,
            color:currentTheme.font_color,
            opacity:0.8
        },
        marketCapData:{
            width:'100%',
            display:'flex',
            flexDirection:'row', 
            justifyContent:'space-around',
            alignItems:'stretch',
            
        },
        marketCap:{
            fontFamily:roboto_regular,
            fontSize:12,
            color:currentTheme.font_color
        },
        change:{
            fontFamily:roboto_regular,
            fontSize:10,    
        },
        red:{
            color:'red'
        },
        green:{
            color:'green'
        }

    })

}