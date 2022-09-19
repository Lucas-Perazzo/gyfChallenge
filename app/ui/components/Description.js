import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles/styles'
import { colors } from '../styles/base'

const Description = () => {
    return (
        <View style={styles.descriptionContainer}>
            <View style={styles.descriptionTextContainer}>
                <Text style={[styles.descriptionText, {color: colors.LIGHT_BLUE}]}>Consigna: </Text>
            </View>
            <View style={styles.descriptionBody}>
                <View>
                    <Text style={styles.text18}>A) Un listado de los posts de un blog y datos del usuario autor.</Text>
                    <Text style={styles.text18}>B) Al hacer clic en cualquier post, mostrar los comentarios relacionados.</Text>
                </View>
            </View>
            <View style={styles.descriptionTextContainer}>
                <Text style={[styles.descriptionText, {color: colors.LIGHT_BLUE}]}>Consideraciones: </Text>
            </View>
            <View>
                <Text style={styles.text14}>
                    ● Se debe entregar una solución React Native lo más actual posible con componentes del tipo función.
                </Text>
                <Text style={styles.text14}>    
                    ● Se debe usar como origen de datos la Api Rest https://jsonplaceholder.typicode.com/.    
                </Text>
                <Text style={styles.text14}>
                    ● Tendremos en consideración la estructura de carpetas y archivos de la solución.
                </Text>
                <Text style={styles.text14}>
                    ● Entregar la solución en un repositorio git y crear un archivo readme con todos los datos necesarios para poder ejecutar la aplicación.
                </Text>
            </View>
        </View>
    )
}

export default Description