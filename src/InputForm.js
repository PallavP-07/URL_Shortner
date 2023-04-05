import React, { useState } from 'react'

function InputForm({ setInputValue }) {
  const [value, setValue] = useState("")

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <>
      <div className='Container'>
        <input type='text' value={value} onChange={e => setValue(e.target.value)} placeholder='Please enter your URL' />
        <button onClick={handleClick}>URL Shortner</button>
      </div>
    </>
  )
}

export default InputForm