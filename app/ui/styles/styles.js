import { StyleSheet } from "react-native";
import { dimensions, colors } from "./base";

// Hoja de estilos.

const styles = StyleSheet.create({
    containerAlign: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text18BoldLightBlue: { 
        fontSize: 18, 
        color: colors.LIGHT_BLUE, 
        fontWeight: 'bold' 
    },
    text18: {
        fontSize: 18,
        margin: 4
    },
    text16Bold: { 
        fontSize: 16, 
        fontWeight: 'bold' 
    },
    text15: {
        fontSize: 15 
    },
    text14: {
        fontSize: 14,
        margin: 4
    },
    text13: {
        fontSize: 13, 
        marginLeft: 5 
    },
    boldLightBlue: { 
        color: colors.LIGHT_BLUE, 
        fontWeight: 'bold' 
    },
    pressed: {
        opacity: 0.75,
    },
    column: { 
        flexDirection: 'column' 
    },
    rowAlignCenter: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    // Title Styles
    titleContainer: { 
        borderBottomColor: colors.LIGHT_BLUE, 
        borderBottomWidth: 2, 
        width: '90%', 
        alignItems: 'center', 
        padding: 10 
    },
    titleImage: {
        width: 300,
        height: 150
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold' 
    },
    // Description Styles
    descriptionContainer: {
        width: dimensions.fullWidth,
        padding: 20,
        alignItems: 'center'
    },
    descriptionTextContainer: {
        alignSelf: 'flex-start',
    },
    descriptionText: {
        fontSize: 24,
        fontWeight: '500'
    },
    descriptionBody: {
        margin: 20
    },
    //Button Styles
    button: {
        backgroundColor: colors.LIGHT_BLUE,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 4
    },
    // Card Posts
    cardContainer: { 
        marginHorizontal: 20, 
        marginVertical: 10, 
        padding: 8, 
        borderRadius: 10, 
        backgroundColor: 'white', 
        elevation: 8, 
        overflow: 'hidden', 
        maxWidth: '90%' 
    },
    cardHeader: { 
        flexDirection: 'row', 
        padding: 5, 
        alignItems: 'center', 
        borderBottomColor: colors.LIGHT_BLUE, 
        borderBottomWidth: 2, 
        margin: 5 
    },
    cardImg: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 20,
    },
    postContainer: { 
        padding: 10, 
        borderBottomColor: colors.LIGHT_BLUE, 
        borderBottomWidth: 2, 
        margin: 5
    },
    pressComments: {
        padding: 8, 
        alignSelf: 'flex-end',
        flexDirection: 'row'
    },
    cardCommentsContainer: {
        backgroundColor: 'white',
        margin: 10,
        padding: 15,
        elevation: 4,
        borderRadius: 10,
    },
    cardCommentsHeader: {
        marginVertical: 5,
        borderBottomColor: colors.LIGHT_BLUE,
        borderBottomWidth: 2,
    },
    
});

export default styles;