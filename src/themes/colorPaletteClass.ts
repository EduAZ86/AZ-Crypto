export class ColorPalette  {
    primary_color:string
    secondary_color:string   
    highlight_color:string  
    font_color:string
    rgbPrimary:string
    rgbSecondary:string
    rgbHighlight:string
    rgbFontColor:string

    constructor(primary_color:string, secondary_color:string, highlight_color:string, font_color:string ) {
        {            
        this.primary_color = primary_color
        this.secondary_color = secondary_color
        this.highlight_color = highlight_color
        this.font_color = font_color
        this.rgbPrimary = this.hexToRgb(this.primary_color);
        this.rgbSecondary = this.hexToRgb(this.secondary_color)
        this.rgbHighlight = this.hexToRgb(this.highlight_color)
        this.rgbFontColor = this.hexToRgb(this.font_color)
    }
    }
    private hexToRgb(hex: string): string {
        hex = hex.replace(/^#/, '')

        if (!/^[0-9A-F]{6}$/i.test(hex)) {
            throw new Error('Valor hexadecimal no válido');
        }
        const r = parseInt(hex.substring(0, 2), 16)
        const g = parseInt(hex.substring(2, 4), 16)
        const b = parseInt(hex.substring(4, 6), 16)
        return `${r}, ${g}, ${b}`
    }

}

