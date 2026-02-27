import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

const NOTIFICATIONS = [
  "Sam liked your post",
  "Zoer replied to your tweet",
  "Nasser shared your photo",
  "New follower: John Doe",
];

export default function Notifications() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topBar}>
        <Image
          source={require("../../assets/images/default-pfp.png")}
          style={styles.profile}
        />

        <Text style={styles.xLogo}>Notifications</Text>

        <View style={{ width: 34 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {NOTIFICATIONS.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#000",
  },

  topBar: {
    height: 54,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#1f1f1f",
  },

  profile: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },

  xLogo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
  },

  card: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1f1f1f",
  },

  text: {
    color: "#fff",
    fontSize: 15,
  },
});