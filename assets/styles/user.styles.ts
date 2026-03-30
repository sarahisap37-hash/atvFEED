import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createUserStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
  },

  logo: {
    width: 90,
    height: 90,
    alignSelf: "center",
    borderRadius: 50,
    marginBottom: 15,
  },

  input: {
    backgroundColor: "#0d0f1a",
    color: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#891717",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  post: {
    backgroundColor: "#111",
    padding: 10,
    borderRadius: 16,
    marginBottom: 15,
  },

  postTitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
  },

  postImage: {
    width: "100%",
    height: 250,
    borderRadius: 12,
  },

  loading: {
    color: "#aaa",
    textAlign: "center",
  },
  });

  return styles;
};
