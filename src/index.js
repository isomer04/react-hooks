import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { FaStar } from "react-icons/fa";



//Lesson: dispatching actions with useReducer

const initialState = {
  message: "hi"
};

function reducer(state, action) {
  switch(action.type){
    case "yell":
      return {
        message: `Hey! I JUST SAID ${state.message}`
      }
      case "whisper":
        return {
          message: `excuse me, I just said ${state.message}`
        };
  }
}

function App() {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <p>Message: {state.message} </p>
      <button onClick = {() => dispatch( {type: "yell"})}>YELL </button>
      
      <br/>

      <button onClick = {() => dispatch( {type: "whisper"})}>whisper</button>

    </>
  );
}

// Using useReducer instead of useState from eariler examples

// function App() {
//   const [checked, toggle] = useReducer((checked) => !checked, false);

//   return (
//     <>
//       <input type="checkbox" value={checked} onChange={toggle} />
//       <p>{checked ? "checked" : "not checked"} </p>
//     </>
//   );
// }

//useReducer for incrementing numbers

// function App() {
//   const [number, setNumber] = useReducer(
//     (number, newNumber) => number + newNumber,
//     0
//   );

//   return <h1 onClick={() => setNumber(1)}>{number} </h1>;
// }

// ==============================
// useEffect starts

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(`https://api.github.com/users`)
//       .then((response) => response.json())
//       .then(setData);
//   }, []);

//   if (data) {
//     return (
//       <div>
//         <ul>
//           {data.map((user) => (
//             <li key={user.id}>{user.login}</li>
//           ))}
//         </ul>

//         <button onClick={() => setData([])} >Remove Data</button>
//       </div>
//     );
//   }
// }

// useEffect for logged in and logged out

// function App() {
//   const [name, setName] = useState("Jan");
//   const [admin, setAdmin] = useState(false);

//   useEffect(() => {
//     document.title = `Celebrate ${name}`;
//   }, [name]);

//   useEffect(() => {
//     console.log(`The user is: ${admin ? "admin" : "not admin"}.`);
//   }, [admin]);

//   return (
//     <section>
//       <p>Congratulations {name} ! </p>
//       <button onClick={() => setName("Will")}>Change Winner</button>
//       <p> {admin ? "logged in" : "not logged in"} </p>

//       <button onClick={() => setAdmin(true)}>Log In</button>
//     </section>
//   );
// }

// ================
// useState start for creating star ratings
// ===================
// const createArray = (length) => [...Array(length)];

// function Star({ selected = false, onSelect }) {
//   return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
// }

// function StarRating({ totalStars = 5 }) {
//   const [selectedStars, setSelectedStars] = useState(0);

//   return (
//     <>
//       {createArray(totalStars).map((n, i) => (
//         <Star
//           key={i}
//           selected={selectedStars > i}
//           onSelect={() => setSelectedStars(i + 1)}
//         />
//       ))}
//       <p>
//         {selectedStars} of {totalStars}
//       </p>
//     </>
//   );
// }

// function App() {
//   return <StarRating totalStars={6} />;
// }

// function App() {
//   const [status, setStatus] = useState("Not Delivered");
//   const [checked, setChecked] = useState(false);

//   return (
//     <div>
//       <input type="checkbox" value={checked} onChange={(checked) => setChecked(!checked)} />
//       <p>{checked ? "checked" : "not checked"} </p>

//       {/* <h1> The package is: {status}.</h1>
//       <button onClick={() => setStatus("Delivered")}>Deliver</button> */}
//     </div>
//   );
// }

// const [, , third] = ["Alex", "Ali", "Anna"];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
