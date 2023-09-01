import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { ProjectCard } from '../components/Works';
import DataBase from '../config/firebase';
import { ref, get } from 'firebase/database';

const fetchProjectData = async () => {
  try {
    const dbRef = ref(DataBase, 'projects');
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      console.log('No data available');
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const ProjectsShowCase = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjectData();
      if (data) {
        setProjectsData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} mt-20 text-white font-semibold`}
        >
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} text-[#915EFF]`}>
          Projects.
        </h2>
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
        {Array.isArray(projectsData) && projectsData.length > 0 ? (
          projectsData.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </>
  );
};

export default ProjectsShowCase;
