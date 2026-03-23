import { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
  container: {
    maxWidth: 600,
    margin: "0 auto",
    padding: 20,
    fontFamily: "Arial, sans-serif",
  },

  createPost: {
    background: "#fff",
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    marginBottom: 20,
  },

  textarea: {
    width: "100%",
    height: 80,
    borderRadius: 8,
    border: "1px solid #ccc",
    padding: 10,
    resize: "none",
  },

  previewContainer: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 10,
  },

  previewImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    objectFit: "cover",
  },

  button: {
    marginTop: 10,
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    background: "#1877f2",
    color: "#fff",
    cursor: "pointer",
  },

  post: {
    background: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },

  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    gap: 8,
    marginTop: 10,
  },

  postImage: {
    width: "100%",
    height: 100,
    objectFit: "cover",
    borderRadius: 8,
  },
};