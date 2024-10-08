import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing Router components
import About  from "./routes/About"; // Importing the About page
import Home from "./routes/Home"; // Importing the Home page
import Herodetails from "./routes/Herodetails";
import Navbar from "./components/Navbar"; // Importing the Navbar component

function App() {
  return (
    // for having the different pages router is used and for the different pages we have routes 
    <Router>
      {/* // putting outside the pages so that we see it in each page */}
   <Navbar/> 
   {/* below one navigates to the routes and by giving the paths which is a URL, it navigates to the pages */}
   
      <Routes> 
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/about" element={<About />} /> {/* About page route */}
        <Route path="/hero/:id" element={<herodetails />} /> Dynamic route for hero details
      </Routes>
    </Router>
  );
}

export default App;