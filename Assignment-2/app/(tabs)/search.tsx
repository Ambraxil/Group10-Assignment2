import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { useMemo, useState } from "react";

type Trend = {
  id: string;
  topic: string;
  posts: string;
};

const TRENDS: Trend[] = [
  { id: "1", topic: "#Expo", posts: "12.3K posts" },
  { id: "2", topic: "#ReactNative", posts: "8.7K posts" },
  { id: "3", topic: "#SAIT", posts: "2,104 posts" },
  { id: "4", topic: "#Calgary", posts: "5,981 posts" },
  { id: "5", topic: "#X_UI", posts: "1,502 posts" },
];

export default function Search() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TRENDS;
    return TRENDS.filter((t) =>
      t.topic.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image
          source={require("../../assets/images/default-pfp.png")}
          style={styles.profile}
        />
        <Text style={styles.title}>Search</Text>
        <View style={{ width: 34 }} />
      </View>

      {/* Search Input */}
      <View style={styles.container}>
        <TextInput
          placeholder="Search X..."
          placeholderTextColor="#777"
          value={query}
          onChangeText={setQuery}
          style={styles.input}
        />

        <Text style={styles.section}>Trends for you</Text>

        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable style={styles.card}>
              <Text style={styles.trend}>{item.topic}</Text>
              <Text style={styles.posts}>{item.posts}</Text>
            </Pressable>
          )}
          contentContainerStyle={{ paddingBottom: 90 }}
        />
      </View>
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

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
  },

  container: {
    flex: 1,
    padding: 14,
  },

  input: {
    backgroundColor: "#1f1f1f",
    color: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },

  section: {
    color: "#8a8a8a",
    fontWeight: "700",
    marginBottom: 8,
  },

  card: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#1f1f1f",
  },

  trend: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  posts: {
    color: "#777",
    marginTop: 4,
  },
});