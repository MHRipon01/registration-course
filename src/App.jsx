import "./App.css";
import CourseDetails from "./assets/components/CourseDetails/Coursedetails";
import Cart from "./assets/components/cart/cart";
import { useEffect, useState } from 'react';

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';


// import selectedCourse from "./src/assets/components/CourseDetails"

function App() {
  const notify = () => toast("Wow so easy!");
  const [courses , setCourses] = useState([])
  const [selectedCourse , setSelectedCourse] = useState([])
  const [remaining , setRemaining] = useState(0);
  const [totalCredit,setTotalCredit] = useState(0)

  useEffect(() =>{
      fetch('courseData.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  } ,[])

  const handleSelectCourse =(course) =>{
    let count = course.credit;
    const isExist = selectedCourse.find(item => item.id === course.id)
    if(isExist){
      {notify}
      <ToastContainer />
    }
    else{
      selectedCourse.forEach(item => {
        count += item.credit
      })
      
      const totaleRemaining = 20 - count;
      setRemaining(totaleRemaining);
      setTotalCredit(count)
      if(totalCredit> 20000){
toast(Credit finished.)
      }
     setSelectedCourse([...selectedCourse , course])
    }
          
      
  }

  return (
    <>
      <div className="bg-gray-200 ">
        <h1 className="text-4xl font-semibold text-center my-5">Course Registration</h1>
        <div className="flex border-2  border-blue-400 justify-between">
          {/* course & cart */}
          <div className="w-4/5 " >
            {/* course here */}
            <CourseDetails 
            courses={courses}
            handleSelectCourse={handleSelectCourse}

             ></CourseDetails>
          </div>
          <div>
            {/* cart here */}
          <Cart selectedCourse={selectedCourse}
          remaining ={remaining}
          totalCredit ={totalCredit}
          ></Cart>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
