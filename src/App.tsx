import { useState } from 'react'
import './App.css'

    type ButtonProps = {
        intNum: number
    }

    function Counter( {intNum}: ButtonProps ) {
        const [count, setCount] = useState(intNum)
        return (
            <>
                <div className="card">
                    <h1>Counter: {count}</h1>
                    <button className={"btnCount1"}
                            onClick={() => setCount(count + 1)}>+</button>
                    <button className={"btnCount2"}
                            onClick={() => {
                                if(count > 0) {
                                    setCount(count - 1)
                                }
                            }}>-</button>
                </div>
            </>
        )
    }



    function App() {

      return (
            <div>
                <Counter intNum={0}></Counter>
                <Counter intNum={7}></Counter>
                <Counter intNum={13}></Counter>
            </div>
      )
    }

export default App
