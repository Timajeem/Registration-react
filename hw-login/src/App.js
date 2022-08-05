import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [emailDirty,setEmailDirty] = useState(false)
  const [passwordDirty,setPasswordDirty] = useState(false)
  const [emailError,setEmailError] = useState('Емеил не модет быть пустым ')
  const [passwordError,setPasswordError] = useState('Пароль не модет быть пустым')
  const [formValid, setFormValid] = useState(false)


  useEffect(() => {
    if(emailError || passwordError){
      setFormValid(false)
    } else{
      setFormValid(true)
    }
  }, [emailError,passwordError])

  const emailHandler = (e) =>{
     setEmail(e.target.value)
     const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(!re.test(String(e.target.value).toLowerCase())){
    setEmailError('ошибка')
  } else{
    setEmailError('')
  }

  }


  const passwordHandler = (e) =>{
    setPassword(e.target.value)
    if(e.target.value.lenght < 3 || e.target.value.lenght > 8){
      setPasswordError('Пароль должен быть длиннее 3 и меньше 8 ')
      if(!e.target.value){
        setPasswordError('Пароль не может быть пустым ')
      }
    } else{
      setPasswordError('')
    }
  }

  const blurHandler = (e) => {
    switch(e.target.name){
      case 'email' :
        setEmailDirty(true)
        break;
        case 'password':
          setPasswordDirty(true)
          break;

    }
  }

  return (
    <div className="App">
      <form>
        {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
        <h1>Registration</h1>
        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type ='text' placeholder='Enter your email...'></input>
        {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type ='password' placeholder='Enter your password...'></input>
        <button disabled={!formValid} type='submit'>---Registration---</button>
      </form>
    </div>
  );
}

export default App;
