import React from "react";
import separator from "../../../assets/images/separator-desktop.svg";
import smallSeparator from "../../../assets/images/separator-mobile.svg";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "REACT JS", icon: "https://cdn.worldvectorlogo.com/logos/react-1.svg" },
    { name: "TAILWIND CSS", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/tailwind_css.png" },
    { name: "GSAP", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vteG2DudlxILcIB8idhgX49HFuCk4_nEtQ&s" },
    { name: "MOTION", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97L0p0VWY45qFLyHI_1UsL4ozOn50SyKHjtR7FeWcpdffS5ld2_IobJvgLrIhDcUeZvo&usqp=CAU" },
    { name: "CANVA", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURXSVJcJLHRlQApPQ2jJBniDiuSsdos84MA&s" },
    { name: "FIGMA", icon: "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format" },
    { name: "BOOTSTRAP", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/bootstrap.png" },
    { name: "MATERIALIZE CSS", icon: "https://materializecss.com/res/materialize.svg" },
    { name: "JQUERY", icon: "https://cdn-icons-png.flaticon.com/512/16066/16066077.png" },
    { name: "AJAX", icon: "https://www.w3care.com/images/uploads/technologies/ajax-logo.webp" },
  ];

  const backendSkills = [
    { name: "SPRINGBOOT", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/springboot.png" },
    { name: "SPRING", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png" },
    { name: "HIBERNATE", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/hibernate-icon.png" },
    { name: "ORACLE SQL", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/oracle-database.png" },
    { name: "MYSQL", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/mysql.png" },
    { name: "SERVLET", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/icons8-java-logo-188.png" },
    { name: "JSP", icon: "https://cdn-icons-png.flaticon.com/512/28/28968.png" },
    { name: "JSTL", icon: "https://shkrew.gallerycdn.vsassets.io/extensions/shkrew/jstlsnippets/1.0.1/1600333627461/Microsoft.VisualStudio.Services.Icons.Default" },
    { name: "THYMELEAF", icon: "https://avatars.githubusercontent.com/u/1492367?s=280&v=4" },
  ];

  const programmingSkills = [
    { name: "JAVA", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/icons8-java-logo-188.png" },
    { name: "JAVASCRIPT", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/javascript--v1.png" },
    { name: "C++", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/c-plus-plus-logo.png" },
    { name: "C", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/c-programming.png" },
    { name: "SQL", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/sql.png" },
    { name: "HTML", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/html-5--v1.png" },
    { name: "CSS", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/css3.png" },
  ];

  const toolsSkills = [
    { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png" },
    { name: "Git", icon: "https://cdn-icons-png.flaticon.com/512/15466/15466163.png" },
    { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
    { name: "IntelliJ IDEA", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHQE89O5n7JuJZLQE3MCBysxZx3Y-JMiSGQ&s" },
    { name: "VS Code", icon: "https://code.visualstudio.com/assets/images/code-stable.png" },
    { name: "NetBeans", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/Apache_NetBeans_Logo.png" },
    { name: "Eclipse", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/eclipse.svg" },
    { name: "Maven", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/icons8-maven-ios-100.png" },
    { name: "ChatGPT", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/chat-gpt.png" },
    { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "Claude AI", icon: "https://zorgle.co.uk/wp-content/uploads/2024/11/Claude-ai-logo.png" },
    { name: "Blackbox AI", icon: "https://ik.imagekit.io/DearAsutosh/skill%20icons/blackbox-ai.png" },
    { name: "DeepSeek AI", icon: "https://logosandtypes.com/wp-content/uploads/2025/02/Deepseek.png" },
  ];

  const renderCapsules = (skills) => (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2 bg-[#1E1E2F] border border-gray-700 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default"
        >
          <img src={skill.icon} alt={skill.name} className="w-6 h-6 md:w-7 md:h-7 object-contain" />
          <span className="text-white font-medium text-xs md:text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative bg-[#191265] w-full py-16 px-4 md:px-20 text-center">
      <img src={separator} alt="" className="absolute top-0 left-0 w-full md:h-[100px] hidden md:block" />
      <img src={smallSeparator} alt="" className="absolute top-0 left-0 w-full h-[80px] md:hidden" />

      <div className="text-white mt-24 md:mt-36 mb-12">
        <h1 className="text-2xl md:text-5xl font-bold mb-3">I don’t just know tech,</h1>
        <h2 className="text-lg md:text-2xl">
          I bend it to build{" "}
          <span className="text-yellow-300 underline underline-offset-4">
            what others don’t dare to imagine.
          </span>
        </h2>
      </div>

      <section className="mb-8 text-left">
        <h2 className="text-white text-xl md:text-3xl font-semibold mb-2">Frontend Technologies</h2>
        {renderCapsules(frontendSkills)}
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-white text-xl md:text-3xl font-semibold mb-2">Backend Tools</h2>
        {renderCapsules(backendSkills)}
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-white text-xl md:text-3xl font-semibold mb-2">Programming Languages</h2>
        {renderCapsules(programmingSkills)}
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-white text-xl md:text-3xl font-semibold mb-2">Tools & Technologies</h2>
        {renderCapsules(toolsSkills)}
      </section>
    </div>
  );
};

export default SkillsSection;
