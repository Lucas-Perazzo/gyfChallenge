import { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native'
import { fetchCommentsByPost } from '../../util/http';
import CardComments from '../components/CardComments';
import styles from '../styles/styles';
import { colors } from '../styles/base';

const CommentScreen = ({ route }) => {
  // Variable de estado donde alojo los comentarios fetcheados.
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  // Extraigo y guardo en una varible el id del posteo enviado por params.
  const postId = route.params.postId;

  useEffect(() => {
    // Funcion asincrona donde invoco la funcion fetchCommentsByPost() que consume el endpoint
    // de comentarios, como parametro envio el id del posteo seleccionado.

    const fetchComments = async (id) => {
      try {
        setIsLoading(true);
        const response = await fetchCommentsByPost(id);
        console.log(`Comentarios del posteo id: ${id}`,  response);
        setComments(response);
        setIsLoading(false);
      } catch (error) {
        console.log('error al traer comments: ', error);
      }
    }

    fetchComments(postId);
  }, []);

  
  // Item y render de la Flatlist de comentarios.
  const Item = ({ name, email, body }) => {
      return (
        <CardComments 
            name={name}
            email={email}
            body={body}
        />
      );
  };
  
  const renderItem = ({ item }) => {
    return (
      <Item
        name={item.name}
        email={item.email}
        body={item.body}
      />
    );
  }

  if(isLoading){
    return (
      <View style={styles.containerAlign}>
        <ActivityIndicator size='large' color={colors.LIGHT_BLUE}/>
      </View> 
    );
  }

  return (
      <View style={styles.containerAlign}>
        {comments.length > 0 && 
          <FlatList
            data={comments} 
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        }
      </View>
  )
}

export default CommentScreen;

