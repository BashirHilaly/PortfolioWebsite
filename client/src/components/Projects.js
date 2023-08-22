import React from 'react';


function Project(title, madeIn, link) {
    this.title = title;
    this.madeIn = madeIn;
    this.link = link;
};

const projects = [];

const InspirationEngine = new Project("Inspiration Engine", "React & Express", "https://github.com/sokoruchi100/project-goodfellas");
const Planitari = new Project("Planitari", "Unity", "https://github.com/BashirHilaly/Planitari");
const Gaiden = new Project("Gaiden", "Flask & SQLalchemy", "https://github.com/BashirHilaly/Gaiden");
const GPT2EssayWriter = new Project("GPT2EssayWriter", "Python & Selenium", "https://github.com/BashirHilaly/GPT-2-EssayWriter");

projects.push(InspirationEngine);
projects.push(Planitari);
projects.push(Gaiden);
projects.push(GPT2EssayWriter);


const Projects = () => {
  return (
    <div className='h-fit bg-[#381E11]'>
        <div className='flex items-center flex-col justify-center text-5xl pt-[5%] text-[#E3CCAE]'>Projects</div>
        <hr class="w-28 h-1 mx-auto my-4 bg-[#F5971B] border-0 rounded md:my-10 dark:bg-[#F5971B]"/>

        <div className='container mx-auto grid justify-center sm:grid-cols-1 lg:grid-cols-4 pb-14'>
            {projects.map((project) => (
                <div className='flex flex-col items-center w-80 h-56 group'>
                    <div className='w-80 h-56 transition filter group-hover:saturate-50 group-hover:blur-sm group-hover:brightness-50 duration-500 bg-[url(https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg)] bg-cover bg-center'>
                    </div>
                    <div className='absolute transition opacity-0 translate-y-4 text-3xl text-[#D9D9D9] group-hover:opacity-100 duration:700'>{ project.title }</div>
                    <div className='absolute transition opacity-0 translate-y-14 text-sm text-[#FB8720] group-hover:opacity-100 duration:700'>{ project.madeIn }</div>
                    <div className='absolute transition opacity-0 translate-y-36 group-hover:opacity-100 duration:700'>
                        <a href={ project.link } class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                View
                            </span>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Projects;