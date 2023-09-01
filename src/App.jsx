import { Route, Routes } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';
import Login from './components/login/Login';
import ProjectsShowCase from './pages/ProjectsShowCase';
import AddProject from './components/projects/AddProject';
import AboutMe from './pages/AboutMe';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          }
        />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsShowCase />} />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
