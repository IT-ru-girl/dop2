import React, {useEffect, useState} from 'react';

import './App.css';


type PropsType = {
    userId: number

    title: string
    completed: boolean
}

function App(props: PropsType) {
    const [todos, setTodos] = useState<Array<PropsType>>([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    const onClickHandler = () => {
        setTodos([])
    }

    return (
        <div className="App">
            <button onClick={onClickHandler}>Clean</button>
            <ul>
                {todos.map(el => {
                    return (
                        <li>
                            <span>{el.userId}</span>
                            <span>{el.title}</span>
                            <span>{el.completed}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
