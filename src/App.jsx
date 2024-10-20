import { useState } from 'react'
import './App.css'

function App() {
    const [name, newName] =  useState("Sofia")
    const [input, newInput] = useState("")

    // const setName = (teacherName) => {
    //     newName(teacherName)
    // }
    const changeName = (event) => {
        event.preventDefault();
        
        if(input !== ""){
            newName(input)
        }
    }

    const changeInput = (event) => {
        newInput(event.target.value)
    }

    return (
        <div>
            <h2>Teacher name: {name}</h2>
            {/* <ul>
                <li><button onClick={() => setName("Data")}>Data</button></li>
                <li><button onClick={() => setName("Reyes")}>Reyes</button></li>
                <li><button onClick={() => setName("Soraya")}>Soraya</button></li>
            </ul> */}

            <form onSubmit={changeName}>
                <input 
                type="text"
                value={input}
                onChange={changeInput}
                placeholder='Add a name' 
                />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default App
