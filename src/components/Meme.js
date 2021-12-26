import React, { useState } from "react";
import memesData from "../memesData";

function Meme() {
  // console.log(memesData.data.memes[6].url)
  // console.log(memesData.data.memes.length);
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const index = Math.floor(Math.random() * memesArray.length);
    const image = memesArray[index].url;
    //console.log(image);
    setMemeImage(image);
  };
  return (
    <main className="form--group">
      <div className="form">
        <input type="text" placeholder="Text on  top" className="form--input" />
        <input type="text" placeholder="Text below" className="form--input" />
        <button onClick={getMemeImage} type="submit" className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage.randomImage} alt={memeImage.randomImage} className="meme--Image" />
    </main>
  );
}

export default Meme;
