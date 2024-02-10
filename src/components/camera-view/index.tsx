import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Camera, useCameraDevice, useCameraFormat, useCameraPermission } from 'react-native-vision-camera'
import { resolutions } from '../../utils/commonUtils'

type CameraViewType = {
    cameraRef: any
    currentRes: string,
    recordingStarted: boolean
}
const CameraView = (props: CameraViewType) => {
    const device = useCameraDevice("back")
    if (device == null) {
        return <Text>No Camera Found</Text>
    }
    const format = useCameraFormat(device, [
        { videoAspectRatio: 16 / 9 },
        { videoResolution: resolutions?.[props?.currentRes] },
        { fps: 240 }
    ])
    console.log("res::", resolutions?.[props?.currentRes])
    return (
        <View style={styles.container}>
            {
                props?.recordingStarted && <Image
                    resizeMode='cover'
                    style={styles.recIconStyle}
                    source={require("../../assets/img/recording.png")}
                />
            }
            <Camera
                ref={(ref) => (props.cameraRef.current = ref)}
                style={styles.cameraViewStyle}
                device={device}
                isActive={true}
                format={format}
                video
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: 200,
        marginTop: 20,
        zIndex: 99
    },
    recIconStyle: {
        position: "absolute",
        top: 10,
        left: 10,
        zIndex: 99,
        width: 50,
        height: 55
    },
    cameraViewStyle: {
        height: "100%",
        width: "100%"
    }
})

export default CameraView