import Axios from "axios";
import {Link} from 'react-router-dom'
function StudentListRow(props)
{
    function handleClick(event) 
    {
        Axios.delete(`http://localhost:4000/studentRoute/delete-student/${event.target.value}`)
            .then((res)=>{
                if(res.status===200){
                    alert("Record Deleted Successfully");
                    window.location.reload()
                }
                else
                    Promise.reject();
                    
            })
            .catch((err)=>alert(err))

    }
    //const {name,email,rollNo} = props.obj;
    return(
        <tr>
            <td>{props.obj.name}</td>
            <td>{props.obj.email}</td>
            <td>{props.obj.rollNo}</td>
            <td>
                <button className ='btn btn-success'><Link to={`/edit-student/${props.obj._id}`} style={{textDecoration:'none',color:'white'}}>Edit</Link></button>
                <button onClick={handleClick} className='btn btn-danger mx-3' value={props.obj._id}>Delete</button>
            </td>
        </tr>
    )
}

export default StudentListRow;