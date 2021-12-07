import { useEffect, useState } from "react"

export function Counter() {

    const [count, setCount] = useState(0);
    const [reset, setReset] = useState(false);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reseting() {
        setReset(!reset)
    }

    useEffect(() => {
        setCount(0);
    }, [reset])

    return (
        <>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <br />
            <br />
            <button onClick={decrement}>decrement</button>
            <br />
            <br />
            <button onClick={reseting}>reset</button>
        </>
    )
}