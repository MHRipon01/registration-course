# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
- __Three features about this project.__
- __Credit Hour Tracking__:  The project tracks of the total credit hours for the courses a user has registered for. It also calculates and displays the remaining credit hours, ensuring that the total does not exceed 20 credits.

- __Cart Functionality__: User can add courses to their cart. The cart displays the names of the selected courses and the total credit hours. If a user tries to add a course that they’ve already selected, a toast will be displayed.

- __Dynamic Data__: This project fetches fake data dynamically from a JSON file. This means you can easily update, add or remove courses by modifying the JSON file, without having to change the code of your application.

- __How I have used state.__
- I have used React's built in state management functions like useState & useEffect.I’ve declared multiple state variables (__courses__, __selectedCourse__, __remaining__, __totalCredit__) using the useState hook. For example, courses holds the list of all courses, and selectedCourse holds the list of courses that the user has selected.

- I've used the useEffect hook to fetch course data from a fake JSON file. The empty dependency array ([]) passed to useEffect ensures that this effect runs only once after the initial render.
