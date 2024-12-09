import React from 'react';
import ProjectCard from './ProjectsCard'; 

export default function Projects () {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white'>
      <h1 className='flex justify-center text-2xl md:text-4xl text-white font-bold'>Projects</h1>
    <div className="py-12 px-8 flex flex-wrap gap-6">
      
      {/* Project Card 1 */}
      <ProjectCard
        title="Project 2: ToDo List App"
        main="A Node.js & TypeScript based App for managing and organizing your tasks efficiently."
        demoLink="https://vercel.com/erum-saeed-88s-projects/todo-list"  
        sourceCodeLink="https://github.com/Erum-Saeed-88/Todo-List-By-Erum" 
      />
      
      {/* Project Card 2 */}
      <ProjectCard
        title="Project 3: Interactive Dynamic Resume "
        main="A TypeScript based Interactive Resume built with HTML & CSS,allowing users to showcase their skills dynamically ."
        demoLink="https://vercel.com/erum-saeed-88s-projects/dynamic-resume-builder"  
        sourceCodeLink="https://github.com/Erum-Saeed-88/dynamic-resume-builder" 
      />
    </div>
    </div>
  )
}