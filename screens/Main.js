import { Alert, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions,
  PermissionStatus,
  useMediaLibraryPermissions,
} from "expo-image-picker";

import Button from "../components/Button";
import { GlobalStyles } from "../constants/styles";
import Icon from "../components/Icon";

const Main = () => {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInfo, requestCameraPermission] =
    useCameraPermissions();

  const [galleryPermissionInfo, requestGalleryPermission] =
    useMediaLibraryPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const cameraPermissionResponse = await requestCameraPermission();
      return cameraPermissionResponse.granted;
    }

    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Pemissions",
        "The app needs to access the camera in order to continue!"
      );
      return false;
    }
    if (galleryPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const galleryPermissionResponse = await requestGalleryPermission();
      return galleryPermissionResponse.granted;
    }
    if (galleryPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Pemissions",
        "The app needs to access your media in order to continue!"
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasCameraPermission = await verifyPermissions();

    if (!hasCameraPermission) {
      return;
    }

    const camera = await launchCameraAsync({
      allowsEditing: true,
      quality: 1,
      aspect: [16, 9],
    });
    setPickedImage(camera.uri);
  };

  const uploadImageHandler = async () => {
    const hasGalleryPermission = await requestGalleryPermission();

    if (!hasGalleryPermission) {
      return;
    }
    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      aspect: [16, 9],
    });
    setPickedImage(image.uri);
  };

  let imagePreview = (
    <View style={styles.imagePreview}>
      <Icon name="camera" size={40} color={GlobalStyles.colors.gray800} />
      <Text>No image taken yet</Text>
    </View>
  );

  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.imageContainer}>{imagePreview}</View>
      <View style={styles.buttonContainer}>
        <Button onPress={takeImageHandler}>Take photos</Button>
        <Button onPress={uploadImageHandler}>Upload Image</Button>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    backgroundColor: GlobalStyles.colors.gray500,
    borderRadius: 150,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  imagePreview: {
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
