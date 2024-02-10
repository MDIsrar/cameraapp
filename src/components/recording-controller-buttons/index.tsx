import { View, Text } from 'react-native'
import React from 'react'
import Button from '../button'

type RecordingControllerButtonsTypes = {
    onStartPress: () => void
    onStopPress: () => void
}
const RecordingControllerButtons = (props: RecordingControllerButtonsTypes) => {
    return (
        <View>
            <Button
                backgroundColor='green'
                label='Start Recording'
                onPress={props.onStartPress}
            />
            <Button
                backgroundColor='red'
                label='Stop Recording'
                onPress={props.onStopPress}
            />
        </View>
    )
}

export default RecordingControllerButtons