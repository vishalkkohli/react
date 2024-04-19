import { useState } from "react"
import {useParams} from "react-router-dom"

const Student = () => {
    const param = useParams();
    const [studentInfo,setStudentinfo] = useState([
        { sid:"1",sname:"Student1",marks:"90%"},
        { sid:"2",sname:"Student2",marks:"80%"},
        { sid:"3",sname:"Student3",marks:"70%"},
        { sid:"4",sname:"Student4",marks:"60%"},

    ]);
  return (
    <div>
        
    {param.name? JSON.stringify( studentInfo.find((student)=>student.sname === param.name)):
     JSON.stringify(studentInfo)}
    </div>
  );
};

export default Student