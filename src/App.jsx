import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-container">
      {/* Navigation bar */}
      <Navbar />
      
      {/* Header with custom message */}
      <Header message="Welcome to my portfolio!" />
      
      {/* Profile section with personal information */}
      <Profile
        name="Zainab Haidari"
        title="Front-End Developer"
        bio="Interested in React and web design"
        image="../../assets/profile.jpg" // Make sure to use the correct image path
      />
      
      {/* About Me section */}
      <About />
      
      {/* Display projects */}
      <Projects />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;