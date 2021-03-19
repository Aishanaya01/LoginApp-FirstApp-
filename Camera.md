 # Camera
 expo-camera provides a React component that renders a preview for the device's front or back camera.<br> The camera's parameters like zoom, auto focus, white balance and flash mode are adjustable. With the use of Camera, one can also take photos and record videos that are then saved to the app's cache<br><br>

 ## Installation
 
 ```
 expo install expo-camera
 ```
 ## Usage
 Only one Camera preview can be active at any given time.<br> If you have multiple screens in your app, you should unmount Camera components whenever a screen is unfocused.<br><br>
 ```
 import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({ ... }); 
```
## API
```
import { Camera } from 'expo-camera';
```