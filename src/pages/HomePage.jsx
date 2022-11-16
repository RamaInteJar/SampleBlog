import React from "react";
import Layout from "../components/Layout";
import Heropage from "./Heropage";
import Posts from "./Posts";

const HomePage = () => {
  return (
    <Layout>
      <Heropage />
      <Posts />
    </Layout>
  );
};

export default HomePage;
