import React from 'react';
import TeMecha from './resume/TeMechaResume';
// import Cameron from './resume/CamResume';

function AboutUs() {
  return (
    <div>
      <h2>Meet the Founders</h2>
        <section>
          <h3>TeMecha Griffin</h3>
          <p>TeMecha is a software engineer with a passion for developing innovative solutions that enhance user experience and drive business success.</p>
          <button className="btn-primary">
            <a
              href="/resume/TeMecha"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              <i className="fa-solid fa-file-lines mr-2"></i> View Resume
            </a>
          </button>

          
        </section>
        <section>
          <h3>Cameron Griffin</h3>
          
        </section>
    </div>
  );
}

export default AboutUs;