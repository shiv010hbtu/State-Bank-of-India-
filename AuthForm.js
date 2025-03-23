import React,{useState} from 'react'

export default function AuthForm() {
    const [isLogin,setIsLogin] = useState(true);
  return (
   
    <div className='container'>
        <div className='form-container'>
            <div className='form-toggle'>
                <button className= { isLogin ? 'active': ""} onClick={() => setIsLogin(true)}>Login</button>
                <button className={ !isLogin ? 'active': ""} onClick={() =>setIsLogin(false)}>SignUp</button>

            </div>
            {isLogin ? <>
            <div className='form'>
                <h2>Login Form</h2>
                <input type='text' placeholder='Username'/>
                <input type='password' placeholder='password'/>
                <input type='password' placeholder='password'/>
                <a href='https://retail.onlinesbi.sbi/retail/troublelogindetails.htm'>Forgot Password?</a>
                <button>Login</button>
               <p>Not a member? <a href='https://retail.onlinesbi.sbi/retail/userdrivenregdetails.htm' onClick={() => setIsLogin(false)}>SignUp Now</a></p>
            </div>
            </> : <>
            <div className='form'>
            <h2>SignUp form</h2>
            <input type='email' placeholder='type mail'/>
            <input type='password' placeholder='password'/>
            <input type='password' placeholder='conform password'/>
            <button>SignUp</button>
            </div>
            </>}
        </div>
      </div>
  )
}
