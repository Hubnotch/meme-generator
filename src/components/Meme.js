import React from "react";

function Meme() {
  return (
    <main className="form--group">
      <form action="#" className="form">
        <input type="text" placeholder="Text on  top" className="form--input" />
        <input type="text" placeholder="Text below" className="form--input" />
        <button type="submit" className="form--button">
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
}

export default Meme;
