import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
  Alert,
} from "react-native";

export default function App() {
  const [activeTab, setActiveTab] = useState<"forYou" | "following">("forYou");

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />

      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image
          source={require("../assets/images/default-pfp.png")}
          style={styles.profile}
        />
        <Text style={styles.xLogo}>X</Text>
        <View style={{ width: 34 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Pressable style={styles.tab} onPress={() => setActiveTab("forYou")}>
          <Text style={[styles.tabText, activeTab === "forYou" && styles.tabTextActive]}>
            For you
          </Text>
          {activeTab === "forYou" && <View style={styles.tabIndicator} />}
        </Pressable>

        <Pressable style={styles.tab} onPress={() => setActiveTab("following")}>
          <Text style={[styles.tabText, activeTab === "following" && styles.tabTextActive]}>
            Following
          </Text>
          {activeTab === "following" && <View style={styles.tabIndicator} />}
        </Pressable>
      </View>

      {/* Feed */}
      <ScrollView contentContainerStyle={styles.feed}>
        {/* Tweet */}
        <View style={styles.tweet}>
          <Image
            source={require("../assets/images/default-pfp.png")}
            style={styles.avatar}
          />

          <View style={styles.tweetBody}>
            <View style={styles.row}>
              <Text style={styles.name}>Sam Krapf</Text>
              <Text style={styles.meta}> @samkrapf · 6h</Text>
              <Text style={styles.more}>⋯</Text>
            </View>

            <Text style={styles.tweetText}>
              "Lifting weights doesn't matter in martial arts"
               Islam pulling 485 Jon Jones pulling 600
              You sure strength doesn't matter to these guys?
            </Text>

            {/* Media*/}
            <View style={styles.mediaRow}>
              <Image
                source={require("../assets/images/jon.jpeg")}
                style={[styles.media, styles.mediaLeft]}
              />
              <Image
                source={require("../assets/images/islam.jpeg")}
                style={[styles.media, styles.mediaRight]}
              />
            </View>

            {/* Actions */}
            <View style={styles.actions}>
              <Text style={styles.action}>💬 63</Text>
              <Text style={styles.action}>🔁 30</Text>
              <Text style={styles.action}>❤️ 1.1K</Text>
              <Text style={styles.action}>📊 65K</Text>
            </View>
          </View>
        </View>

{/* Tweet */}
<View style={styles.tweet}>
  <Image
    source={require("../assets/images/default-pfp.png")}
    style={styles.avatar}
  />

  <View style={styles.tweetBody}>
    <View style={styles.row}>
      <Text style={styles.name}>The silence speaks</Text>
      <Text style={styles.meta}> @Zoer007 · 2h</Text>
      <Text style={styles.more}>⋯</Text>
    </View>

    <Text style={styles.tweetText}>
      "The silence speaks when words can't express how you feel"
    </Text>

        <View style={styles.actions}>
              <Text style={styles.action}>💬 4</Text>
              <Text style={styles.action}>🔁 3</Text>
              <Text style={styles.action}>❤️ 29</Text>
              <Text style={styles.action}>📊 1.5K</Text>
            </View>
          </View>
        </View>
        {/*  Tweet  */}
        <View style={styles.tweet}>
          <Image
            source={require("../assets/images/default-pfp.png")}
            style={styles.avatar}
          />

          <View style={styles.tweetBody}>
            <View style={styles.row}>
              <Text style={styles.name}> Nasser</Text>
              <Text style={styles.meta}> @Nasswe91 · 19h</Text>
              <Text style={styles.more}>⋯</Text>
            </View>

            <Image
              source={require("../assets/images/japan.jpg")}
              style={styles.singleMedia}
            />

            <View style={styles.actions}>
              <Text style={styles.action}>💬 3</Text>
              <Text style={styles.action}>🔁 1</Text>
              <Text style={styles.action}>❤️ 29</Text>
              <Text style={styles.action}>📊 5.8K</Text>
            </View>
          </View>
        </View>

        {/* Alert */}
        <Pressable
          style={styles.alertBtn}
          onPress={() => Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertBtnText}>Alert</Text>
        </Pressable>

        <View style={{ height: 90 }} />
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <Text style={styles.navIcon}>🏠</Text>
        <Text style={styles.navIcon}>🔎</Text>
        <Text style={styles.navIcon}>🔔</Text>
        <Text style={styles.navIcon}>✉️</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#000" },

  topBar: {
    height: 54,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#1f1f1f",
  },
  profile: { width: 34, height: 34, borderRadius: 17 },
  xLogo: { color: "#fff", fontSize: 26, fontWeight: "800" },

  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#1f1f1f",
  },
  tab: { flex: 1, alignItems: "center", paddingVertical: 12 },
  tabText: { color: "#777", fontSize: 16, fontWeight: "700" },
  tabTextActive: { color: "#fff" },
  tabIndicator: {
    marginTop: 10,
    height: 3,
    width: 70,
    borderRadius: 10,
    backgroundColor: "#1d9bf0",
  },

  feed: { paddingBottom: 10 },

  tweet: {
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#1f1f1f",
  },
  avatar: { width: 44, height: 44, borderRadius: 22, marginRight: 10 },
  tweetBody: { flex: 1 },

  row: { flexDirection: "row", alignItems: "center" },
  name: { color: "#fff", fontWeight: "800", fontSize: 15 },
  meta: { color: "#8a8a8a", fontSize: 13 },
  more: { marginLeft: "auto", color: "#8a8a8a", fontSize: 18 },

  tweetText: { color: "#fff", fontSize: 15, lineHeight: 20, marginTop: 6 },

  mediaRow: { flexDirection: "row", marginTop: 10, gap: 8 },
  media: { flex: 1, height: 190, borderRadius: 14 },
  mediaLeft: {},
  mediaRight: {},

  singleMedia: { marginTop: 10, width: "100%", height: 220, borderRadius: 14 },

  actions: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 6,
  },
  action: { color: "#8a8a8a", fontSize: 13 },

  alertBtn: {
    marginTop: 14,
    marginHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  alertBtnText: { color: "#000", fontSize: 16, fontWeight: "800" },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#1f1f1f",
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 6,
  },
  navIcon: { color: "#fff", fontSize: 22 },
});
