import React from 'react'
import { Bounce, Flip, ToastContainer, toast } from'react-toastify';
import'react-toastify/dist/ReactToastify.css';


function Notification() {
  const show = () => 
    toast.info("Here are list of Avators!");

  const notify = () => 
    toast.success("selected!");
  
  const provide = () => 
    toast.warning("are you sure!");


  
 
  
  return (
    <div>
      <div className='btn'>
        <button onClick={show}>choose!</button>
          <button onClick={notify}>select!</button>
          <button onClick={provide}>choose!</button>
          </div>
          
        <ToastContainer 
        position='bottom-right'
        pauseOnHover="FALSE" 
        pauseOnFocusLoss="FALSE"
        draggable="true"
        transition={Flip}
        theme='dark'
        autoClose={1000}
        
        />
    </div>
  )
}

export default Notification