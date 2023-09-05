import { StyleSheet } from "react-native"
import { ColorPalette } from "../../types"
import { roboto_bold, roboto_light, roboto_regular } from "../../constants/fonts"
export const commonStyles = (currentTheme:ColorPalette) => {
    return StyleSheet.create({
        container:{
            height:50,
            width:'100%',
            paddingHorizontal:10,
            display:'flex',
            flexDirection:'row',
            backgroundColor:currentTheme.secondary_color,
            marginVertical:1,
            alignItems:'center',       
        },
        rank:{
            color:currentTheme.font_color,
            width:'7%',
            fontFamily:roboto_light
        },
        image:{
            width:30,
            height:30,
            marginHorizontal:10
        },
        nameContainer:{
            display:'flex',
            flexDirection:'column',
            width:'25%'
        },
        name:{
            color:currentTheme.font_color,
            fontSize:10,
            opacity:0.7,
            fontFamily:roboto_light
        },
        symbol:{
            color:currentTheme.font_color,
            fontSize:20,
            fontFamily:roboto_bold
        },
        priceContainer:{
            flex:1,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        },
        price:{
            width:'55%',
            textAlign:'right',
            color:currentTheme.font_color,
            fontSize:18,    
            fontFamily:roboto_regular
    
        },
        change:{   
            width:'25%',
            textAlign:'right',
            fontSize:16,
            fontFamily:roboto_regular
        },
        green:{
            color:'green'
        },
        red:{
            color:'red'
        },
    
    })

}