import React from 'react';

export interface TodoItems{
    title: string;
    id: number;
    status: boolean;
}

function TodoItem({title, id, status} : TodoItems){
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>{title}</div>
            <div>{`-${status}`}</div>
        </div>
    )
}

export {TodoItem}