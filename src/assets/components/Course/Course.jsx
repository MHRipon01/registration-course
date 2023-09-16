import PropTypes from "prop-types";

import {BsBook} from 'react-icons/bs';

const Course = ({ course ,handleSelectCourse }) => {
   

  const { course_name, image, description,price ,credit} = course;


  

 

  return (
  
    <div className=" m-2">
      <div className="p-2 rounded-xl h-full flex flex-col justify-between bg-white ">
        <img className="w-full p-2" src={image} alt="" />
        <h2 className="text-3xl font-bold">{course_name} </h2>
        <p>{description}</p>
        <div className="flex ">
            <p className="text-gray-500 text-2xl">$  Price : {price} </p>
            <div className="ml-28">
            <div className="text-3xl   flex justify-between items-center gap-4 ">
            <BsBook/>
            <p className="text-gray-500 text-2xl">Credit : {credit} hr</p>
            </div>
            </div>
            
        </div>
        <div className="flex  justify-center items-end ">
        <button onClick={() => handleSelectCourse(course)}  className="bg-blue-500  px-20 rounded-xl w-4/5 text-white font-bold py-3">Select</button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectCourse: PropTypes.func
};

export default Course;
