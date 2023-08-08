import React from 'react';
import { KywraAvatar } from '../images';

const AboutMe = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="mb-4">About Me</h2>
        <div className="row">
          <div className="col-md-4">
            <img src={KywraAvatar} alt="Kywra Allen" className="img-fluid rounded-circle mb-3" />
          </div>
          <div className="col-md-8">
            <p>
              I am a 33-year-old married hardworking mother of three. I graduated from the University of Phoenix with a Bachelor's in Business Management. I have a graduate certificate in Full Stack Web Development from Vanderbilt University and plan to expand my knowledge into project management with a focus on information technology in the future. I am proficient in HTML, CSS, JavaScript, and MERN stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
