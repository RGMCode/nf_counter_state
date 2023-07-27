import { useState } from 'react'
import './App.css'

    type CounterProps = {
        intNum: number,
        plusNum: number,
        minusNum: number
    }

    function Counter({intNum, plusNum, minusNum}: CounterProps) {
        const [count, setCount] = useState(intNum)
        return (
            <>
                <div className="card">
                    <h1>Counter: {count}</h1>
                    <button className={"btnCount1"}
                            onClick={() => setCount(count + plusNum)}>+</button>
                    <button className={"btnCount2"}
                            onClick={() => {
                                if((count - minusNum) >= 0) {
                                    setCount(count - minusNum)
                                }
                            }}>-</button>
                </div>
            </>
        )
    }



    function App() {

      return (
            <div>
                <Counter intNum={10} plusNum={3} minusNum={5}></Counter>
                <Counter intNum={70} plusNum={7} minusNum={8}></Counter>
                <Counter intNum={13} plusNum={123} minusNum={101}></Counter>
            </div>
      )
    }

export default App
