import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const AboutMe = () => {
  return (
    <>
      <div className=" pt-20 bg-[#050816]">
        <motion.div variants={textVariant()}>
          <p
            className={`${styles.sectionSubText} mt-20 text-white font-semibold`}
          >
            About Me
          </p>
          <h2 className={`${styles.sectionHeadText} text-[#915EFF]`}>
            Introduction
          </h2>
        </motion.div>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
          >
            Hello, I'm Muhammad Juman, a passionate software developer with a
            strong foundation in TypeScript and JavaScript. My expertise extends
            to leading-edge frameworks such as React, Node.js, and Three.js.
            With a proven track record of delivering innovative solutions, I
            thrive on tackling complex challenges and transforming them into
            efficient, scalable, and user-friendly applications.
            <br />
            <br />I take pride in my ability to adapt quickly to new
            technologies and my dedication to close collaboration with clients.
            Together, we can turn your ideas into tangible, real-world solutions
            that make a difference. Let's work hand in hand to bring your vision
            to life and achieve remarkable results.
          </motion.p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
