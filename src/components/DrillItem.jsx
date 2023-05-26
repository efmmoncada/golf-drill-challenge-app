import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { moderateScale } from "./scaling_utilities";
import { useNavigation } from "@react-navigation/native";

const DrillItem = ({ title, subtext, id, drillRef }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={item.itemContainer} onPress={() => navigation.navigate('AssignDrill', { drillRef })}>
      <Text allowFontScaling={false} style={item.title}>
        {title}
      </Text>
      <Text allowFontScaling={false} style={item.subtext}>
        {subtext}
      </Text>
    </TouchableOpacity>
  );
};

const item = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#F6F3F3",
    padding: moderateScale(15),
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(25),
    color: "#767170",
  },
  title: {
    fontSize: moderateScale(24),
    color: "#767170",
    fontFamily: "Karma",
  },
  subtext: {
    fontSize: moderateScale(16),
    color: "#767170",
    fontFamily: "Karma",
  },
});

export default DrillItem;
