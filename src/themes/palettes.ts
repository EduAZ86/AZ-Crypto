import { ColorPalette } from "./colorPaletteClass";
    
const paletts = [
    {
        primary_color:'#EAEAEA',
        secondary_color:'#08D9D6',    
        highlight_color:'#FF2E63',    
        font_color:'#252A34'
    },
    {
        primary_color:'#E8FFC2',
        secondary_color:'#2FA4FF',    
        highlight_color:'#00FFDD',    
        font_color:'#0E185F'   
    },
    {
        //light azulado tenue
        primary_color:'#D3EBCD',
        secondary_color:'#AEDBCE',    
        highlight_color:'#839AA8',    
        font_color:'#635666'   
    },    {
        //light celeste, salmon y beige
        primary_color:'#222831',
        secondary_color:'#FFD3B0',    
        highlight_color:'#FF6969',    
        font_color:'#A6D0DD'  
    },
    {
        //dark naranja y gris oscuro
        primary_color:'#222831',
        secondary_color:'#393E46',    
        highlight_color:'#EC625F',    
        font_color:'#EEEEEE'   
    },
]


 export const lightPalette = new ColorPalette('#E8E8E8','#F05454','#30475E','#222831')

export const darkPalette = new ColorPalette('#171717','#444444','#DA0037','#EDEDED')

