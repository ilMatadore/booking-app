import './EmailList.styles.css'

const EmailList = () => {
  return (
    <div className="mail">
        <h1 className='mailTitle'>Save time, save money!</h1>
        <span className='mailDesc'>Sign up and we'll send the best deals to you!</span>
        <div className='mailInputContainer'>
            <input type="text" placeholder='Your email' />
            <button>Suscribe</button>
        </div>
    </div>
  )
}

export default EmailList;
