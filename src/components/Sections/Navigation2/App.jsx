import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Form from "./Form.jsx";

// export default function App() {
//   return (
//     <div>
//       <nav>
//         <NavLink to="/nav2">Home</NavLink>{" "}
//         <NavLink to="/promptable">Prompt</NavLink>
//       </nav>
//
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path="/promptable" element={<Form />} />
//       </Routes>
//     </div>
//   );
// }


export const Page1 = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
