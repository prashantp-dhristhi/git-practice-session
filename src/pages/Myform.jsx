import React, { useState } from 'react';



const Myform = () => {
    const [inputs,setinputs]=useState({
         username: "",
    age: ""
    })

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setinputs(values=>({...values,[name]: value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Name: ${inputs.username}, Age: ${inputs.age}`);
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
    <label>Enter your name:
    <input 
      type="text" 
      name="username" 
      value={inputs.username} 
      onChange={handleChange}
    />
    </label>
    <label>Enter your age:
      <input 
        type="number" 
        name="age" 
        value={inputs.age} 
        onChange={handleChange}
      />
      </label>
      <input type="submit" />
  </form>

  <h1>Code from PRashant</h1>
</div>
  )
}

export default Myform