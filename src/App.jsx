import "./App.css";
import CourseDetails from "./assets/components/CourseDetails/CourseDetails";

function App() {
  return (
    <>
      <div className="bg-gray-300 h-full w-full">
        <h1 className="text-4xl font-semibold">Course Registration</h1>
        <div className="flex">
          {/* course & cart */}

          <div>
            {/* course here */}
            <CourseDetails></CourseDetails>
          </div>
          <div>{/* cart here */}</div>
        </div>
      </div>
    </>
  );
}

export default App;
