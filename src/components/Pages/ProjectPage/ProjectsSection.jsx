import separator from '../../../assets/images/blue-separator-desktop.svg';
import smallSeparator from '../../../assets/images/blue-separator-mobile.svg';
import { ArrowUpFromDot } from 'lucide-react';
import ProjectsGrid from './ProjectsGrid';


const ProjectsSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#a2a2a2] lg:pb-40">
      {/* Background Separators */}
      <img src={separator} alt="" className="inset-0 absolute w-full md:h-[100px]" />
      <img src={smallSeparator} alt="" className="md:hidden inset-0 absolute w-full h-[80px]" />
      <div className="pt-40 mb-20 headline flex justify-center items-center gap-10 md:gap-44 text-black">
        <div className="arrow">
          <ArrowUpFromDot className='-rotate-90' size={50}/>
        </div>
        <div className="bold text-3xl md:text-7xl">My Works</div>
        <div className="arrow">
          <ArrowUpFromDot className=' rotate-90' size={50} />
        </div>
      </div>
      <ProjectsGrid/>
    </div>
  );
};

export default ProjectsSection;
