import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { POSTS } from "../data";

const Posts = () => {
  //   const [count, setCount] = useState(0);
  let count = -1; //for it to start at 1
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Posts</Text>
      <View style={styles.postsContainer}>
        {POSTS.map((post, index) => {
          count == 3 ? (count = 0) : (count = count + 1);
          //   console.log(count);

          return (
            <TouchableOpacity key={post.id} style={styles.imageContainer}>
              <Image
                source={post.image}
                style={[
                  styles.image,
                  //   { height: (index + 1) % 2 == 0 ? 140 : 180 },
                  { height: count == 0 ? 140 : count == 3 ? 140 : 180 },
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  postsContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: "45%",
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 20,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
