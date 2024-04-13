import {Joke} from "./Joke";
import React, {useState} from "react";

export const JokePresenter = () => {
  const [joke, setJoke] = useState("")
  const update = () => {
    console.log("update")
    setJoke("foo")
  }
  
  return <div>
    <Joke value={joke ? joke : "Press me"}/>
    <button className="the-button" onClick={() => update()}>Update</button>
  </div>
  
}