import PropTypes from "prop-types";
import Course from "../Course/Course";

const Cart = ({ selectedCourse , remaining ,totalCredit }) => {
  console.log(selectedCourse);
  return (
    <div className=" border-2 bg-white rounded-lg mr-4 min-w-[350px] min-h-[400px]">

    <h3 className="text-blue-500 font-bold text-2xl my-2 mx-4">Credit Hour Remaining:{remaining}</h3>
    <hr />
      <h3 className="font-bold text-2xl mx-4">Course Name</h3>
      <br />

      <ol className="text-lg text-gray-700 mb-2">
        {selectedCourse.map((course) => (
          <li key={course.id} className="list-decimal mx-4 list-inside">
            {course.course_name}
          </li>
        ))}
      </ol>
      <hr />

      <h3 className="text-gray-800 font-bold mx-4 mt-2 mb-3">Total Credit Hr:{totalCredit} </h3>
    </div>
  );
};

Cart.propTypes = {
  selectedCourse: PropTypes.array,
};

export default Cart;
