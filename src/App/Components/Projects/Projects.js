import React, {useState} from 'react';
import './Projects.scss';
import Section from '../Section/Section.js';
import ScrollAnimation from 'react-animate-on-scroll';
import ipsumImage1 from '../../../assets/ipsumProject.PNG';
import ipsumImage2 from '../../../assets/ipsumProjectAddQuote.PNG';
import nodeLogo from '../../../assets/nodejs-icon.svg';
import mongoLogo from "../../../assets/mongoLogo.png";
import postgresLogo from "../../../assets/postgres-logo.png";
import reactNativeLogo from "../../../assets/react-native-logo.png";



import VerticalSelector from '../VerticalSelector/VerticalSelector';

const Projects = () => {

    const myProjects = [
        {
            index: 0,
            name: 'Propane Ipsum',
            url: "https://propane-ipsum.herokuapp.com",
            linkText: "Heroku Deployment Link",
            subheading: "Ipsum Generator",
            description: [
                "When I discovered that this didn't already exist I was sort of shocked. Part placeholder text generator, part quote database, Propane Ipsum is my love letter to Mike Judge's King of the Hill, my all time favorite comedy series. This project was made entirely in node.js, with a Mongo database and UI rendered by EJS."
            ],
            projectThumbnails: [
                ipsumImage1,
                ipsumImage2
            ],
            techStack: [
                nodeLogo, mongoLogo
            ]
        },
        {
            index: 1,
            name: 'Groupie',
            subheading: "Mobile app to help musicians find new collaborators",
            description: [
                "Groupie is 'Tinder for musicians'.  It allows users to browse through other local musicians by swiping left to reject or right to make a connection.",
                "Users can add clips from YouTube or SoundCloud, as well as filter by instrument or genre.  Once a mutual connection is made, the app displays the matched users contact info.",
                "Built in React Native with a node API, and PostgreSQL storage."
            ],
            linkText: "Deployment Currently Down",
            projectThumbnails: [

            ],
            techStack: [
                reactNativeLogo,
                nodeLogo,
                postgresLogo
            ]
        }
    ]

    // LOCAL STATE
    const [selectedProject, setSelectedProject] = useState(myProjects[0])

    return (<Section sectionName={"Projects"}>
        <VerticalSelector selectedIndex={selectedProject.index} items={myProjects} selectItem={(i) => setSelectedProject(myProjects[i])}>

        </VerticalSelector>
        <section id={"Projects-Section"}>
            <div className={"single-project-view"}>

                <article>
                    <h1>{selectedProject.name}</h1>
                    {
                        selectedProject.url ?
                            <a target="_blank" href={selectedProject.url}>       
                                {selectedProject.linkText}
                            </a>
                            :
                            <h6>{selectedProject.linkText}</h6>
                    }

                    {
                            selectedProject.description.map((p, i) => 
                                <ScrollAnimation key={i} animateIn={"fadeInRight"} animateOut={"fadeOutRight"}>
                                    <p>{p}</p>
                                </ScrollAnimation>
                            )
                        }
                     <div className={"tech-stack"}>
                            {
                                selectedProject.techStack.map((t, i) => 
                                    <ScrollAnimation key={i} animateIn={"fadeIn"}>
                                        <img  src={t} alt=""/>
                                    </ScrollAnimation>
                                )
                            }
    

                        </div>
                </article>
                <aside>
                    {
                        selectedProject.projectThumbnails.map((t, i) => 
                        <img key={i} src={t} alt="thumbnail"></img>

                        )
                    }
                </aside>
            </div>

        </section>
    </Section>)
    
}

export default Projects;