const data = {
  hero: {
    name: 'Jesse Hamilton',
    introduction: "Hello, my name is Jesse Hamilton I am a passionate React Web Developer, based in Montreal, Quebec.",
    title: 'React Web Developer',
    imageUrl: 'IMG_7908.png'
  },
  
  projects: [
     
    {
      title: 'Nyan Cat: Javascript Game',
      description: 'My first Web Development bootcamp project, implementing changes to build a nyan cat game wiht Javascript, wherein the user controls the cat to evade falling items, inplementing a lives system and buttons to allow the user to continue playing',
      imageUrl: ['nyancat2.png'],
      url: 'https://github.com/cb-wd-26/project-js-nyan-cat/pull/12/commits/a2d40bd4e2cf7d0d9f31aef908c715a0e0cf88f8',
    },
    {
    title: 'Hangman: React State Workshop',
      description: 'Using state in React to manipulate a game of Hangman to allow the user to choose letters and have them disappear from the options of letters, while testing to see if letter was correct',
      imageUrl: ['hangman.png'],
      url: 'https://github.com/cb-wd-26/react-state-P1/pull/13/commits/89bc3f314b6ad3a67ce34777ebf9b42c29bfb15d',
    },

    {
      title: 'Cookie: React Effects Workshop',
        description: 'Putting into practice learned experience of react effect, making alterations to a cookie game clone, the game features a cookie that can be clicked; every click yields 1 cookie. You can use cookies to buy resources that purchase cookies automatically for you as well',
        imageUrl: ['cookie.png'],
        url: 'https://github.com/cb-wd-26/react-effects/commit/ba67360b4187d3e19dd07e4a31bb86a407ef09aa',
      },
    
  ],
  contact: {
    title: 'Contact Me',
    email: 'jesse.hamilton317@gmail.com',
    github: 'https://github.com/jham317',
    linkedin: 'https://www.linkedin.com/in/jesse-hamilton-5b4103251//',
  
  },
  aboutMe: {
    title: 'About Me',
    description: 'I am entering the world of Web Development and looking to carve out a career in tech. I have always had an eye for creativity and design and love the intersectionality that Web Development allows. Being able to create both dynamic and responsive webpages, while curating a visually engaging interface for the user excites me. In my time at Concordia Bootcamps I have developed my skills in HTML, CSS, and React and hope to continue to expand my knowledge. After working for many years as a chef and taking a care and pride in my work I am looking for a new challenge. Working as a chef taught me a work ethic and dedication to a craft that I will carry on to my next career, as well as learning how to work within a team setting and knowing when to lead and when to lay back and allow others to thrive and help each other out constantly.  ',
    skills: [
      { name: 'Html', icon: 'FaHtml5', color: '#E44D26' },
      { name: 'CSS', icon: 'FaCss3Alt', color: '#264DE4' },
      { name: 'Javascript', icon: 'FaJs', color: '#F7DF1E' },
      { name: 'React.js', icon: 'FaReact', color: '#61DAFB' },
    ],
  },
}

export default data;
