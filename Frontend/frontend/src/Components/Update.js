import { API_URL } from '../Constants/URL';
import React, {useState , useEffect} from 'react'
import {Form ,Button, Checkbox } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Update() {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [Checked,setChecked] = useState(false);
  const [id,setId] = useState('');
  const navigate = useNavigate();

  const updateuser = async () =>{
    await axios.put(API_URL + id,{
      firstName,
      lastName,
      Checked
    });
    navigate('/Read');
  }
  useEffect(() =>{
    setId(localStorage.getItem('id'))
    setFirstName(localStorage.getItem('firstName'))
    setLastName(localStorage.getItem('lastName'))
    setChecked(localStorage.getItem('Checked'))

  },[])
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
  <Button onClick={updateuser}>Update</Button>
 </Form>
  )
}

export default Update
