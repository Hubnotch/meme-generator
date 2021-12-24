import React from "react";
import troll from "../images/troll-face.png"

export default function Header() {
  return (
    <nav className="header">
      <img src={troll} alt="logo" />
      <p>Meme Generator</p>
      <p>React Course - Project 3</p>
    </nav>
  );
}
