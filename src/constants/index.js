import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  websitetoshow,
  dashboard,
  threejs,
  // adobeillustrator,
  // expressjs,
} from '../assets';

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Mern Stack Developer',
    icon: backend,
  },
  {
    title: 'Front End Developer',
    icon: mobile,
  },
  {
    title: 'Graphic Designer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'photoshop',
    icon: docker,
  },
  // {
  //   name: 'adobeillustrator',
  //   icon: adobeillustrator,
  // },
  // {
  //   name: 'expressjs',
  //   icon: expressjs,
  // },
];

const experiences = [
  {
    title: 'Graphic Designer',
    company_name: 'fiverr',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Translated concepts into captivating visuals, shaping brand identities and messages through innovative design.',
      'Collaborated closely with diverse clients to transform visions into tangible, polished designs.',
      'Created impactful logos, marketing materials, and social media graphics that elevated businesses.',
      "Earned recognition for consistently delivering designs that captured clients' unique essence.",
    ],
  },
  {
    title: 'React.js Developer',
    company_name: 'Freelancer',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developed and maintained cutting-edge web applications using React.js and related technologies.',
      'Collaborated with diverse teams including designers, product managers, and developers to craft top-tier digital products.',
      'Created responsive designs for seamless user experiences across devices and browsers.',
      'Provided valuable insights through code reviews, fostering a culture of continuous improvement.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Crafting seamless e-commerce experiences on the Shopify platform, blending cutting-edge web development with business acumen.',
      'Collaborating closely with clients to transform ideas into functional and visually appealing online stores.',
      'Implementing custom designs, optimizing performance, and ensuring intuitive user interfaces.',
      "Leveraging Shopify's ecosystem to integrate apps, enhance functionality, and drive sales.",
    ],
  },
  {
    title: 'Mern stack Developer',
    company_name: 'Bitspro',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      "Empowered by the MERN (MongoDB, Express.js, React.js, Node.js) stack, I've been an active participant in a dynamic development environment, located in Hyderabad's Latifabad district.",
      'Collaborated closely with a talented team of developers, leveraging collective strengths to deliver successful projects that align with industry best practices.',
      'Championed the execution of various projects, harnessing cutting-edge technologies such as Three.js, Redux, TypeScript, and more, resulting in a steep learning curve and a repertoire of powerful skills.',
      'Contributed to the seamless completion of numerous projects, bridging creativity with functionality to create impactful web applications.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link_github: 'https://github.com/',
    source_code_link_website: 'https://www.google.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link_github: 'https://github.com/',
    source_code_link_website: 'https://www.google.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link_github: 'https://github.com/',
    source_code_link_website: 'https://www.google.com/',
  },
  {
    name: 'Eccommerce',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: websitetoshow,
    source_code_link_github: 'https://github.com/',
    source_code_link_website: 'https://www.google.com/',
  },
  {
    name: 'Management',
    description:
      'A comprehensive Management software dashboard which helps in managing the world wide data colapse it and show the user simplified and comprised version.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: dashboard,
    source_code_link_github: 'https://github.com/',
    source_code_link_website: 'https://www.google.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
