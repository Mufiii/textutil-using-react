import React, { useState } from 'react'

const Code = () => {

  const [current,change] = useState("");
  const [alpha,count] = useState(0)
  const [word,num] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  function trans (element) {
     const x = element.target.value;
     change(x);
     count(x.split(" ").join("").length);
     num(x.trim().split(/\s+/).length);

  }  

  function upper () {
     change(current.toUpperCase())
  }
  function lower () {
     change(current.toLowerCase())
  }

  
 
   function toggleDarkMode() {
     setIsDarkMode(!isDarkMode);
   }
 
   const backgroundColor = isDarkMode ? '#222' : '#fff';
   const color = isDarkMode ? '#fff' : '#222';

  return (
    <div style={{ backgroundColor, color } } id='cont'> 
    <div className='HHHH'>
          <textarea className='input' placeholder ='Enter the Text' onChange={trans} value={current}/>
          <br/>
          <button onClick={upper} className='button1'>Upper Case</button>
          <button onClick={lower} className='button2'>Lower Case</button>
          <h3>Totel Letters {alpha}</h3>
          <h3>Totel Words {word}</h3>

        
            <button onClick= {toggleDarkMode}>
             {isDarkMode ? 'Light mode' : 'Dark mode'}
           </button>
    
           </div>   
    </div>
  )
}

export default Code