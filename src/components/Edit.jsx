import React, { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate,useParams  } from 'react-router-dom';
import axios from 'axios';



function Edit() {

    const [id,setId]=useState('')
    const [empName,setName]=useState('')
    const [empAge,setAge]=useState('')
    const [empDesg,setDesg]=useState('')
    const [empSalary,setSalary]=useState(0)

  const params =useParams()

  const location = useNavigate()

  //  api call to get details of a particular employee from server- get-an-employee
  const fetchEmployee = async()=>{
    const result = await axios.get('http://localhost:8000/get-an-employee/'+params.id)
    setId(result.data.employee.id);
    setName(result.data.employee.uname);
    setAge(result.data.employee.age);
    setDesg(result.data.employee.desg);
    setSalary(result.data.employee.salary);

  }
 const handleUpdate =async (e)=>{
  e.preventDefault()
   // create body to share with backend    
   const body ={
    id,
    empName,
    empAge,
    empDesg,
    empSalary
}
// api call -post
const result =await axios.post('http://localhost:8000/update-employee',body)
alert(result.data.message)
  location('/')
 }

  useEffect(()=>{
    fetchEmployee()
  },[])

  return (
    <div>
    <div className='container-fluid mt-5'>
        <h1 style={{textAlign:'center'}}>
        <i class="fa-solid fa-user-pen"></i> Update Employee Form <Form></Form>
           
        </h1>
        <p style={{textAlign:'justify'}}>
            This is dummy data :Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo mollitia perferendis officiis delectus ab veritatis dolor eum vel voluptate commodi impedit, facilis quasi aliquid. Error fugiat tenetur corporis quas mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa distinctio voluptates labore provident delectus odio optio, est quo impedit, perspiciatis iusto, magni eos voluptatibus officiis necessitatibus nam non quae esse!
        </p>
    </div>
  
  {/* Form design */}
  <div className=' mt-3 mb-3 p-5 border border-primary rounded'>
        <Form>

{/* setName */}
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Employee Name</Form.Label>
        <Form.Control style={{borderRadius:'25px'}} type="text" placeholder="Enter Employee Name" value={empName}
                onChange={(e)=>setName(e.target.value)}

        />
      </Form.Group>

{/* setAge */}
      <Form.Group className="mb-3" controlId="formAge">
      <Form.Label>Employee Age</Form.Label>
        <Form.Control style={{borderRadius:'25px'}} type="text" placeholder="Enter Employee Age" value={empAge}
                onChange={(e)=>setAge(e.target.value)}

        />
      </Form.Group>

{/*setDesg  */}
      <Form.Group className="mb-3" controlId="formDesg">
      <Form.Label>Employee Designation</Form.Label>
        <Form.Control style={{borderRadius:'25px'}} type="text" placeholder="Enter Employee Designation" value={empDesg}
                onChange={(e)=>setDesg(e.target.value)}

        />
      </Form.Group>

{/* setSalary */}
      <Form.Group className="mb-3" controlId="formSalary">
      <Form.Label>Employee Salary</Form.Label>
        <Form.Control style={{borderRadius:'25px'}} type="text" placeholder="Enter Employee Salary" value={empSalary}
                onChange={(e)=>setSalary(e.target.value)}

        />
      </Form.Group>

        <Button onClick={(e)=>handleUpdate(e)} style={{border:'none',borderRadius:'25px',width:'100px',color:'black'}} className='ms-5 mt-3' variant="success" type="submit">
             Update
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

export default Edit