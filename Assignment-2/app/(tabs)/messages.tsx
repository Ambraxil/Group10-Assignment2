import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

const CHATS = [
  { name: "Sam Krapf", message: "Hey, how are you?" },
  { name: "Zoer007", message: "The silence speaks..." },
  { name: "Nasser", message: "Check this out!" },
];

export default function Messages() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topBar}>
        <Image
          source={require("../../assets/images/default-pfp.png")}
          style={styles.profile}
        />

        <Text style={styles.xLogo}>Messages</Text>

        <View style={{ width: 34 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {CHATS.map((chat, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.name}>{chat.name}</Text>
            <Text style={styles.message}>{chat.message}</Text>
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

  name: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  message: {
    color: "#777",
    marginTop: 4,
  },
});