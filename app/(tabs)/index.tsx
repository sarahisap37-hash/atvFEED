// linear gradient
import { LinearGradient } from "expo-linear-gradient";

// css
import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import Header from "@/components/Header";
import {
  ScrollView,
  View,
  Text,
Image
} from "react-native";

export default function Home() {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);

  const posts = [
    "https://s2-g1.glbimg.com/NHtPVyP1vLEJ2HxfPhiOsDu_Nao=/0x0:1280x853/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/6/C/HsPyFWSdieXzdUixeU7w/capibara.jpg",
    "https://s3.animalia.bio/animals/photos/full/1.25x1/capybara-sitting-sideways-18114724916jpg.webp?id=48cc1aecd037d38ed4616c40df7d4629",
  ];

  return (
    <ScrollView style={styles.container}>
      <Header  />

      {/* PERFIL */}
      <View style={styles.profileCard}>
        <View style={styles.profileTop}>
          <View style={styles.avatar} />

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Sarah Isabela</Text>
            <Text style={styles.username}>@sarahisz_</Text>
          </View>
        </View>

        {/* STATS */}
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>547</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>755</Text>
            <Text style={styles.statLabel}>Seguindo</Text>
          </View>
        </View>
      </View>

      {/* FEED */}
      <View style={styles.feed}>
        {posts.map((item) => (
          <img src={item}  style={styles.post} />
    
        ))}
      </View>
    </ScrollView>
  );
}

