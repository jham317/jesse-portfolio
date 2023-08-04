const data = {
  name: 'Jesse Hamilton',
  introduction: "Hi, I'm Jesse Hamilton, a passionate React Web Developer, based in Montreal, Quebec.",
    projects: [
      {
        title: 'Nyan Cat Game',
        description: 'Description',
        imageUrl: [
          'nyancat.png',
          'nyancat2.png',
          'nyancat3.png'
          ],
        url: 'https://github.com/cb-wd-26/project-js-nyan-cat/pull/12/commits/a2d40bd4e2cf7d0d9f31aef908c715a0e0cf88f8',
      },
      {
        title: 'Workshop on React Effects-Cookie Game',
        description: 'Description',
        imageUrl: ['cookie.png'],
        url: 'https://github.com/jham317/react-effects/commit/ba67360b4187d3e19dd07e4a31bb86a407ef09aa',
      },
      {
        title: 'Workshop on React State-Hangman',
        description: 'Description',
        imageUrl: ['hangman.png'],
        url: 'https://github.com/cb-wd-26/react-state-P1/commit/89bc3f314b6ad3a67ce34777ebf9b42c29bfb15d',
      },
    ],
    contact: {
      email: 'jesse.hamilton317@gmail.com',
      github: 'https://github.com/jham317',
      linkedin: 'https://www.linkedin.com/in/jesse-hamilton-5b4103251//',
      // Add more contact information as needed
    },
};
  
  
  const aboutMeData = {
    title: 'About Me',
    description: 'I am entering the world of Web Development and looking to carve out a career in tech. I have always had an eye for creativity and design and love the intersectionality that Web Development allows. Being able to create both dynamic and responsive webpages, as well as visually engaging interface for the use. In my time at Concordia Bootcamps I have developped my skills in HTML, CSS, and React. I am looking forward to expanding my knowledge in an ever expanding tech landscape and offering my skills to contribute to companies in need of a Web Developper ',
    skills: [
      'Html',
      'CSS',
      'Javascript',
      'React.js',
    ],
  };
  
  const extendedData = {
    ...data, // Spread the existing data properties
    aboutMe: aboutMeData, // Add the new 'aboutMe' property
  };
  
  export default extendedData;