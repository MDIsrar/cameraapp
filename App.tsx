import React from 'react';
import { Alert, Text, ToastAndroid, View } from 'react-native';
import { useCameraDevice, useCameraFormat, useCameraPermission } from 'react-native-vision-camera';
import RecordingControllerButtons from './src/components/recording-controller-buttons';
import CameraView from './src/components/camera-view';
import { getVideoSize } from './src/utils/commonUtils';
import ResolutionOptionsDialog from './src/components/resolution-options-dialog';

function App(): React.JSX.Element {
  const camera = React.useRef<any>()
  const [videoRecordingStarted, setVideoRecordingStarted] = React.useState(false)
  const [currentResolution, setCurrentResolution] = React.useState<string>("720p")
  const [modalVisible, setModalVisible] = React.useState(false)
  const { hasPermission, requestPermission } = useCameraPermission()
    if (!hasPermission) {
        requestPermission()
    }


  const handleRecordVideo = async () => {
    try {
      await camera?.current?.startRecording({
        onRecordingFinished: async (video: any) => {
          const videoSize = await getVideoSize(video?.path);
          Alert.alert("Video Details", `Video Size: ${Math.ceil(Number(videoSize?.megabytes))} MB`)
        },
        onRecordingError: (error: any) => console.log("error:", error)
      })
      setVideoRecordingStarted(true)
    } catch (e) {
      console.log("error:", e)
    }
  }

  const handleStopVideo = async () => {
    try {
      await camera?.current?.stopRecording()
      setVideoRecordingStarted(false)
      ToastAndroid.show("Recording Stopped", ToastAndroid.SHORT)
    } catch (e) {
      console.log("error:", e)
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', paddingBottom:20 }}>
      <RecordingControllerButtons
        onStartPress={()=>setModalVisible(true)}
        onStopPress={handleStopVideo}
      />
      <CameraView
        cameraRef={camera}
        currentRes={currentResolution}
        recordingStarted={videoRecordingStarted}
      />
      <ResolutionOptionsDialog
        modalVisible={modalVisible}
        onResPress={(res) => {
          handleRecordVideo()
          setCurrentResolution(res)
          setModalVisible(false)
          ToastAndroid.show(res + " Recording Started", ToastAndroid.SHORT)
        }}
      />
      {videoRecordingStarted && <Text>Recording....</Text>}
    </View>
  )
}

export default App;
