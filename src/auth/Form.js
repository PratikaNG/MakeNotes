import React from 'react'
import Input from './Input'
import "./styles.css"

var IsRegistered = false;

const Form = () => {
  return (

    <div className='form'>
        <h1 style={{textAlign:"center"}}>Hello</h1>
      <form >
        <Input type="text" placeholder="username"/>
        <Input type="password" placeholder="password"/>

      {IsRegistered?
        <button type='submit'>Login</button>
        :
        <div>
        <Input type="password" placeholder="Confirm password"/>

        <button type='submit'>Register</button></div>
      }
      </form>
    </div>
  )
}

export default Form
