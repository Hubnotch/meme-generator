import React from "react";
import memesData from "../memesData"
function Meme() {
  // console.log(memesData.data.memes[6].url)
  // console.log(memesData.data.memes.length);

  const getRandomImage = () =>{
    const memesArray = memesData.data.memes
    const index = Math.floor(Math.random() * memesArray.length);
    const image = memesArray[index].url;
    console.log(image);
  }
  return (
    <main className="form--group">
      <div className="form">
        <input type="text" placeholder="Text on  top" className="form--input" />
        <input type="text" placeholder="Text below" className="form--input" />
        <button onClick={getRandomImage} type="submit" className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}

export default Meme;
