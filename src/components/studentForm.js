import { useEffect, useState } from "react";
export default function StudentForm(props)
{
    const [name,setName] = useState(props.nameValue);
    const [email,setEmail] = useState(props.emailValue);
    const [rollNo,setRollNo] = useState(props.rnoValue)
    const arr = [name,email,rollNo];

    function handleClicker()
    {
       props.getState(arr);
    }

    useEffect(()=>
    {
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rnoValue);
    },[props.nameValue,props.emailValue,props.rnoValue])

    return( 

        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} className="form-control my-3" placeholder="Enter your name"></input>
            <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} className="form-control my-3" placeholder="Enter your email"></input>
            <input defaultValue={props.rnoValue} onChange={(event)=>setRollNo(event.target.value)} className="form-control my-3" placeholder="Enter your rollNo"></input>
            <button onClick={handleClicker} className="btn btn-success d-block mx-auto my-3" type="submit">
                Submit
            </button>
        </div>
    )
}