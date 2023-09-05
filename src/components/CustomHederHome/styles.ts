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
            justifyContent:'flex-start',
            gap:5
        },
        image:{
            width:45,
            height:30,
        },
        name:{
            color: '#b2484c',
            fontSize:16,
            fontFamily: roboto_bold
        },
        switchContainer:{
            display:'flex',
            flexDirection:'row',     
            width:'20%',
            justifyContent:'flex-start'
            
            
        },
        logoContainer:{
            position:'absolute',
            display:'flex',
            flexDirection:'column',
            left:'40%',          
            width:'20%',
            justifyContent:'center',
            alignItems:'center'
        } 
    
    })

}