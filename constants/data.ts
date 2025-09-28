export const artists = [
  {
    id: "1",
    name: "The Weeknd",
    coverImage: require("../assets/images/drake.jpg"),
    coverColor: "#1DB954", // Green gradient
    emoji: "🌟", // Fallback if image doesn't load
  },
  {
    id: "2",
    name: "Dua Lipa",
    coverImage: require("../assets/images/drake.jpg"),
    coverColor: "#FF6B6B", // Red gradient
    emoji: "🔥",
  },
  {
    id: "3",
    name: "Drake",
    coverImage: require("../assets/images/drake.jpg"),
    coverColor: "#4ECDC4", // Teal gradient
    emoji: "🎤",
  },
  {
    id: "4",
    name: "Billie Eilish",
    coverImage: require("../assets/images/drake.jpg"),
    coverColor: "#FF9AA2", // Pink gradient
    emoji: "🌸",
  },
  {
    id: "5",
    name: "Drake",
    coverImage: require("../assets/images/drake.jpg"),
    coverColor: "#4ECDC4", // Teal gradient
    emoji: "🎤",
  },
];

export const playlists = [
  {
    id: "1",
    name: "Liked Songs",
    description: "67 songs",
    coverImage: require("../assets/images/indie.jpg"),
    coverColor: "#1DB954", // Green gradient for liked songs
    emoji: "💚", // Fallback if image doesn't load
    songCount: 67,
    songs: [], // Will be populated later
  },
  {
    id: "2",
    name: "Today's Top Hits",
    description: "50 songs",
    coverImage: require("../assets/images/indie.jpg"),
    coverColor: "#FF6B6B", // Red gradient
    emoji: "🔥",
    songCount: 50,
    songs: [],
  },
  {
    id: "3",
    name: "Chill Hits",
    description: "43 songs",
    coverImage: require("../assets/images/indie.jpg"),
    coverColor: "#4ECDC4", // Teal gradient
    emoji: "🌊",
    songCount: 43,
    songs: [],
  },
  {
    id: "4",
    name: "Rock Classics",
    description: "78 songs",
    coverImage: require("../assets/images/indie.jpg"),
    coverColor: "#FFE66D", // Yellow gradient
    emoji: "🎸",
    songCount: 78,
    songs: [],
  },
];
