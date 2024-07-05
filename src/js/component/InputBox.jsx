import React, { useState } from "react";

export const InputBox = ({inputValue, setInputValue, todos, setTodos}) => {
return(
    <li>
		<input
			type="text"
			onChange={(event)=> 
            setInputValue(event.target.value)}
			value={inputValue}
			onKeyDown={(event) =>{
				if(event.key ==="Enter"){
					setTodos(todos.concat(inputValue));
				}}}
			placeholder="what do you need to do?"
		></input>
	</li>
)}