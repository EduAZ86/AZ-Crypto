import axios from 'axios'
import { GET_ALL_COINS_DATA_URL, GET_DATA_COIN_URL, GET_GLOBAL_DATA, GET_HISTORY_COIN_URL } from '../../constants/urls'
import { CoinDataDetail, GlobalDataType, HistoryPriceCoin } from '../../types'


export const getAllDataCoins = async () => {
    try {
        const response = await axios.get(`${GET_ALL_COINS_DATA_URL}`)
        return response.data        
    } catch (error) {
        console.log(error)       
    }
}

export const getDetailCoin = async (idCoin:string) => {
    try {
        const {data}= await axios.get(`${GET_DATA_COIN_URL}/${idCoin}`)

        const dataCoin:CoinDataDetail = {
            id: data.id,
            name: data.name,
            symbol: data.symbol,
            image: data.image.large,
            description: data.description.en,
            public_notice: data.public_notice,
            current_price: data.market_data.current_price.usd,
            all_time_high_price: data.market_data.ath.usd,
            ath_change_percentage:data.market_data.ath_change_percentage.usd,
            all_time_low_price: data.market_data.atl.usd,
            atl_change_percentage:data.market_data.atl_change_percentage.usd,
            market_cap: data.market_data.market_cap.usd,
            fully_diluted_valuation:data.market_data.fully_diluted_valuation.usd,
            total_volume: data.market_data.total_volume.usd,
            high_24h: data.market_data.high_24h.usd,
            low_24h: data.market_data.low_24h.usd,
            price_change_percentage_24h:  data.market_data.price_change_percentage_24h,
            price_change_percentage_7d:  data.market_data.price_change_percentage_7d,
            price_change_percentage_30d:  data.market_data.price_change_percentage_30d,
            price_change_percentage_60d:  data.market_data.price_change_percentage_60d,
            price_change_percentage_1y:  data.market_data.price_change_percentage_1y,
            market_cap_change_percentage_24h:  data.market_data.market_cap_change_percentage_24h
        }
        return dataCoin
    } catch (error) {
        console.log(error)   
    }
}

export const getHistoryCoin = async (days:string, idCoin:string) =>{
    try {
        const {data} = await axios.get(`${GET_HISTORY_COIN_URL}/${idCoin}/ohlc?vs_currency=usd&days=${days}`)
        if (data) {
            const historyCoin:HistoryPriceCoin = data.map((item:number[]) => {
                const subArray = item.slice(1)
                const average = subArray.reduce((ac,val) => ac + val ,0)
                return (average/4)
            })
            return historyCoin            
        }
        
    } catch (error) {
        console.log(error)  
    }
}

export const getGlobalData = async () => {
    try {
        const { data } = await axios.get(GET_GLOBAL_DATA)
        const globalData:GlobalDataType = {
            market_cap:data.data.total_market_cap.usd,
            volumen_24hs:data.data.total_volume.usd,
            market_change_24hs: data.data.market_cap_change_percentage_24h_usd
        }
        return globalData
    } catch (error) {
        
    }
}