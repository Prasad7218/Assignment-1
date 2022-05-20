import React, { useState } from 'react'

const Home = () => {
    const[value,setValue]=useState(0);


    const Increment=()=>{
        setValue(value+2);
        }
    
    

    const Decrement=()=>{
        setValue(value-1);
        }



  return (
      <>
      <div style={{marginTop:'200px'}}>
    <label><h1>'Count-{value}'</h1></label>
    </div>
    
    <div>
    <button style={{marginTop:'230px'}} onClick={Increment}>Increment</button>
    <button style={{marginTop:'230px'}} onClick={Decrement}>Decrement</button>
    </div>
    </>
  )
}

export default Home;