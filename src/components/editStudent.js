import { useEffect,useState } from "react";
import StudentForm from "./studentForm";
import Axios from 'axios'
import { useParams } from "react-router-dom";
function EditStudent()
{
    const {id} = useParams();
    // const [name,setName] = useState('')
    // const [email,setEmail] = useState('')
    // const [rno,setRno] = useState('')

    const [data,setData] = useState({name:'',email:'',rollNo:''})
    const [newData,setNewData] = useState([])
    // const [arr,setArr] = useState([]);
    // const getState = (childData)=>
    // {
    //     setArr(childData);
    // } 

    useEffect(()=>
    {
        Axios.get("https://crud-deployment-backend-2-cyo4.onrender.com/studentRoute/update-student/"+id)
        .then((res)=>{
            if(res.status===200){
                const {name,email,rollNo} = res.data;
                setData({name,email,rollNo})
            }
            else
                Promise.reject()
        .catch((err)=>alert(err))
        })
    })

    const getState = (childData)=>{
        setNewData(childData)
    }

    const handleSubmit = ()=>
    {
        const data = {name:newData[0],email:newData[1],rollNo:newData[2]}
        Axios.put("https://crud-deployment-backend-2-cyo4.onrender.com/studentRoute/update-student/"+id,data)
        .then((res)=>{
            if(res.status===200)
                alert("Document updated successfully")
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))

        
    }

    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} nameValue={data.name}  emailValue = {data.email} rnoValue = {data.rollNo} />
        </form>
    )
}
export default EditStudent;
