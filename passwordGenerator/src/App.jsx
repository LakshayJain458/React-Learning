import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [spCharactersAllowed, setspCharactersAllowed] = useState(false)
  const [password, setpassword] = useState("")
  const [buttonText, setButtonText] = useState("Copy")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (spCharactersAllowed) str += "!@#$%^&*`~?+-/=[](){}"
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length, numberallowed, spCharactersAllowed])

  const copypasswordtoclipboard = useCallback(() => {
    if(passwordRef.current){
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0, password.length)
    window.navigator.clipboard.writeText(password)
    setButtonText("Copied!")
    setTimeout(() => {
      setButtonText("Copy")
    }, 2000)
  }
}, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberallowed, spCharactersAllowed]
  )
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center text-3xl m-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copypasswordtoclipboard }>
            {buttonText}
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id='numberInput'
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={spCharactersAllowed}
              id='spCharacterInput'
              onChange={() => {
                setspCharactersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="spCharacterInput">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
