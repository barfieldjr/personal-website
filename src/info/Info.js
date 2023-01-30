import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import freelance from '../img/freelance.png'
import meta from '../img/meta.png'
import devhub from '../img/devhub.png'
import singlestone from '../img/singlestone.png'
import cisco from '../img/cisco.png'
import resume from '../assets/Chris_Barfield_Resume.pdf';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Chris",
    lastName: "Barfield",
    initials: "CB", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Computer Science Student",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '📱',
            text: 'tech enthusiast'
        },
        {
            emoji: '📚',
            text: 'university of virginia'
        },
        {
            emoji: "💻",
            text: "intern at meta (2022)"
        },
        {
            emoji: "📧",
            text: "cdb8da@virginia.edu"
        }
    ],
    socials: [
        {
            link: resume,
            icon: "fa fa-id-badge",
            label: 'resume'
        },
        {
            link: "https://linkedin.com/in/barfieldjr",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/bayareabarfield",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://github.com/CBarfield5",
            icon: "fa fa-github",
            label: 'github'
        },
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Chris. I'm a computer science student at the University of Virginia. I love learning about new tech and cutting edge frameworks! In my free time, along with working on personal projects, I enjoy watching videos about startups and the origin stories of tech companies.",
    skills:
        {
            proficientWith: ['python', 'javascript', 'react', 'git', 'tailwind', 'cloud computing'],
            exposedTo: ['nodejs', 'solidity', 'aws', 'azure', 'google cloud platform', 'machine learning', 'tensorflow']
        }
    ,
    hobbies: [
        {
            label: 'shows',
            emoji: '🎥'
        },
        {
            label: 'projects',
            emoji: '💻'
        },
        {
            label: 'sports',
            emoji: '🏈'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
             // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            
            image: mock5
        }
    ],
    experience: [
        {
            companyName: 'Meta (Facebook)',
            dates: 'June 2022 - August 2022',
            location: 'Menlo Park, California',
            title: 'Software Engineering Intern',
            image: meta,
            skills: 'React, Tailwind, ExpressJS, NodeJS, Solidity, Flow, Google Cloud Platform, Git'
        },
        {
            companyName: 'UVA Development Hub',
            dates: 'January 2022 - May 2022',
            location: 'Charlottesville, Virginia',
            title: 'ML/A.I. Intern',
            image: devhub,
            skills: 'Python, TensorFlow, Keras, Pandas, Numpy, AWS Lamba, AWS EC2, AWS S3, Google Colab'
        },
        {
            companyName: 'SingleStone Consulting',
            dates: 'June 2021 - August 2021',
            location: 'Richmond, Virginia',
            title: 'Software Engineering Intern',
            image: singlestone,
            skills: 'Javascript, Microsoft Power Automate, Azure Devops, Azure Functions, Git'
        },
        {
            companyName: 'Cisco Systems',
            dates: 'May 2021',
            location: 'Remote',
            title: 'Technical Extern',
            image: cisco,
            skills: 'Technical Knowledge, Systems Design'
        }
    ]
}