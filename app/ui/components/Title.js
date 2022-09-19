import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles/styles'

const Title = ({text, image}) => {
    return (
        <View style={styles.titleContainer}>
            <View>
                <Image 
                    source={image} 
                    style={styles.titleImage} 
                />
            </View>
            <View>
                <Text style={styles.titleText}>{text}</Text>
            </View>
        </View>
    )
}

export default Title;