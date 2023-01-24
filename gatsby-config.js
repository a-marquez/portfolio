module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://a-marquez.github.io/portfolio/`,
    // Your Name
    name: 'Albert Marquez',
    // Main Site Title
    title: `Albert Marquez | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer`,
    // Optional: Twitter account handle
    // author: `@a-marquez`,
    // Optional: Github account URL
    github: `https://github.com/a-marquez`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/al-marquez/`,
    // Content of the About Me section
    email: `albertmarquez@outlook.com`,
    resume: `https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:edd99a3d-3506-4ecd-ac4e-55c1ca8d29cf`,

    about: `I'm a software engineer with both front-end and back-end experience. Clean and performant code is a passion of mine, as is contributing to
    efforts in environmental or health information spaces. Tech interests include automation scripting, computer-vision, machine learning,
    and microservice orchestration. Non-tech interests include swimming, music, and survival games.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    work: [
      {
        name: '18F openFDA API Challenge | Blue Raster',
        description:
          'A prototype map visualization for an API providing food recall information.',
        link: 'https://www.blueraster.com/18f/',
      },
      {
        name: 'Texas Water Explorer | The Nature Conservancy',
        description:
          'A dashboard to visualize water metrics using geodata.',
        link: 'http://www.texaswaterexplorer.tnc.org/map.html',
      },
      {
        name: 'STATcompiler | The DHS Program',
        description:
          'A data visualization and selection tool, allowing users to explore data in chart or map formats. ',
        link: 'https://www.statcompiler.com/en/',
      },
      {
        name: 'Surveys Overview Map | The DHS Program',
        description:
          "DHS's interactive map detailing what surveys have been conducted in what countries.",
        link: 'https://dhsprogram.com/countries/index.cfm?show=map',
      },
      {
        name: 'SDR Indicator Data | The DHS Program',
        description: 'A tool to help users specify the selection and format of geodata for health surveys run by the DHS and other organizations.',
        link: 'https://spatialdata.dhsprogram.com/data'
      },
      {
        name: 'Ellisdale Construction',
        description: 'WordPress site for a local construction business to display projects. Made to be easily edited by client.',
        link: 'https://ellisdaleconstruction.com/'
      },
      {
        name: 'Square 134 Architects',
        description: 'Portfolio site for an architecture firm. Built with WordPress.',
        link: 'https://square134.com/'
      }
    ],
    projects: [
      {
        name: 'Pokemon Go Automation Assistant',
        description: `Automates trading, and gift sending/receiving. Project uses Node and adb,
        rendering a React application in the terminal to provide status, control options, and launch functions.`,
        link: 'https://gitlab.com/star_lion/mobile-assistants/-/tree/main/packages/pogo'
      },
      {
        name: 'Puzzle and Dragon Bot',
        description: `Tool to automatically solve and execute solution for the mobile matching game Puzzle and Dragon.
        Project involves both server and client components, uing Node, adb, and fastify. Implements an api to expose
        functionality to client.`,
        link: 'https://gitlab.com/star_lion/pad-bot-2'
      },
      {
        name: 'Ink Components',
        description: 'A small library of UI components to use with Ink.js. for rendering terminal UIs.',
        link: 'https://gitlab.com/star_lion/mobile-assistants/-/tree/main/lib/ink-components'
      },
      {
        name: "Extended Map Icons | Don't Starve",
        description: "A game mod that adds extra map icons, project uses a Node script to generate appropriate game Lua files from image assets.",
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=703451582'
      },
      {
        name: "Obedient Companions | Don't Starve",
        description: 'Another mod that adds functionality, uses Lua scripting to add stay/recall functionality to companions.',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=701538210'
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Digital Infuzion',
        description: 'Software Engineer, January 2023 - Present',
        link: 'https://www.digitalinfuzion.com/',
      },
      {
        name: 'CartoWorks',
        description: 'Software Engineer, March 2020 - January 2023',
        link: '',
      },
      {
        name: 'Gypsy Floors',
        description: 'IT Adminisrator, January 2016 - March 2020',
        link: '',
      },
      {
        name: 'Blue Raster',
        description: 'Software Engineer, June 2013 - Dec 2016',
        link: 'https://www.blueraster.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript/TypeScript, Node.js, React, Python, ArcGIS JS',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PosgreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), GIT, CI / CD, Microservices, Figma, Functional Programming, WordPress',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
