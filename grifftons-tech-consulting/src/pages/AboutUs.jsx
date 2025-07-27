import React from 'react';
import TeMecha from './resume/TeMechaResume';
import Cameron from './resume/CamResume';

function AboutUs() {
  return (
    <div>
      <h2>Meet the Founders</h2>
        <section>
          <h3>TeMecha Griffin</h3>
          <p>TeMecha is a software engineer with a passion for developing innovative solutions that enhance user experience and drive business success.</p>
          <TeMecha /> /* Display TeMecha's resume */
        </section>
        <section>
          <h3>Cameron Griffin</h3>
          {/* <p> </p> */}
          <Cameron /> /* Display Cameron's resume */
        </section>
    </div>
  );
}

export default AboutUs;