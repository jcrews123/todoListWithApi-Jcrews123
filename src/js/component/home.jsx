import React, { useState } from "react";
import {InputBox} from "./InputBox";
import { ListedTaskCreator } from "./ListedTaskCreator";
//Home componenet used to hold all of my project
const Home = () => {
	const[inputValue,setInputValue] = useState("")
	const[todos, setTodos] = useState([])
	//start of building html elements using javascript and react to render
	return (
		<div className="container">
			{/* header that says title mixed with the current task inputed */}
			<h1>My To Do List</h1><h1 placeholder="Task"> {inputValue}</h1>
			<ul>
				{/* first use of the inputBox component. the component is holding the input box. i used this because its good practice and helps code look better */}
				<InputBox inputValue={inputValue} setTodos={setTodos} todos={todos} setInputValue={setInputValue}/>
				{/* this is a different component. the component is used to create the new list item task. i used this to help clean up the code but it is  */}
				<ListedTaskCreator todos={todos} setTodos={setTodos}/>
			</ul>
		{/* this is a counter of the amount of tasks */}
		<div>{todos.length} tasks</div>
		</div>
);};

export default Home;
