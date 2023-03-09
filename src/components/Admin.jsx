import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import './Admin.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Admin() {
    const [allEmployees,setAllEmployees] = useState([])

    const fetchData = async()=>{
      const  result = await axios.get('http://localhost:8000/get-all-employees')
      setAllEmployees(result.data.employees);
      
    }
    console.log(allEmployees);

    useEffect(()=>{
        fetchData()
    },[])

    // handeleDelete
    const handeleDelete =async (id)=>{
        const result =  axios.delete('http://localhost:8000/delete-employee/'+id)
        alert((await result).data.message);
        fetchData()


    }

  return (
    <div >
        <div className='container-fluid mt-5'>
            <h1 style={{textAlign:'center'}}>
                <i class="fa-solid fa-user-group"></i> Employee Management App
                <Link to={'/add'}>
                    <a style={{borderRadius:'25px',color:'black'}} className='btn btn-warning ms-5'><i class="fa-solid fa-user-plus"></i> Add Employee</a>
                </Link>
            </h1>
            <p style={{textAlign:'justify'}}>
                This is dummy data :Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo mollitia perferendis officiis delectus ab veritatis dolor eum vel voluptate commodi impedit, facilis quasi aliquid. Error fugiat tenetur corporis quas mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa distinctio voluptates labore provident delectus odio optio, est quo impedit, perspiciatis iusto, magni eos voluptatibus officiis necessitatibus nam non quae esse!
            </p>
        </div>
    <div className='container mt-2 mb-2'>
        <h1 className='text-primary mt-3 mb-5'>Employee Details</h1>
            {/* table  design */}
            <Table hover>
          <thead style={{border:'2px solid white'}}>
            <tr style={{fontSize:'25px',backgroundColor:'#32a866',color:'black'}}>
              <th>No</th>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody style={{border:'2px solid white'}}>
            {
                allEmployees?.map((item,index)=>(
                    <tr>
                    <td>{index+1}</td>
                    <td>{item.id}</td>
                    <td>{item.uname}</td>
                    <td>{item.age}</td>
                    <td>{item.desg}</td>
                    <td>&#8377; {item.salary}</td>
                    <td>
                     <Link to={'edit/'+item.id}>
                          <button className='btn btn-warning me-3' style={{borderRadius:'5px',color:'black'}}> <i class="fa-solid fa-pen-to-square"></i>
                          </button>
                     </Link>
                      <button onClick={()=>handeleDelete(item.id)} className='btn btn-danger' style={{borderRadius:'5px',color:'black'}}> <i class="fa-solid fa-trash"></i>
                      </button>
      
                    </td>
                  </tr>
                ))
              
            }
          
          </tbody>
        </Table>
    </div>
    </div>
  )
}

export default Admin