import { useState } from "react";

    const TodoFromInput = (props) => {
        const [isValidChar, setIsValidChar] = useState(true);

        let inputValue ="";

        const onChangeHandler = (e) => {
            if(e.target.value.includes("@")) {
                setIsValidChar(false);
            } else {
                if (!isValidChar) setIsValidChar(true);
                inputValue = e.target.value;
            }
        };

        const onClickAddButton = ()=> {
            const newTodo = {
                id: crypto.randomUUID(),
                title: inputValue,
                isCompleted: false,
            };

            console.log("newTodo", newTodo);

            props.onAddTodo(newTodo);
        };

        return (
            <div className="todo-input">
                <input 
                type="text"
                placeholder="Enter your task"
                onChange={onChangeHandler} 
                />

                {isValidChar === true ? null : "Invalid charcted"}
                <button onClick={onClickAddButton}>ADD</button>
            </div>
        );
    };


export default TodoFromInput;