import { useState } from 'react';
import Project from "../Project";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'surfReport',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'pastelPretzel',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'ledWall',
            description: 'Node/IoT',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'calculator',
            description: 'REact/JavaScript/CSS',
            link: "https://github.com",
            repo: "https://github.com"
        },
    ]);

    return (
        <div>
            <div className="flex-row">
                {projects.map((project, idx) => (
                    <Project
                        project={project}
                        key={project.name + idx}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;