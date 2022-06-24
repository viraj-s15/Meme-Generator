import React from "react";
import "./Memes.css";
import memeData from "./memeData.js";

export default function Memes() {
	const [memeImage, setMemeImage] = React.useState({
		topText: "",
		bottomText: "",
		imgUrl: "",
	});

	const [memeImages, setMemeImages] = React.useState(memeData);

	function displayMeme() {
		const memeArray = memeImages.data.memes;
		const rndnum = Math.floor(Math.random() * memeArray.length);
		const memeUrl = memeArray[rndnum].url;
		setMemeImage((prevMeme) => ({
			...prevMeme,
			imgUrl: memeUrl,
		}));
	}

  function handleInput(event) {
   const {name, value} = event.target
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
}
  
	return (
		<div className="memes--container">
			<div className="memes--input--field">
				<input
					type="text"
					className="input--field1"
          placeholder="Top text"
          name="topText"
          value={memeImages.topText}
          onChange = {handleInput}
          ></input>
				<input
					type="text"
					className="input--field2"
          placeholder="Bottom text"
          name ="bottomText"
          value = {memeImages.bottomText}
          onChange = {handleInput}
				></input>
			</div>
			<button className="memes--submit--button" onClick={displayMeme}>
				Generate meme
			</button>
			<div className="memes--wrapper">
				<img className="memes--img" src={memeImage.imgUrl}></img>
        <h2 className="memes--top--text">{memeImage.topText}</h2>
				<h2 className="memes--bottom--text">{memeImage.bottomText}</h2>
			</div>
		</div>
	);
}
