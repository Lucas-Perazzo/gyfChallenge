import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import Button from '../components/Button'
import Description from '../components/Description'
import Title from '../components/Title'
import styles from '../styles/styles'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.containerAlign}>
      <Title text='Challenge' image={require('../../assets/gyfLogo.png')} />
      <Description />
      <Button
        color='white'
        icon='chevron-forward' 
        size={20}
        onPress={() => navigation.navigate('PostScreen')}
        text='Listado de Posts'
      />
    </View>
  )
}

export default HomeScreen;
