import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { createUserStyles } from "@/assets/styles/user.styles";
import { LinearGradient } from "expo-linear-gradient";
import useTheme from "@/hooks/useTheme";

export default function Feed() {
  const { colors } = useTheme();
  const styles = createUserStyles(colors);

  const posts = useQuery(api.posts.getPosts);
  const addPost = useMutation(api.posts.addPost);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = () => {
    if (!title || !image) return;
    addPost({ title, image });
    setTitle("");
    setImage("");
  };

  return (
    <LinearGradient colors={["#0f172a", "#020617"]} style={{ flex: 1 }}>
      <View style={styles.container}>

        {/* LOGO */}
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/08/2d/04/082d043fbb620d7bfa3a5c00d9781ce6.jpg",
          }}
          style={styles.logo}
        />

        {/* INPUTS */}
        <TextInput
          placeholder="Título do post"
          placeholderTextColor="#aaa"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />

        <TextInput
          placeholder="Link da imagem"
          placeholderTextColor="#aaa"
          value={image}
          onChangeText={setImage}
          style={styles.input}
        />

        {/* BOTÃO */}
        <Pressable style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Postar</Text>
        </Pressable>

        {/* LOADING */}
        {!posts && <Text style={styles.loading}>Carregando...</Text>}

        {/* FEED */}
        <FlatList
          data={posts || []}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.post}>
              <Text style={styles.postTitle}>{item.title}</Text>

              <Image
                source={{ uri: item.image }}
                style={styles.postImage}
              />
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
}