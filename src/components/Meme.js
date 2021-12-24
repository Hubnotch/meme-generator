import React from "react";

function Meme() {
  return (
    <div className="form--group">
      <input
        type="text"
        name=""
        id=""
        placeholder="Text on  top"
        className="form--input adjust"
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Text below"
        className="form--input"
      />
      <input
        type="submit"
        value="Get a new meme image 🖼 "
        className="form--submit"
      />
    </div>
  );
}

export default Meme;
