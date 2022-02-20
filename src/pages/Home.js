import React, { Component } from 'react';
import CoderImg from '../utils/images/coder.png';
import StudentImg from '../utils/images/student.png';
import TeamworkImg from '../utils/images/teamwork.png';
import TwoCol from '../components/twoColContent';

class Homepage extends Component {

    render() {

        const AboutObj= {
            headline: "About Me",
            block1: "I'm Nicolas (or Nick), an aspiring web/software developer. I'm a motivated person who loves strategy and problem solving. It's the reason I loves puzzles, word games, chess, and especially programming.",
            block2: "Outside of programming, I'm a fun loving person who loves learning new skills and picking up new hobbies. Some of my favorites are hiking, traveling, and snowboarding.",
            image: CoderImg,
            alt: "Image of person coding",
            orientLeft: true
        }
        const EducationObj = {
            headline: "Education",
            block1: "In 2020, I completed a 24-week coding bootcamp where I learned various coding practices, and built projects individually and with a team. Additionally, I'm a second year undergraduate student at Rutgers University, pursuing a B.S. in Computer Science, with specializations in Computer Security and Software Systems.",
            block2: "Having a formal education as well as completing a bootcamp gives me unique experience. My bootcamp gave me a strong foundation in web development, API interactions, and databases. Where as the degree program has taught me core computer science and programming fundamentals, as well as a more algorithmic approach.",
            image: StudentImg,
            alt: "Image of college student",
            orientLeft: false
        }
        const ExpObj = {
            headline: "Experience",
            block1: "In addition to gaining experience in the classroom daily, I put that knowledge to use in practial situations everyday. I've completed two internships as a web developer, and currently work as a Junior Developer for Ridge Marketing & Design.",
            block2: "I use the programming skills I've acquired daily to build websites and web-based applications for various clients. This involves working with the client, our design team, and a team of developers to come up with an optimal solution and execute it.",
            image: TeamworkImg,
            alt: "Image of team working together",
            orientLeft: true
        }

        return (
          <>
            <TwoCol headline={AboutObj.headline} block1={AboutObj.block1} block2={AboutObj.block2} image={AboutObj.image} alt={AboutObj.alt} orientLeft={AboutObj.orientLeft} />
            <TwoCol headline={EducationObj.headline} block1={EducationObj.block1} block2={EducationObj.block2} image={EducationObj.image} alt={EducationObj.alt} orientLeft={EducationObj.orientLeft} />
            <TwoCol headline={ExpObj.headline} block1={ExpObj.block1} block2={ExpObj.block2} image={ExpObj.image} alt={ExpObj.alt} orientLeft={ExpObj.orientLeft} />
          </>
        )
    }
}

export default Homepage; 