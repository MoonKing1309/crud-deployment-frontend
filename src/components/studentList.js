import { useEffect,useState } from "react"
import Axios from 'axios';
import StudentListRow from "./studentListRow";
export default function StudentList()
{
    const [arr,setArr] = useState([])
    useEffect(()=>{
        Axios.get("http://localhost:4000/studentRoute")
            .then((res)=>
            {
                if(res.status===200)
                    setArr(res.data)
                else
                    Promise.reject();
            })
            .catch((err)=>alert(err))
    },[])

    const ListItems = ()=>
    {
        return arr.map((val,ind)=>{
            return <StudentListRow key={ind} obj={val}/>
        })
    }

    return(
        <table className='table table-striped table-bordered table-success'>
            <thead>
                <tr>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">RollNo</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
    
}