import React, {useContext} from "react";
import { TextInput, View } from "react-native";
import { commonStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";

const Header = () => {
    const {currentTheme} = useContext(ThemeContext)
    const styles = commonStyles(currentTheme)

    return(
        <View style={styles.container}>
            <View style={styles.brandContainer}>

            </View>
            <TextInput
                style={styles.search}
            />
        </View>
    )
}

export default Header