import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Narbar.jsx";
import About from "./pages/About.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import StudentDetails from "./pages/StudentDetails.jsx";
import Students from "./pages/Students.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main className="container app-main py-4 py-lg-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <div className="container py-3 d-flex flex-column flex-sm-row justify-content-between gap-1">
          <span>BrightPath College</span>
          <span>Student records, made easier.</span>
        </div>
      </footer>
    </>
  );
}

export default App;