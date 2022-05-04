import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { USERS } from "../data";

const Following = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(USERS.filter((user) => user.follower));
    return () => {
      setUsers([]);
    };
  }, []);

  const Item = ({ id, name, avatar, follower, following, address }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.left}>
        <Image source={avatar} style={styles.avatar} />
      </View>
      <View style={styles.middle}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>from {" " + address}</Text>
      </View>
      <TouchableOpacity style={styles.right}>
        <Text style={styles.unfollow}>Unfollow</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  //   const renderItem = ({ item }) => (
  //     <Item
  //       id={item.id}
  //       name={item.name}
  //       Following={item.Following}
  //       follower={item.follower}
  //       address={item.address}
  //       avatar={item.avatar}
  //     />
  //   );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>You are being followed by:</Text>
      <View>
        {users.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              Following={item.Following}
              follower={item.follower}
              address={item.address}
              avatar={item.avatar}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Following;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // marginBottom: 150,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  card: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "#FBE6E6",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  left: {
    flex: 1,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  middle: {
    flex: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    fontSize: 13,
    color: "#888",
  },
  right: {
    flex: 1,
    // backgroundColor: "#AA2042",
    // padding: 10,
    // borderRadius: 10,
  },
  unfollow: {
    color: "#AA2042",
    textAlign: "center",
  },
});
