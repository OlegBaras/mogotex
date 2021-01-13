import React from "react";
import Nav from "../components/Nav";
import LanguageSelector from "../components/LanguageSelector";
import Home from "../components/Home";

export default function Landing() {
  return (
    <>
      <header>
        <Nav />
        <LanguageSelector />
      </header>
      <main>
        <Home />
      </main>
    </>
  );
}
