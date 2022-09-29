import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/Form.css'

function Second() {
  const navigate = useNavigate()

  function handleForm(e){
    e.preventDefault();
    navigate('/confirmation')
  }

  return (
    <div className='main'>
        <div className='form bg-light px-3 py-3 rounded animate__animated animate__slideInRight'>
            <div>
                <div className='h4 fw-bold'>Almost There!</div>
                <div>Few more details and you'lll be good to go</div>
            </div>
            <form onSubmit={e=>handleForm(e)} >
                <input className="form-control py-2 mt-3" type="text" placeholder="Location" required />
                <input className="form-control py-2 mt-3" type="number" placeholder="Age" required/>
                <input className="form-control py-2 mt-3" type="text" placeholder='University' required/>
                <button className="form-control py-2 mt-3 button">Finish</button>
            </form>
        </div>
    </div>
  )
}

export default Second