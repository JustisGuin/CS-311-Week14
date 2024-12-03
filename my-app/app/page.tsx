import {useState, useRef} from 'react'

export default function Home() {
  const startingInput = "Enter a number to start out with: \n"
  const [userInput, setUserInput] = useState<string>(startingInput)
  const numberIteration= useRef<HTMLInputElement>(null)

  return (
    <div>
      <label>
        Your number is:
        <input value={userInput} readOnly={true}>
        </input>
      </label>
      <label>
        The number:
        <input placeholder='1,2' type='number' ref={numberIteration}>
        </input>
      </label>
      <button onClick={()=>{
        if(!numberIteration.current){
          return 
        }
        setUserInput(numberIteration.current.value)
      }}>
        Complete:
      </button>

    </div>
  )
}