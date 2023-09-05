import { StyleSheet } from "react-native"
import { ColorPalette } from "../../types"
import { roboto_regular } from "../../constants/fonts"
export const commonStyles = (currentTheme:ColorPalette) => {
    return  StyleSheet.create({
        container:{   
            height:'50%',      
            display:'flex',
            flexDirection:'column',
            borderRadius:12,  
            backgroundColor:currentTheme.secondary_color,
            marginTop:3,
            padding:5,      
          
        },
        scrollView:{
            flex:1,        
        },
        slimContainer: {
            width: '100%',
            height:40,
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: currentTheme.primary_color,
            borderRadius: 12,
            borderColor:`rgba(${currentTheme.rgbHighlight},0.3)`,
            borderWidth:0.5,    
            marginVertical:5,
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal:20
          }
          ,
        slimTitle:{
            fontFamily:roboto_regular,
            color:currentTheme.font_color,
            fontSize:13,
            opacity:0.9,
            textAlign:'left'
        },
        slimData:{
            fontFamily:roboto_regular,
            color:currentTheme.font_color,
            fontSize:16,
            opacity:0.9,
            textAlign:'right'
        },
        descriptionContainer:{
            minHeight: 80,
            backgroundColor: currentTheme.primary_color,
            borderRadius: 12,
            marginVertical:5,
            padding:5,
            borderWidth:0.5,
            borderColor:`rgba(${currentTheme.rgbHighlight},0.3)`,
        },
        descriptionTitle:{
            fontFamily:roboto_regular,
            color:currentTheme.font_color,
            fontSize:13,
            opacity:1,
            textAlign:'left'
        },
        descriptionText:{
            fontFamily:roboto_regular,
            color:currentTheme.font_color,
            fontSize:11,
            opacity:1,
            textAlign:'justify'
        }
    })

}