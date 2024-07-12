import React, { useState } from "react";

const Home = () => {
const[inputValue,setInputValue] = useState("")
const[tasks, setTasks] = useState([])

async function fetchTasks() {
	try{
		const response = await fetch(
			"https://playground.4geeks.com/todo/users/jadenC",{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			});
			const user = await response.json();
			console.log("these are the user's tasks:", user.todos);
			setTasks(user.todos);
		}catch (error){
			console.log("there was an error", error)
		}
}
async function addTasks() {
	try{
		const response = await fetch(
			"https://playground.4geeks.com/todo/todos/jadenC",{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				}, body: JSON.stringify({
					"label" : inputValue,
					"is_done" : false,
				})
			});
			const user = await response.json();
			console.log("Current task being added:", user);
			tasks.push(user)
			setInputValue("")
		}catch (error){
			console.log("there was an error", error)
		}
}
		function deleteAllTasks() {
			tasks.forEach(async task => {
				await deleteIndividualTasks(task, false)
			})
			setTasks([]);
		}
async function deleteIndividualTasks(deletedTask, shouldRender) {
	try{
		console.log(deletedTask.id)
		 await fetch(
			`https://playground.4geeks.com/todo/todos/${deletedTask.id}`,{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json"
				}
			});
			console.log("the deleted task is:", deletedTask);
			if(shouldRender){
				setTasks(tasks.filter((t,currentIndex )=> t.id != deletedTask.id))
			}
		}catch (error){
			console.log("there was an error", error)
		}
}
	return (
		<div className="container">
			<h1>My To Do List</h1><h1 placeholder="Task"> {inputValue}</h1>
			<button
				className="btn btn-priamry"
				onClick={fetchTasks}>
				fetch tasks
			</button>
			<button
				className="btn btn-priamry"
				onClick={addTasks}>
				add a task
			</button>
			<button
				className="btn btn-priamry"
				onClick={(event) => deleteAllTasks()}>
				delete all tasks
			</button>
			<ul>
				<li>
					<input
						type="text"
						onChange={(event)=> 
            			setInputValue(event.target.value)}
						value={inputValue}
						onKeyDown={(event) =>{
							if(event.key ==="Enter"){
								setTasks(tasks.concat(inputValue));
							}}}
						placeholder="what do you need to do?"
						></input>
				</li>
			<div>
        		{tasks.map((eachTask,index) =>(
					<li key={eachTask.id}>
						{eachTask.label} <i className="fas fa-trash-alt align-items-center" onClick={(event) => deleteIndividualTasks(eachTask, true)}></i>
					</li>
				))}
   	 		</div>
			</ul>
		<div>{tasks.length} tasks</div>
		</div>
);};

export default Home;
