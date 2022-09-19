import { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { fetchPosts, fetchUsers } from '../../util/http';
import styles from '../styles/styles';
import CardPosts from '../components/CardPosts';
import { colors } from '../styles/base';

const PostScreen = ({ navigation }) => {

  // Estados donde guardo los post y usuarios luego de consumir los endpoints de users y posts.

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    //  Funciones asincronas donde invoco el pedido al endpoint de usuarios (funcion fetchUsers()) 
    //  y al de posteos (funcion fetchPosts()), cuando obtengo una respuesta, alojo la data
    //  en las variables de estado users y posts.
    
    async function getUsers() {
      try {
        setIsLoading(true);
        const response = await fetchUsers();
        // Utilizo el metodo slice para mostrar un solo resultado como ejemplo de la respuesta.
        console.log('Usuarios: ', response.slice(0, 1));
        setUsers(response);
        setIsLoading(false);
      } catch (error) {
        console.log('Error al fetchear usuarios: ', error);
      }
    }
    async function getPosts() {
      try {
        setIsLoading(true);
        const response = await fetchPosts();
        // Utilizo el metodo slice para mostrar un solo resultado como ejemplo de la respuesta.
        console.log('Posts: ', response.slice(0, 1));
        setPosts(response);
        setIsLoading(false);
      } catch (error) {
        console.log('Error al fetchear posteos: ', error);
      }
    }

    getUsers();
    getPosts();
  }, []);

  // Handler para navegar a la Screen de comentarios y por params envio el id del posteo
  // seleccionado para fetchear sus comentarios.

  function handlerToComments(id) {
    console.log('Id del posteo seleccionado: ', id);
    navigation.navigate('CommentScreen', { postId: id })
  };

  // Item y render de la Flatlist

  const Item = ({ title, body, id, userId }) => {
    if (users.length > 0) {
      // Alojo en una variable el usuario que esta haciendo el post para extraer sus datos
      // y renderizarlos en la card del posteo.
      // Utilizo el metodo find para extraer la primer ocurrencia si el id del usuario 
      // corresponde con el userId del posteo.
      const userPost = users.find(user => user.id === userId);

      return (
        <CardPosts 
          onPress={() => handlerToComments(id)}
          body={body}
          email={userPost.email}
          name={userPost.name}
          title={title}
          username={userPost.username}
        />
      );
    }
  };

  const renderItem = ({ item }) => {
    return (
      <Item
        title={item.title}
        body={item.body}
        id={item.id}
        userId={item.userId}
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
      {posts.length > 0 &&
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />}
    </View>
  )
}

export default PostScreen;
