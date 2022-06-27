import React, {useState, useEffect} from "react";
import "./Memes.css";
s

export default function Memes() {
	const [memeImage, setMemeImage] = useState({
		topText: "",
		bottomText: "",
		imgUrl: "",
	});

	const [memeImages, setMemeImages] = useState([]);

	useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])


	function displayMeme() {
		const rndnum = Math.floor(Math.random() * memeImages.length);
		const memeUrl = memeImages[rndnum].url;
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
