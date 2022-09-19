import { View, Text, Pressable, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles';
import { capitalize } from '../../util/helpers/capitalize';
import { colors } from '../styles/base';


const CardPosts = ({username, name, email, title, body, onPress}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View>
          <Image
            source={require('../../assets/user.png')}
            style={styles.cardImg}
          />
        </View>
        <View style={styles.column}>
          <View style={styles.rowAlignCenter}>
            <Text style={styles.text16Bold}>{username}</Text>
            <Text style={styles.text13}>({name})</Text>
          </View>
          <Text style={styles.boldLightBlue}>{email}</Text>
        </View>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.text18BoldLightBlue}>{capitalize(title)}</Text>
        <Text style={styles.text15}>{capitalize(body)}.</Text>
      </View>
      <Pressable 
        onPress={onPress} 
        style={styles.pressComments}
        testID='goComments'
      >
        <Ionicons 
          name='chatbox-ellipses' 
          size={20} 
          color={colors.LIGHT_BLUE} 
        />
        <Text style={{ fontWeight: 'bold', marginLeft: 2 }}>Ver comentarios</Text>
      </Pressable>
    </View>
  )
}

export default CardPosts