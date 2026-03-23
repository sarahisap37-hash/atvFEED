import React from "react";
import { styles } from "./";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Container central */}
      <div style={styles.container}>
        {children}
      </div>
    </div>
  );
};

export default Layout;