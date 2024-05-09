import React from 'react'
import { ToastContainer, toast } from'react-toastify';
import'react-toastify/dist/ReactToastify.css';

function Notification() {
  const notify = () => 
    toast.success("selected!");
  
  const show = () => 
    toast.info("Here are list of Avators!");
  const provide = () => 
    toast.warning("are you sure!");
  return (
    <div>
          <button onClick={notify}>select!</button>
          <button onClick={show}>choose!</button>
          <button onClick={provide}>choose!</button>
          
        <ToastContainer position='bottom-center'
        pauseOnHover="FALSE" 
        pauseOnFocusLoss="FALSE"
        draggable="true"
        />
    </div>
  )
}

export default Notification