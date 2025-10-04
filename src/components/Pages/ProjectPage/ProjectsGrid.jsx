import { Github } from 'lucide-react';
import React from 'react';

const ProjectsGrid = () => {
    const projects = [
        {
            id: 1,
            title: "DigiDine – Built to Serve 🍽️",
            description: "Smart restaurant system. Faster orders. Smoother bills.",
            imageUrl: "https://ik.imagekit.io/DearAsutosh/Projects/Screenshot%202025-04-04%20195252.png?updatedAt=1753306692220",
            url:"https://github.com/DearAsutosh/DigiDine-Restaurant-Management-System"
        },
        {
            id: 2,
            title: "🧠 Zara - personalized voice Assistant",
            description: "Your personal voice assistant. Not a gimmick. A game-changer.",
            imageUrl: "https://ik.imagekit.io/DearAsutosh/Projects/zara.png?updatedAt=1753306542236",
            url:"https://zara-assistant.netlify.app/"
        },
        {
            id: 3,
            title: "CarbonOut - Innovation Meets Sustainability 🌿",
            description: "A smart paver startup making sustainability walkable.",
            imageUrl: "https://ik.imagekit.io/DearAsutosh/Projects/carbonout.png?updatedAt=1753306543159",
            url:"https://shop-carbonout.netlify.app/"
        },
        {
            id: 4,
            title: "🌊 VS Code, Now on Steroids.",
            description: "A dark theme that hits like a dopamine shot — sharp, sleek, surgical.",
            imageUrl: "https://ik.imagekit.io/DearAsutosh/Projects/theme?updatedAt=1753307684099",
            url:"https://marketplace.visualstudio.com/items?itemName=AsutoshSahoo.devsena-dark"
        },

    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-2 lg:px-36 md:pt-20 lg:pt-0'>
            {projects.map(project => (
                <div
                    key={project.id}
                    className="relative h-96 overflow-hidden rounded-xl group transition-all duration-300 hover:shadow-lg border border-white"
                >
                    {/* Image with controlled zoom */}
                    <img
                        src={project.imageUrl}
                        alt={`${project.title} - ${project.description}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    {/* Dynamic vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500"></div>


                    {/* Bottom text/button panel */}
                    <div className="absolute bottom-0 left-0 right-0 w-full px-6 py-3 text-center">
                        {/* Title - always visible */}
                        <h2 className="text-2xl font-bold text-white mb-1 translate-y-0 group-hover:mb-2 transition-all duration-300">
                            {project.title}
                        </h2>

                        {/* Description - expands on hover */}
                        <div className="overflow-hidden h-6 group-hover:h-16 transition-all duration-500 ease-in-out">
                            <p className="text-gray-100 text-l opacity-90 group-hover:opacity-100">
                                {project.description}
                            </p>
                        </div>

                        {/* Button - appears on hover */}
                        <a target='_blank' href={project.url}>
                        <button className="px-6 py-2.5 border font-medium rounded-full opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 hover:bg-purple-950 hover:text-white shadow-md">
                            Explore Details <Github className='inline-block ml-2' />
                        </button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectsGrid;
