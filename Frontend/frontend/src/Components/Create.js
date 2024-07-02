import axios from 'axios';
import React, { useState} from 'react'
import {Form , Button, Checkbox } from 'semantic-ui-react'
import {API_URL} from '../Constants/URL'
import {useNavigate} from 'react-router-dom'

function Create() {
     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [Checked, setChecked] = useState(false);
     const navigate = useNavigate();

     const postData = async() =>{
        await axios.post(API_URL,{
            firstName,
            lastName,
            Checked
        })
        navigate('/read');
     }
  return (
   <Form className='form'>
       <Form.Field>
        <label> First Name</label>
        <input value = {firstName}
             onChange={event => setFirstName
            (
               event.target.value 
            )}
        placeholder="Enter First Name"/>
     </Form.Field><br />
     <Form.Field>
         <label> Last Name</label>
         <input value ={lastName}
          onChange={event => setLastName
            (
               event.target.value 
            )}
             placeholder="Enter Last Name"/>
     </Form.Field>
     <Form.Field><br />
     
     <Checkbox checked={Checked} 
      onChange={() => setChecked
        (
           !Checked 
        )}
        label="Agree the terms
         & Conditions" />
         <br />
     </Form.Field>
     <Button onClick={postData}> Submit </Button>
    </Form>
    
  )
}

export default Create

