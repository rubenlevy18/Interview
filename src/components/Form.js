import React, { useState } from 'react'
import './form.css'

const Form = () => {

    const [subject, setSubject] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const [checkbox, setCheckbox] = useState()


    function Validation(){
        console.log(subject)
        if (subject == undefined ||  email == undefined  || message == undefined) {
            alert("You didnt fiil all the blanks")
        }
        else{
            alert("Your information has been sent")
        }
    }


    return (
    <div className="form">
      <label>
        <p className="p-personal-info">*Subject</p>
        <input value={subject} className="input-personal-info" onChange={(e) => setSubject(e.target.value)}  placeholder="Question about React" type="text" />
      </label>  
     <label>
        <p className="p-personal-info">*Email </p>
        <input value={email} className="input-personal-info" onChange={(e) => setEmail(e.target.value)} type="text" name="email" />
     </label>   
     <label>
        <p className="p-personal-info">Phone </p>
        <input value={phone} className="input-personal-info" onChange={(e) => setPhone(e.target.value)} type="text" name="phone"/>
     </label>   
     <label>
         <p className="p-personal-info"> *Message</p>
         <input value={message}className="input-message" onChange={(e) => setMessage(e.target.value)}type="text" name="message"/>
     </label>
     <div className="checkbox">
        <input value={checkbox} type="checkbox" className="input-checkbox" />
        <p className="p-personal-info">I'd like to receive product tips and updates</p>

     </div>
     <div className="buttons">
         <button className="button-cancel"><p className="p-button-cancel">cancel</p></button>
         <button className="button-send" onClick={Validation}><p className="p-button">send</p></button>

     </div>
    </div>
    )

}

export default Form

