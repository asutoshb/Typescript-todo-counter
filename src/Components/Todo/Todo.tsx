import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem, TodoItems } from "./TodoItem"; 


function Todo()
{
    const [data, setData] = React.useState<TodoItems[]>([])

    const handleAdd = (title: string) => {
        const payload : TodoItems = {
            title,
            id: data.length+1,
            status: false
        }
        setData([...data, payload])
    }

    return (
        <div>
            <TodoInput onClick={handleAdd} />
            {data.map(task=><TodoItem {...task} key={task.id} />)}
        </div>
    )

}   

export {Todo}