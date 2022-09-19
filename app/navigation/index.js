import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import HomeScreen from "../ui/screens/HomeScreen";
import PostScreen from "../ui/screens/PostScreen";
import CommentScreen from "../ui/screens/CommentScreen";
import { colors } from "../ui/styles/base";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="HomeScreen" 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.LIGHT_BLUE,
                    },
                    headerTintColor: 'white'
            }}>
                <Stack.Screen 
                    name="HomeScreen" 
                    component={HomeScreen} 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="PostScreen" 
                    component={PostScreen} 
                    options={{title: 'Posts'}} 
                />
                <Stack.Screen 
                    name="CommentScreen" 
                    component={CommentScreen} 
                    options={{title: 'Comentarios'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;