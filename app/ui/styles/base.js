import { Dimensions } from "react-native";

// Constantes donde extraigo las dimensiones de la pantalla y la paleta de colores.

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
};

export const colors = {
    LIGHT_BLUE : '#66B5D0',
    DARK_BLUE: '#0098CC'
};
