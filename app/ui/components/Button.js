import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles';


const Button = ({ icon, size, color, text, onPress }) => {
    return (
            <Pressable onPress={onPress} testID='goPosts'>
                <View style={styles.button}>
                    <Text style={styles.text14}>{text}</Text>
                    <Ionicons
                        name={icon}
                        size={size}
                        color={color}
                    />
                </View>
            </Pressable>
    )
};

export default Button;