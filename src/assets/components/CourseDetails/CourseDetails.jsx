import PropTypes from "prop-types";
import Course from "../Course/Course";

const Coursedetails = ({courses , handleSelectCourse}) => {

   

    

    return (
        <div >
            <h3 className="text-lg">course details: {courses.length}</h3>
           <div className=" border-2 border-red-600 grid grid-cols-3">
           {
                courses.map(course => <Course 
                    key={course.id} 
                    course={course}
                    handleSelectCourse={handleSelectCourse}

                    ></Course>)
            }
           </div>
        </div>
    );
          
};

Coursedetails.propTypes ={
    courses:PropTypes.array ,
    handleSelectCourse:PropTypes.func

};

export default Coursedetails;