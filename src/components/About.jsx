import { useState } from 'react';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <p className="about-text">
            I am learning React and I love front-end development!
          </p>
          
          {showMore && (
            <div className="about-details">
              <div className="about-grid">
                <div className="about-item">
                  <h3>Skills</h3>
                  <ul>
                    <li>HTML5, CSS3, JavaScript</li>
                    <li>React</li>
                    <li>Responsive Design</li>
                    <li>GitHub</li>
                  </ul>
                </div>
                
                <div className="about-item">
                  <h3>Interests</h3>
                  <ul>
                    <li>Learning new technologies</li>
                    <li>Solving challenging problems</li>
                    <li>Developing open-source projects</li>
                    <li>Attending programming conferences</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          <button 
            className="toggle-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
}