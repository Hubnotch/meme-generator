import React from "react";
import troll from "../images/troll-face.png"

export default function Header() {
  return (
    <nav className="header">
      <img src={troll} alt="logo" className="logo"/>
      <p className="logo--title">Meme Generator</p>
      <p className="project--number">React Course - Project 3</p>
    </nav>
  );
}
