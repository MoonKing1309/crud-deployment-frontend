import StudentForm from "./studentForm";
import { useState } from 'react';
import Axios from 'axios';
function CreateStudent()
{
    const [arr,setArr] = useState([]);
    const getState = (childData)=>
    {
        setArr(childData);
    } 

    function handleSubmit()
    {
        const data = {name:arr[0] , email:arr[1],rollNo:arr[2]}
        Axios.post("http://localhost:4000/studentRoute/create-student",data)
        .then((res)=>
        {
            if(res.status===200)
                alert("Document Added Succeffully")
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));

    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <StudentForm getState={getState} nameValue={undefined}  emailValue ={undefined} rnoValue ={undefined} />
            </form>
        </div>
    )
}

export default CreateStudent;