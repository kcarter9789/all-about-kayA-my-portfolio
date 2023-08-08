import React from 'react';
import Project from './Project';
import { GeneratePasswordImage, ScribbleItImage, WorldofWeatherImage, WorkdaySchedulerImage, PeopleFocusImage, ReadMeGeneratorImage } from '../images';

const Portfolio = () => {
  const projects = [
    {
      name: 'Scribble-it',
      githubRepo: 'https://github.com/kcarter9789/scribble-it',
      deployedApp: 'https://github.com/kcarter9789/scribble-it.git',
      image: ScribbleItImage
    },
    {
      name: 'People-N-Focus',
      githubRepo: 'https://github.com/kcarter9789/People-N-FocUS',
      deployedApp: 'https://github.com/kcarter9789/People-N-FocUS.git',
      image: PeopleFocusImage
    },
    {
      name: 'PrettyNPolished',
      githubRepo: 'https://github.com/kcarter9789/prettynpolished',
      deployedApp: 'https://github.com/kcarter9789/prettynpolished.git',
      image: ReadMeGeneratorImage
    },
    {
      name: 'Worldofweather',
      githubRepo: 'https://github.com/kcarter9789/Worldofweather.git',
      deployedApp: 'https://kcarter9789.github.io/Worldofweather/',
      image: WorldofWeatherImage
    },
    {
      name: 'Workday2day-scheduler',
      githubRepo: 'https://github.com/kcarter9789/workday2dayscheduler',
      deployedApp: 'https://kcarter9789.github.io/workday2dayscheduler/',
      image: WorkdaySchedulerImage
    },
    {
      name: 'Password generator',
      githubRepo: 'https://github.com/kcarter9789/passwordgeneratorkallenbootcamp/',
      deployedApp: 'https://kcarter9789.github.io/passwordgeneratorkallenbootcamp/',
      image: GeneratePasswordImage
    },
  ];

   return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2 className="mb-4">Portfolio</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <Project
                name={project.name}
                githubRepo={project.githubRepo}
                deployedApp={project.deployedApp}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;