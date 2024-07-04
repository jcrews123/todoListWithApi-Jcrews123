import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[inputValue,setInputValue] = useState("")
	const[todos, setTodos] = useState([])
	return (
		<div className="container">
			<h1>My Todos</h1><h1 placeholder="Task"> {inputValue}</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(event)=> setInputValue(event.target.value)}
						value={inputValue}
						onKeyDown={(event) =>{
							if(event.key ==="Enter"){
								setTodos(todos.concat(inputValue));
							}
						}}
						placeholder="what do you need to do?"></input>
				</li>
		{todos.map((item,index) =>(
			<li>
				{item} <i className="fas fa-trash-alt align-items-center" onClick={() => setTodos(todos.filter((t,currentIndex )=> index != currentIndex))}></i>
			</li>
		))}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	);
};

export default Home;
