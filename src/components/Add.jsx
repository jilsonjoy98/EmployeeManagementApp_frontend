import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from 'axios';


function Add() {
    const [id,setId]=useState('')
    const [empName,setName]=useState('')
    const [empAge,setAge]=useState('')
    const [empDesg,setDesg]=useState('')
    const [empSalary,setSalary]=useState(0)

    let location = useNavigate()

    useEffect(()=>{
            // generating unique id
            setId(uuid().slice(0,3));
        },[])

    const handleAddEmployee =async (e)=>{
        // prevent to refresh the page
        e.preventDefault()
        // generating unique id
        setId(uuid().slice(0,3));
        // create body to share with backend    
        const body ={
            id,
            empName,
            empAge,
            empDesg,
            empSalary
        }
        console.log(body);
        // api call
        const result =await axios.post('http://localhost:8000/add-employee',body)
        alert(result.data.message);
        // redirect to admin
        location('/')
    }

  return (
    <div>
        <div className='container-fluid mt-5'>
            <h1 style={{textAlign:'center'}}>
            <i class="fa-solid fa-user-plus"></i> New Employee Adding App
               
            </h1>
            <p style={{textAlign:'justify'}}>
                This is dummy data :Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo mollitia perferendis officiis delectus ab veritatis dolor eum vel voluptate commodi impedit, facilis quasi aliquid. Error fugiat tenetur corporis quas mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa distinctio voluptates labore provident delectus odio optio, est quo impedit, perspiciatis iusto, magni eos voluptatibus officiis necessitatibus nam non quae esse!
            </p>
        </div>
        <div className=' mt-3 mb-3 p-5 border border-primary rounded'>
        <Form>

{/* setName */}
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Employee Name</Form.Label>
        <Form.Control style={{borderRadius:'25px'}} type="text" placeholder="Enter Employee Name" 
        onChange={(e)=>setName(e.target.value)}
        />
      </Form.Group>

{/* setAge */}
      <Form.Group className="mb-3" controlId="formAge">
      <Form.Label>Employee Age</Form.Label>
        <Form.Control style={{borderRadius:'25px'}} type="text" placeholder="Enter Employee Age" 
         onChange={(e)=>setAge(e.target.value)}
        />
      </Form.Group>

{/*setDesg  */}
      <Form.Group className="mb-3" controlId="formDesg">
      <Form.Label>Employee Designation</Form.Label>
        <Form.Control style={{borderRadius:'25px'}} type="text" placeholder="Enter Employee Designation" 
         onChange={(e)=>setDesg(e.target.value)}
        />
      </Form.Group>

{/* setSalary */}
      <Form.Group className="mb-3" controlId="formSalary">
      <Form.Label>Employee Salary</Form.Label>
        <Form.Control style={{borderRadius:'25px'}} type="text" placeholder="Enter Employee Salary"
        onChange={(e)=>setSalary(e.target.value)}
        />
      </Form.Group>

        <Button onClick={(e)=>handleAddEmployee(e)} style={{border:'none',borderRadius:'25px',width:'100px',color:'black'}} className='ms-5 mt-3' variant="success" type="submit">
             Add
        </Button>
      <Link to={'/'}>
          <Button  style={{border:'none',borderRadius:'25px',width:'100px',color:'black'}} className='ms-5 mt-3' variant="danger" type="submit">
             Close
          </Button>
      </Link>
    </Form>
        </div>
    </div>
  )
}

export default Add