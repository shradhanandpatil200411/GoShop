import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className='w-screen'>
      <Navbar />
      <MainRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
