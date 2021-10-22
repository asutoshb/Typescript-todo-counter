import React from 'react';

interface TodoInputProps{
    /**on click call back */
    onClick : (value : string )=>void;
}

function TodoInput({onClick} : TodoInputProps){
    const [state, setState] = React.useState<string>("");
   
    const handleChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setState(e.target.value);
    }

    const handleClick : React.MouseEventHandler<HTMLButtonElement> = (e) => {
        onClick(state);
    }
   
    return (
        <div>
            <input placeholder="type something" 
                value={state} 
                onChange={handleChange}
            />
            <button onClick={handleClick}>ADD TASK</button>
        </div>
    )
}

export {TodoInput}