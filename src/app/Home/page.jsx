import Header from "@/Component/Header";
import Navbar from "@/Component/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="bg-[#2D3E50]">
        <Header></Header>
      </section>
      <section>
        <Navbar></Navbar>
      </section>
    </>
  );
};

export default HomePage;
