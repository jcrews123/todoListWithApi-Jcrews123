import React, { useState } from "react";

export const ListedTaskCreator = ({todos, setTodos }) => {
return(
    <div>
        {todos.map((task,index) =>(
		<li key={index}>
			{task} <i className="fas fa-trash-alt align-items-center" onClick={() => setTodos(todos.filter((t,currentIndex )=> index != currentIndex))}></i>
		</li>
		))}
    </div>
)}