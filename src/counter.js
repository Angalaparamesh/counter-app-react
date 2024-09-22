import {useState} from "react"

function Counter(){
    var[count,setCount] = useState(0)

    function increment()
    {
        setCount(count + 1)
    }

    function decrement(){
        setCount(count - 1)
    }

    return(
        <div>
            <div class="button">
            <button class="btn1" onClick={increment}>Inc</button>
            <button class="btn2" onClick={decrement}>Dec</button></div>
            <h1>{count}</h1>
        </div>
    )
}

export default Counter