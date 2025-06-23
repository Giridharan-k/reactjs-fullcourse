import React, { useState } from 'react';



function TodoList() {

    // let todoList = [];
    // var inputValue;
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState(['Learn React', 'Build App', 'Deploy Project']);

    function addList() {
        setTodoList([...todoList, inputValue]);
        setInputValue("")
    }

    return (
        
        <React.Fragment>
            

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a task"
            />
            <input type='button' value="Add" onClick={addList} />
            {
                todoList.map((data, index) => (
                    <div key={index}>
                        <input type='checkbox' value={data} /> {data}
                    </div>
                ))
            }
            
        </React.Fragment>
    );

}

export default TodoList;