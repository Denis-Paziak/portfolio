import React from 'react';
import "./projects.scss";


interface iProjects {
    id: number,
    name: string,
    desc: string,
    link: string,
    img: string,
    skills: string[]
}


const data: iProjects[] = [
     {
        id: 8,
        name: "Alcoopt",
        desc: "Is a modern online store specializing in offering a wide selection of alcoholic beverages from around the world. Our store was created with one goal in mind - to make the selection and purchase of alcohol an easy and enjoyable experience for our customers",
        link: "https://www.alcoopt.store/",
        img: "img/47895768.jpg",
        skills: ["HTML", "CSS", "Wordpress", "JavaScript", "PHP"]
    },
    {
        id: 7,
        name: "l21ua",
        desc: "L21UA is a Ukrainian startup specializing in the use of data and artificial intelligence to optimize business processes and increase the efficiency of your company.",
        link: "https://l21ua.tech/",
        img: "img/l21ua.jpg",
        skills: ["HTML", "CSS", "Wordpress", "JavaScript", "PHP"]
    },
    {
        id: 1,
        name: "Amazing-taiwan",
        desc: "Amazing Taiwan is travel guidance platform, helps hundreds of thousands of people each month, become better travelers.",
        link: "https://denys-paziak.github.io/Amazing-taiwan/",
        img: "img/154966.jpg",
        skills: ["HTML", "SCSS", "JavaScript"]
    },
    {
        id: 2,
        name: "Trafico",
        desc: "The occupational traffic permit is one of the most important things in the company when carrying out freight transport. In fact, it is a prerequisite for doing business traffic at all.",
        link: "https://denys-paziak.github.io/Trafico/output/",
        img: "img/6544989.jpg",
        skills: ["HTML", "SCSS", "JavaScript", "gulp"]
    },
    {
        id: 3,
        name: "Weather app",
        desc: "The weather app is a React-based application that is designed to help you keep track of the weather in your region. With its user-friendly interface and easy-to-use features, this app is perfect for anyone who wants to stay up-to-date with the latest weather conditions. Whether you're planning a trip or just want to know what to wear for the day, the weather app has got you covered. You can easily view the temperature, humidity, wind speed, and other important weather parameters for any location in your region.",
        link: "https://weather-app-zeta-snowy.vercel.app/",
        img: "img/4685763.jpg",
        skills: ["HTML", "SCSS", "React", "axios"]
    },
    {
        id: 4,
        name: "Call-Center Software Dashboard",
        desc: "The Call-Center Software Dashboard serves as a central tool for effectively organizing and managing contact center activities. This innovative platform provides a comprehensive set of tools and analytical resources that enable companies to enhance customer service quality, improve operational efficiency, and make more informed data-driven decisions.",
        link: "https://call-center-software.vercel.app/",
        img: "img/2579468.jpg",
        skills: ["HTML", "SCSS", "React", "Nivo"]
    },
    {
        id: 5,
        name: "Redux Chat   ",
        desc: "This project uses the React library to develop the user interface and Redux to manage the app's state. Each user action calls the corresponding Redux action, which updates the state of the application and notifies all subscribed users of the changes.",
        link: "https://redux-chat.vercel.app/",
        img: "img/8965743.jpg",
        skills: ["React", "Redux", "Typescript", "Material-UI",]
    },
    {
        id: 6,
        name: "React Todo App",
        desc: "A to-do list program is a software application that allows users to create and manage tasks or items that need to be done.",
        link: "https://todo-list-denis-paziak.vercel.app/",
        img: "img/5687642.jpg",
        skills: ["React", "SCSS", "Redux Toolkit", "Framer Motion",]
    },
]

function Projects() {
    return (
        <section className='projects' id='projects'>
            <div className="container">
                <div className="title">
                    <h2>Look at My <br /><span>Projects</span></h2>
                    <p>Welcome to my projects page! Here, I am delighted to showcase some of the most interesting and significant works that I have been involved in.</p>
                </div>
                <div className="work-container">
                    {data.map((el: iProjects) => {
                        return <a href={el.link} key={el.id} className="work-item hover" target='_blank' rel="noreferrer">
                            <div className="work-item__img">
                                <img src={"./" + el.img} alt="" />
                            </div>
                            <div className="work-item__text">
                                <div className="work-item__title">
                                    <h2>{el.name}</h2>
                                    <p>{el.desc.slice(0, 120)}</p>
                                </div>
                                <ul className="work-item__skills">
                                    {el.skills.map((el: string) => {
                                        return <li key={el}>{el}</li>
                                    })}
                                </ul>
                            </div>
                        </a>
                    })}
                </div>
            </div>
        </section >
    )
}

export default Projects
