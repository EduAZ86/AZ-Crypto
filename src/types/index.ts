import { ReactNode } from "react"

export type CoinDataShort = {
    id: string
    name?: string
    current_price?:number
    price_change_percentage_24h?:number
    symbol?:string
    image?:string
    market_cap_rank?:number
}

export type CoinDataDetail = {
    id: string
    name?: string
    symbol?:string
    image?:string
    
    description?: string
    public_notice?: string
    current_price?:number
    all_time_high_price?: number
    ath_change_percentage?:number
    all_time_low_price?:number
    atl_change_percentage?:number
    market_cap?: number
    total_volume?:number
    fully_diluted_valuation?:number
    high_24h?:number
    low_24h?: number 

    price_change_percentage_24h?: number
    price_change_percentage_7d?: number
    price_change_percentage_30d?: number
    price_change_percentage_60d?: number
    price_change_percentage_1y?: number
    market_cap_change_percentage_24h?: number
}

export type RootStackParams = {
    Home: undefined
    Detail: CoinDataDetail
}

export type LineChartProps = {
    data: number[]
    labels: string[]
  }

export type HistoryPriceCoin = number[]

export type ColorPalette = {
    primary_color:string
    secondary_color:string    
    highlight_color:string    
    font_color:string
    rgbPrimary:string
    rgbSecondary:string
    rgbHighlight:string
    rgbFontColor:string
}


export type ThemeContextType = {
    theme: string
    toggleTheme: () => void
    currentTheme: ColorPalette

  }
  
export interface ThemeProviderProps {
    children: ReactNode
  }

export type GlobalDataType = {
market_cap?:number,
volumen_24hs?:number,
market_change_24hs?:number
}
