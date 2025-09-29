import { Image } from "expo-image";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AnimatedIcon from "@/components/animatedIcon";
import Spacer from "@/components/spacer";
import { Colors } from "@/constants/theme";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { artists, playlists } from "@/constants/data";
import { useState } from "react";
import AutoScroll from "@homielab/react-native-auto-scroll";

export default function HomeScreen() {
  const [play, setPlay] = useState(false);
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
      <Animated.Text style={styles.greeting}>Good Evening</Animated.Text>
      <Animated.ScrollView nestedScrollEnabled={true}>
        <Spacer size={30} />
        <Animated.Text style={styles.sectionTitle}>
          Your top artists
        </Animated.Text>
        <FlatList
          nestedScrollEnabled={true}
          data={artists}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.artistSeparator} />}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          style={styles.artistList}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.artistContainer}>
              <Image
                source={item.coverImage}
                style={styles.artistImage}
                placeholder={item.emoji}
                transition={1000}
              />
              <Text style={styles.artistName}>{item.name}</Text>
            </View>
          )}
        />
        <Animated.Text style={styles.sectionTitle}>
          Your playlists
        </Animated.Text>
        <FlatList
          data={playlists}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={styles.playlistRow}
          style={styles.playlistGrid}
          renderItem={({ item }) => (
            <View key={item.id} style={[styles.playlistLink]}>
              <Image
                source={item.coverImage}
                style={styles.playlistImage}
                contentFit="cover"
                placeholder={item.emoji}
                transition={1000}
              />
              <Text>{item.emoji}</Text>
              <Text style={styles.playlistName}>{item.name}</Text>
              <Text style={styles.playlistDescription}>{item.description}</Text>
            </View>
          )}
        />
      </Animated.ScrollView>
      <Animated.View style={styles.playerContainer}>
        <View style={styles.playerInfoContainer}>
          <Image
            source={require("../../assets/images/drake.jpg")}
            style={styles.playerAlbumImage}
          />
          <View style={styles.playerTextContainer}>
            <AutoScroll>
              <Text style={styles.playerSongTitle}>
                From Me to You - Mono / Remastered
              </Text>
            </AutoScroll>
            <View style={styles.playerDeviceContainer}>
              <AnimatedIcon
                focused={true}
                name="bluetooth-b"
                size={10}
                color={Colors.primary}
              />
              <Text style={styles.playerDeviceText}>BEATSPILL+</Text>
            </View>
          </View>
        </View>
        <View style={styles.playerControlsContainer}>
          <AnimatedIcon
            focused={true}
            name="bluetooth-b"
            size={25}
            color={Colors.primary}
          />
          <TouchableOpacity onPress={() => setPlay(!play)}>
            <AnimatedIcon
              focused={true}
              name={play ? "pause-circle" : "play-circle"}
              size={29}
              color={Colors.text}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
    height: "100%",
  },
  greeting: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.text,
    marginTop: 20,
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.text,
    marginLeft: 20,
  },
  artistSeparator: {
    width: 20,
  },
  artistList: {
    marginBottom: 50,
  },
  artistContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    width: 200,
  },
  artistImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  artistName: {
    color: Colors.text,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },
  playlistRow: {
    gap: 20,
    marginBottom: 20,
  },
  playlistGrid: {
    gap: 10,
    paddingHorizontal: 7,
  },
  playlistLink: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "column",
    gap: 5,
  },
  playlistImage: {
    width: "100%",
    height: 154,
    // borderRadius: 10,
    marginBottom: 10,
  },
  playlistName: {
    color: Colors.textSecondary,
    fontWeight: "bold",
  },
  playlistDescription: {
    color: Colors.textSecondary,
  },
  playlistSongCount: {
    color: Colors.textSecondary,
  },
  playerContainer: {
    height: 60,
    backgroundColor: "#550A1C",
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  playerInfoContainer: {
    flexDirection: "row",
  },
  playerAlbumImage: {
    width: 37,
    height: 37,
    borderRadius: 5,
  },
  playerTextContainer: {
    justifyContent: "space-between",
    marginLeft: 10,
    width: 250, // Important: needs defined width
  },
  playerSongTitle: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 13,
  },
  playerDeviceContainer: {
    flexDirection: "row",
    gap: 5,
  },
  playerDeviceText: {
    color: Colors.primary,
    fontSize: 12,
  },
  playerControlsContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
