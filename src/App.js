import { Route, Routes } from "react-router-dom";
import ListUser from "./components/users/ListUser";
import CreateUser from "./components/users/CreateUser";
import EditUser from "./components/users/EditUser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<ListUser />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
