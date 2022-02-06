import type { NextPage } from 'next'
import Image from 'next/image'
import loginPic from 'public/icons/login.svg'
import { useState } from 'react'
import { getUser } from 'services/getUser'
import { User } from 'types/global'
import { Loading } from 'components/atoms/Loading'

const Login: NextPage = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const handleLogin = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userLogin: User = {
      email: e.target.email.value,
      password: e.target.pass.value
    }

    getUser(userLogin)
      .then(
        res => console.log(res)
      )
      .catch(
        e => setError(e)
      )
  }
  return (
    <>
      <section>
        <div className='headerBox'>
          <div className='imgContainer'><Image src={loginPic} width={30} height={30} /></div>
          <h1>Sign in</h1></div>
        <div className='formContainer'>
          <form onSubmit={handleLogin}>
            <div className='labelInput'>
              <label htmlFor="email" className='floatLabel'>Email Address *</label>
              <input type="email" name="email" required autoFocus />
            </div>
            <div className='labelInput'>
              <label htmlFor="pass" className='floatLabel'>Password *</label>
              <input type="password" name="pass" required />
            </div>
            <div className='checkboxContainer'><input type="checkbox" name="remembercheck" className='checkbox' /><label htmlFor="remembercheck">Recordarme</label></div>
            {error && <div><p>{error}</p></div>}
            <div>
              <button>{loading ? '' : 'Login'}</button>
              <Loading size={'2rem'} />
            </div>
          </form>
        </div>
      </section>
      <style jsx>
        {`
     section {
       display: flex;
       flex-direction: column;
       align-items:center;
       justify-content:center;
       width: 30rem;
       height: 30rem;
       position: absolute;
       top: calc(50% - 15rem);
       left: calc(50% - 15rem);
       border: solid 1px  #d9dce0;
       border-radius: 5px;
     }

     .headerBox {
       position: absolute;
       display:flex;
       align-items: center;
       justify-content:center;
       flex-direction: column;
       top: 1rem;
       width:100%;
       text-align: center;
       user-select:none;
     }

     .imgContainer {
       display: flex;
       align-items: center;
       justify-content:center;
       border-radius: 100%;
       background-color: #9c27b0;
       width: 3rem;
       height: 3rem;
     }

     .headerBox h1 {
      font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
     }

     .labelInput {
       display: flex;
       align-items: center;
       min-width:10rem;
       margin-bottom: 1rem;
       gap:1rem;
     }

     .labelInput:hover input {
       border: solid 1px black;
     }

     label {
       user-select:none;
       z-index: -1;
     }

     input {
       border: solid 1px #d9dce0;
       padding: 0.5rem;
       border-radius: 0.3rem;
       min-width: 26rem;
       padding: 1rem;
       background: transparent;
     }

     .checkbox {
       min-width: 1rem;
       cursor: pointer;
     }

     .floatLabel {
       position:absolute;
       left: 3rem;
      color: rgba(0,0,0,0.6);
     }

     button {
       position: absolute;
       bottom: 2rem;
       right: 2rem;
       width: calc(100% - 4rem);
       height: 2.5rem;
       background-color: #032D5Fff;
       color: white;
       font-weight: bolder;
       border: none;
       border-radius: 0.3rem;
       line-height : 25px;
       cursor: pointer;
       text-transform: uppercase;
     }

     button:hover {
      box-shadow: 1px 1px 8px -2px #032D5Fff;
     }
     `}
      </style>
    </>
  )
}

export default Login
