import React from 'react';
import { projects } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { ProjectCard } from '../components/Works';

const ProjectsShowCase = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-20`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
        >
          Dive into a world of innovation and expertise through my showcased
          projects, where real-world applications meet technological mastery.
          This portfolio encapsulates the essence of my skillset, highlighting
          the breadth of my problem-solving capabilities and seamless
          integration of diverse technologies. Each project is a testament to my
          proficiency in project management and my passion for crafting
          solutions that matter.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 items-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsShowCase;
