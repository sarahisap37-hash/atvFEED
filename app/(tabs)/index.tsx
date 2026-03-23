import React, { useState } from "react";
import { styles } from "../../assets/style/style";
import Layout from "./_layout";

type Post = {
  id: number;
  text: string;
  images: string[];
};

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [text, setText] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));

    setImages(urls);
  };

  const handlePost = () => {
    if (!text && images.length === 0) return;

    const newPost: Post = {
      id: Date.now(),
      text,
      images,
    };

    setPosts([newPost, ...posts]);
    setText("");
    setImages([]);
  };

  return (
    <Layout>
      <h2>Feed</h2>

      {/* Criar post */}
      <div style={styles.createPost}>
        <textarea
          placeholder="No que está pensando?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.textarea}
        />

        <input type="file" multiple accept="image/*" onChange={handleImageChange} />

        <div style={styles.previewContainer}>
          {images.map((img, i) => (
            <img key={i} src={img} style={styles.previewImage} />
          ))}
        </div>

        <button onClick={handlePost} style={styles.button}>
          Publicar
        </button>
      </div>

      {/* Feed */}
      {posts.map((post) => (
        <div key={post.id} style={styles.post}>
          <p>{post.text}</p>

          <div style={styles.imageGrid}>
            {post.images.map((img, i) => (
              <img key={i} src={img} style={styles.postImage} />
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default Feed;