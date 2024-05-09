import React from 'react'
import { Bounce, Flip, ToastContainer, toast } from'react-toastify';
import'react-toastify/dist/ReactToastify.css';
import './Notification.css'

function Notification() {
  const notify = () => 
    toast.success("selected!");
  
  const show = () => 
    toast.info("Here are list of Avators!");
  toast.info("select prefered Avator while scrolling along them!");
 
  const provide = () => 
    toast.warning("are you sure!");
  
  return (
    <div>
      <div className='btn'>
          <button onClick={notify}>select!</button>
          <button onClick={show}>choose!</button>
          <button onClick={provide}>choose!</button>
          </div>
          
        <ToastContainer 
        position='top-center'
        pauseOnHover="FALSE" 
        pauseOnFocusLoss="FALSE"
        draggable="true"
        transition={Flip}
        theme='dark'
        
        />
    </div>
  )
}

export default Notification