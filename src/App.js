// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import AboutCancer from './pages/AboutCancer';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import DetectCancer from './pages/DetectCancer';
// import Footer from './components/Footer';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about-cancer" element={<AboutCancer />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/detect" element={<DetectCancer />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
// App.js
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutCancer from './pages/AboutCancer';
import Login from './pages/Login';
import Register from './pages/Register';
import DetectCancer from './pages/DetectCancer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutCancer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detect" element={<DetectCancer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
