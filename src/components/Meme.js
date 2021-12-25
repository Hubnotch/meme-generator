import React,{useState} from "react";
import memesData from "../memesData"


function Meme() {
  // console.log(memesData.data.memes[6].url)
  // console.log(memesData.data.memes.length);
const [memeImage, setMemeImage] = useState("")
  const getRandomImage = () =>{
    const memesArray = memesData.data.memes
    const index = Math.floor(Math.random() * memesArray.length);
    const image = memesArray[index].url;
    //console.log(image);
    setMemeImage( image)
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
      <img src={memeImage} alt={memeImage} className="meme--Image" />
    </main>
  );
}

export default Meme;
