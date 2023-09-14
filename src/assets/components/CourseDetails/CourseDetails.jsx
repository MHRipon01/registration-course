import { useEffect } from "react";
import { useState } from "react";

const CourseDetails = () => {

    const [course , setCourse] = useState([])
    useEffect(() =>{
        fetch('courseData.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    } ,[])


    return (
        <div>
            
        </div>
    );
};

export default CourseDetails;