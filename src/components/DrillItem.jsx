import React, { useContext } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { moderateScale } from "./scaling_utilities";
import { useNavigation, useRoute } from "@react-navigation/native";
import AuthContext from "../../context/AuthContext";

const DrillItem = ({ title, subtext, id, drillRef }) => {
  const currRoute = useRoute();
  const navigation = useNavigation();
  const [user, setUser] = useContext(AuthContext);

  const route = user.isCoach ? "AssignDrill" : "Drill";
  const routeProps = user.isCoach ? { drillRef } : { id };

  return (
    <TouchableOpacity style={item.itemContainer} onPress={() => currRoute.name !== "TeamProgress" && navigation.navigate(route, routeProps)}>
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
    backgroundColor: "#ffffff",
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
