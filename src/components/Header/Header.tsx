import React, {useContext, useState} from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { commonStyles } from "./styles"
import { ThemeContext } from "../../themes/ThemeContext"

const Header = ({handleImputText, inputText}:any ) => {
    const {currentTheme} = useContext(ThemeContext)
    const styles = commonStyles(currentTheme)  
    const [widthInput, setWidthInput] = useState<number>(70)
    
    const handleChange = (text:string) => {
        handleImputText(text)
     
    }
    const handleClear = () => {
        handleImputText('')
    }
    const handleFocus = () => {
        setWidthInput(150)
    }
    const handleBlur = () => {
        setWidthInput(70)        
    }
    

    return(
        <View style={styles.container}>
            <View style={styles.brandContainer}>

            </View>
            <View style={styles.InputContainer}>
                <TextInput
                    style={[styles.search,{ width: widthInput } ]}
                    onChangeText={text => handleChange(text)}
                    value={inputText}
                    placeholder="Search"
                    onFocus={handleFocus}
                    onBlur={handleBlur} 
                />
                <TouchableOpacity
                    style={styles.xButton}
                    onPress={() => handleClear()}
                >
                    <Text style={styles.xButtonText}>X</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Header