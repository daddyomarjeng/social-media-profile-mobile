import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ProfileImg from "../assets/pro1.jpg";

const Avatar = () => {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={ProfileImg}
        style={{ width: 120, height: 120, borderRadius: 15 }}
      />
      <Text style={styles.name}>Aminatou Jallow</Text>
      <Text style={styles.address}>Banjul, The Gambia</Text>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    // letterSpacing: 1,
  },
  address: {
    fontSize: 13,
    color: "#888",
  },
});
