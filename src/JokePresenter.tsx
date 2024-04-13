import {Joke} from "./Joke";
import React, {useState} from "react";
import axios from "axios";

interface jokeData {
  id: string
  value: string
  url: string
}

export const JokePresenter = () => {
  const [joke, setJoke] = useState("")
  const update = async () => {
    const jokeResponse = await axios.get("https://api.chucknorris.io/jokes/random")
    setJoke(jokeResponse.data.value)
    
  }
  
  return <div>
    <Joke value={joke ? joke : "Press me"}/>
    <button className="the-button" onClick={() => update()}>Update</button>
  </div>
  
}