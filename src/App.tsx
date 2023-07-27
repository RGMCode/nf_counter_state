import { useState } from 'react'
import './App.css'

    function Counter() {
        const [count, setCount] = useState(0)
        return (
            <>
                <div className="card">
                    <h1>Counter: {count}</h1>
                    <button className={"btnCount1"}
                            onClick={() => setCount((count) => count + 1)
                    }>+</button>
                    <button className={"btnCount2"}
                            onClick={() => {
                                if(count > 0) {
                                    setCount((count) => count - 1)
                                }
                            }
                    }>-</button>
                </div>
            </>
        )
    }


    function App() {

      return (
            <div>
                <Counter></Counter>
            </div>
      )
    }

export default App
