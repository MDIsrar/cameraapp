import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type buttonTypes = {
    label: string
    onPress: () => void
    backgroundColor?: string
    textColor?: string
}
const Button = (props: buttonTypes) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: props?.backgroundColor }]}
            onPress={props?.onPress}
        >
            <Text style={styles.buttonLabelStyle}>{props?.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 20,
        marginTop: 20,
        borderRadius: 5
    },
    buttonLabelStyle:{
        color: "white",
        fontSize: 20
    }
})

export default Button