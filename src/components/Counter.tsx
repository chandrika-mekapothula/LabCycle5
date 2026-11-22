import React, { useRef, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <>
            <div>
                <h2>Count : {count}</h2>
            </div>
            <div>
                <button className='button' onClick={increment}>Increment</button>
                <button className='button' onClick={decrement} disabled={count <= 0}>Decrement</button>
                <button className='button' onClick={reset}>Reset</button>
            </div>
            {
                count == 10 && <h3>Count reached to 10 </h3>
            }
        </>
    )
}

export default Counter