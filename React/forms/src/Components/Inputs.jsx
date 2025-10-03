import React from 'react'

const Inputs = ({form , setForms , data ,setData}) => {

     const eventHandler = (e)=>{
    setForms({...form , [e.target.name] : e.target.value})
    console.log(form);
    
  }
  const relodeHandler =(e)=>{
    e.preventDefault()
    setData((prev)=>[...prev,form])
    setForms({
    name : "",
    Email : ""
  })
    console.log("submited...");
    
    
  }
  console.log("render");
  
  return (
    <div>
      <form onSubmit={relodeHandler}>
          <label htmlFor="name">NAME</label>
          <input value={form.name} name='name'  onChange={eventHandler} type="text" placeholder='Enter your name...'/>
          <br />
          <label htmlFor="Email">Email</label>
          <input value={form.Email} name='Email' onChange={eventHandler} type="Email" placeholder='Enter your Email...'/>
           
           <button>submit</button>

      </form>
      {/* <button onClick={}>delete</button> */}
    </div>
  )
}

export default Inputs
