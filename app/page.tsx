'use client'
import React from 'react';
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [userInput, setUserInput] = useState<string>('');
  const numberIteration = useRef<HTMLInputElement>(null);

  // Effect to ensure userInput is initialized properly on the client
  useEffect(() => {
    if (numberIteration.current) {
      numberIteration.current.value = '40'; // Default value
    }
  }, []);

  return (
    <div>
      <label>
        Your number is:
        
        <input value={userInput} readOnly={true}  />
      </label>

      <label>
        The number:
        <input placeholder='40' type='number' ref={numberIteration} />
      </label>

      <button onClick={() => {
        if (numberIteration.current) {
          setUserInput(numberIteration.current.value);
        }
      }}>
        Complete:
      </button>
    </div>
  );
}