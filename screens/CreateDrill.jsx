import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Buttons from "../src/components/Buttons";
import Banner from "../src/components/Banner";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import createDrill from "../assets/createDrill.jpg";

const { width, height } = Dimensions.get("window");

export default function CreateDrill() {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);

  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });

  const validateSubmit = (
    name,
    duration,
    description,
    selected,
    uploadedImages
  ) => {
    return (
      !!name && !!duration && !!description && !!selected && uploadedImages.length > 0
    );
  };

  const handleSubmit = async () => {
    if (
      !validateSubmit(name, duration, description, selected, uploadedImages)
    ) {
      alert("Please fill out all the required fields in order to submit!");
      return;
    }

    // process images
    for (const imageInfo of uploadedImages) {
      const response = await fetch(imageInfo.uri);
      const blob = await response.blob();

      const storage = getStorage();
      const storageRef = ref(storage, imageInfo.uri.split("/").pop());
      const uploadResInfo = await uploadBytes(storageRef, blob);
      console.log("uploaded successfully --", uploadResInfo);
    }

    alert("Upload was successful!");
    [setName, setDescription, setDuration].forEach(fn => fn(""));
    setUploadedImages([]);

    // TODO: generate resource url from image uplaod
    // TODO: compose state into drill object and write to firestore

    // TODO: handle errors, and routing on success + confirmation for user.

  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      orderedSelection: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (!result.canceled) {
      setUploadedImages((existingUploadedMedia) => [
        ...existingUploadedMedia,
        ...result.assets,
      ]);
      console.log("stored picture in state");
    }
  };

  const data = [
    { key: "1", value: "18 putt drill" },
    { key: "2", value: "Stroke game putting" },
  ];

  // loading data for type dropdown menu.

  return (
    loaded && (
      <View style={styles.container}>
        <Banner
          image={createDrill}
          text="Create Drills"
          themeOne="back"
          themeTwo="Cancel"
        />
        <ScrollView>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            search={false}
            fontFamily="Karma"
            boxStyles={{
              width: width * 0.85,
              height: height * 0.04,
              backgroundColor: "#F0E8E8",
              borderRadius: 10,
              paddingLeft: width * 0.025,
              paddingRight: width * 0.025,
              paddingTop: height * 0.01,
              marginLeft: 30,
              marginTop: 20,
              fontFamily: "Karma",
              fontSize: 20,
              borderColor: "#F0E8E8",
            }}
            dropdownStyles={{
              width: width * 0.85,
              height: height * 0.1,
              backgroundColor: "#e6e9ed",
              borderRadius: 10,
              paddingLeft: width * 0.025,
              paddingRight: width * 0.025,
              marginLeft: 30,
              marginTop: 5,
              fontFamily: "Karma",
              fontSize: 20,
              borderColor: "#e6e9ed",
            }}
            label="Type"
          />
          <TextInput
            style={styles.textContainer}
            onChangeText={(val) => setName(val)}
            placeholder="Name"
            value={name}
          />
          <TextInput
            style={styles.textContainer}
            onChangeText={(val) => setDuration(val)}
            placeholder="Duration"
            value={duration}
          />
          <TextInput
            style={styles.textContainer2}
            onChangeText={(val) => setDescription(val)}
            multiline
            placeholder="Description"
            value={description}
          />
          <Text style={styles.normalText}>Upload Media</Text>
          <Buttons theme="addMedia" onPress={pickImage} />
          <Buttons theme="Done" onPress={handleSubmit} />
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  banner: {
    marginTop: 0,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#D73F09",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textContainer: {
    width: width * 0.85,
    height: height * 0.04,
    backgroundColor: "#F0E8E8",
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 4,
    marginLeft: 30,
    marginTop: 20,
    fontFamily: "Karma",
    fontSize: 18,
  },
  textContainer2: {
    width: width * 0.85,
    height: height * 0.15,
    backgroundColor: "#F0E8E8",
    borderRadius: 10,
    paddingLeft: width * 0.025,
    paddingRight: width * 0.025,
    paddingTop: height * 0.01,
    marginLeft: 30,
    marginTop: 20,
    fontFamily: "Karma",
    fontSize: 20,
  },
  textGrey: {
    color: "#767170",
    fontSize: 20,
    fontFamily: "Karma",
    paddingTop: 3,
  },
  normalText: {
    color: "#F6F3F3",
    marginLeft: 34,
    marginBottom: 12,
    marginTop: 10,
    fontSize: 20,
    fontFamily: "Karma",
  },
  cornerText: {
    color: "#F6F3F3",
    marginLeft: 340,
    marginTop: 20,
    fontSize: 23,
    fontFamily: "Karma",
  },
  title: {
    color: "#F6F3F3",
    marginBottom: 30,
    marginTop: 80,
    marginLeft: 25,
    fontSize: 45,
    fontFamily: "Karma",
  },
});
