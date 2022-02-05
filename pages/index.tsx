import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
   <>
   <section>
     <div className='headerBox'><p>Hyundai Panel</p></div>
     <div className='formContainer'>
       <form>
         <div className='labelInput'>
         <label htmlFor="email">Email:</label>
         <input type="email" name="email" placeholder='example@mail.com' required autoFocus/>
         </div>
         <div className='labelInput'>
         <label htmlFor="pass">Password:</label>
         <input type="password" name="pass" required/>
         </div>
         <button>Login</button>
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
       border: solid 1px gray;
       border-radius: 5px;
     }

     .headerBox {
       position: absolute;
       top: 1rem;
       width:100%;
       text-align: center;
     }

     .headerBox p {
       font-size: 2rem;
     }

     .labelInput {
       display: flex;
       min-width:10rem;
       margin-bottom: 1rem;
     }

     input {
       border: solid 1px gray;
       padding: 0.5rem;
       border-radius: 0.3rem;
     }

     label {
       min-width: 10rem;
     }

     button {
       position: absolute;
       bottom: 2rem;
       right: 2rem;
       width: 5rem;
       height: 3rem;
     }
     `}
   </style>
   </>
  )
}

export default Home
