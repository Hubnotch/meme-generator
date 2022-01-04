import React, { useState, useEffect } from "react";
// import memesData from "../memesData";

function Meme() {
  // console.log(memesData.data.memes[6].url)
  // console.log(memesData.data.memes.length);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  const [allMemes, setAllMemes] = useState([]);
  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const getMemeImage = () => {
    const memesArray = allMemes;
    const index = Math.floor(Math.random() * memesArray.length);
    const imageUrl = memesArray[index].url;
    console.log(memesArray);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: imageUrl,
    }));
  };
  return (
    <main className="form--group">
      <div className="form">
        <input
          type="text"
          placeholder="Text on  top"
          className="form--input"
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Text below"
          className="form--input"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        <button onClick={getMemeImage} type="submit" className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt={meme.name} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
