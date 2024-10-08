import React, { useRef } from "react";
import  Button  from "./Button";
import {fetchHeroes} from "../utils/utils.js"
export default function SearchBar({ handleClick, setHeroes, setError }) {
  
  // // useRef
// •	Purpose: To create a reference to a DOM element or to store mutable values that do not trigger a re-render when changed.
	// •	When to use: Use useRef when you need to directly manipulate a DOM element or when you want to keep a value that persists across renders but doesn’t need to trigger a re-render.
	// •	Common use cases:
	// •	Accessing a DOM element directly (e.g., focusing an input).
	// •	Storing a mutable value that shouldn’t trigger a component re-render (e.g., timers, previous state values).

  let input = useRef("");

  return (

    // this a form which is used for the searching the files 
    <form>
      <input type="text" placeholder="Search hero..." ref={input} />
      {/* // imported button where it created in button.jsx */}
      <Button
        text={"Search"}

        // creating an event handler  
        handleClick={(e) => {
          handleClick(e, input.current.value)
            .then((data) => setHeroes(data.data.results))
            .catch((err) => setError(err));
        }}
      />
    </form>
  );
}