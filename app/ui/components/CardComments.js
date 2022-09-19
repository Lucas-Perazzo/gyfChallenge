import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles/styles'

const CardComments = ({ name, email, body }) => {
    return (
        <View style={styles.cardCommentsContainer}>
            <View style={styles.cardCommentsHeader}>
                <Text style={styles.boldLightBlue}>{name}</Text>
                <Text style={{marginBottom: 10}}>{email}</Text>
            </View>
            <Text style={{marginTop: 5, fontWeight: 'bold'}}>{body}</Text>
        </View>
    )
}

export default CardComments