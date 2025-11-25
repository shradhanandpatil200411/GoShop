import AuthenticationPage from "./Pages/AuthenticationPage";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className='w-screen'>
      <Navbar />
      <AuthenticationPage />
      <ToastContainer />
    </div>
  );
}

export default App;
