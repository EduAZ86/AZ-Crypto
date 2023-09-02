export const primary_color = '#222831'

export const secondary_color = '#393E46'

export const highlight_color = '#EC625F'

export const font_color = '#EEEEEE'

const hexToRgb = (hex:string) => {
    hex = hex.replace(/^#/, '');
  
    if (!/^[0-9A-F]{6}$/i.test(hex)) {
      throw new Error('Valor hexadecimal no válido');
    }
      
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    return `${r}, ${g}, ${b}`;
}

export const primary_color_rgb = hexToRgb(primary_color)



export const secondary_color_rgb = hexToRgb(secondary_color)

export const highlight_color_rgb = hexToRgb(highlight_color)

export const font_color_rgb = hexToRgb(font_color)