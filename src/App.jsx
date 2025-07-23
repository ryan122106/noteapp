import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppBar from "./components/AppBar";
import { Toaster } from 'sonner';


// import all the pages
import HomePage from "./pages/HomePage";
import AddNewPage from "./pages/AddNewPage";
import CategoriesPage from "./pages/CategoriesPage";
import EditNote from "./pages/EditNote";


/*
  Routes:
  All notes => /
  Add note => /add
  Categories => /categories
*/

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddNewPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/edit" element={<EditNote />} />
      </Routes>
      <Toaster position="top-right" theme="dark"/>
    </Router>
  );
}

export default App;
