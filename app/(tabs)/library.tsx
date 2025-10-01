import {
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Spacer from "@/components/spacer";
import { Colors } from "@/constants/theme";
import Icon6 from "@expo/vector-icons/FontAwesome6";
import { Image } from "expo-image";
import Animated from "react-native-reanimated";
import { genres } from "@/constants/data";

export default function LibraryScreen() {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
      <Animated.Text style={styles.searching}>Your Library</Animated.Text>
      <Spacer size={20} />
      <ScrollView style={styles.scrollView}>
        
        <Spacer size={20} />
        {/* Future content can go here */}
        <Animated.Text style={styles.browseAllText}>Recents</Animated.Text>
        <Spacer size={10} />
        {/* <FlatList
          data={genres}
          keyExtractor={(item) => item.id}
          style={styles.genreList}
          numColumns={2}
          columnWrapperStyle={styles.genreRow}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <Spacer size={10} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.genreItem, { backgroundColor: item.color }]}
            >
              <Animated.Text style={styles.genreText}>
                {item.name}
              </Animated.Text>
              <Image
                source={item.image}
                style={styles.genreImage}
                transition={1000}
              />
            </TouchableOpacity>
          )}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
    height: "100%",
    zIndex: 1,
  },
  searching: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.text,
    marginTop: 20,
    marginLeft: 20,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    height: 46,
    backgroundColor: Colors.text,
    borderColor: Colors.background,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 15,
  },
  searchIcon: {},
  textInput: {
    fontWeight: "600",
    fontSize: 16,
    color: Colors.background,
  },
  browseAllText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "700",
  },
  genreList: {
    gap: 10,
  },
  genreRow: {
    gap: 5,
  },
  genreItem: {
    width: "50%",
    height: 100,
    borderRadius: 4,
    overflow: "hidden",
  },
  genreText: {
    padding: 16,
    color: Colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  genreImage: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 0,
    right: -10,
    borderRadius: 4,
    transform: [{ rotate: "16deg" }],
  },
});
