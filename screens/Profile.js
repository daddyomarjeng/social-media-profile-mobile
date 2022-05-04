import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Posts from "../components/Posts";
import Following from "../components/Following";
import Followers from "../components/Followers";
import Avatar from "../components/Avatar";
import { POSTS, USERS } from "../data";
const { width, height } = Dimensions.get("window");

const Profile = () => {
  const [tab, setTab] = useState("posts");
  const [counts, setCounts] = useState({
    posts: 0,
    following: 0,
    followers: 0,
  });

  useEffect(() => {
    const postsCount = POSTS.length;
    const followingCount = USERS.filter((user) => user.following);
    const followersCount = USERS.filter((user) => user.follower);
    setCounts({
      posts: postsCount,
      following: followingCount.length,
      followers: followersCount.length,
    });
    return () => {
      setCounts({ posts: 0, following: 0, followers: 0 });
    };
  }, []);

  const handleTabClick = (selectedTab) => {
    if (tab === selectedTab) {
      return 0;
    }
    setTab(selectedTab);
    // console.log("Rerendered");
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.edit}>
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.middle}>
        <Text style={styles.heading}>Profile</Text>
        <Avatar />
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[
              styles.tab,
              { backgroundColor: tab === "posts" ? "#AC4642" : "transparent" },
            ]}
            onPress={() => handleTabClick("posts")}
            disabled={tab === "posts"}
          >
            <Text
              style={[
                styles.tabTextBig,
                { color: tab === "posts" ? "#fff" : "#000" },
              ]}
            >
              {counts.posts}
            </Text>
            <Text
              style={[
                styles.tabTextSmall,
                { color: tab === "posts" ? "#ccc" : "#888" },
              ]}
            >
              Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              {
                backgroundColor:
                  tab === "following" ? "#AC4642" : "transparent",
              },
            ]}
            onPress={() => handleTabClick("following")}
            disabled={tab === "following"}
          >
            <Text
              style={[
                styles.tabTextBig,
                { color: tab === "following" ? "#fff" : "#000" },
              ]}
            >
              {counts.following}
            </Text>
            <Text
              style={[
                styles.tabTextSmall,
                { color: tab === "following" ? "#ccc" : "#888" },
              ]}
            >
              Following
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              {
                backgroundColor:
                  tab === "followers" ? "#AC4642" : "transparent",
              },
            ]}
            onPress={() => handleTabClick("followers")}
            disabled={tab === "followers"}
          >
            <Text
              style={[
                styles.tabTextBig,
                { color: tab === "followers" ? "#fff" : "#000" },
              ]}
            >
              {counts.followers}
            </Text>
            <Text
              style={[
                styles.tabTextSmall,
                { color: tab === "followers" ? "#ccc" : "#888" },
              ]}
            >
              Followers
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Bottom */}
      <ScrollView contentContainerStyle={styles.bottom}>
        {tab === "posts" ? <Posts /> : null}
        {tab === "following" ? <Following /> : null}
        {tab === "followers" ? <Followers /> : null}
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,

    paddingVertical: 50,
    backgroundColor: "#FBE6E6",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  edit: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 20,
  },
  middle: {
    // marginTop: 10,
  },
  heading: {
    fontSize: 35,
    // fontWeight: "bold",
  },

  tabs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: 70,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 20,
  },
  tab: {
    width: "32%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  tabTextBig: {
    fontSize: 25,
    fontWeight: "bold",
  },
  tabTextSmall: {
    fontSize: 12,
    letterSpacing: 2,
  },
});
