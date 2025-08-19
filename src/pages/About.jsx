import Section from '../components/Section'

export default function About() {
return (
<section  
title="About Me"  
subtitle="A bit about my background and skills."  
className="flex flex-row items-start gap-10 mt-8"  
>
{/* Profile Photo Section */}
<div className="w-100 h-160 rounded-full bg-gray-100 border overflow-hidden flex-shrink-0">
<img  
src="skills.png"   
alt="Profile"  
className="object-cover w-full h-full"  
/>
</div>

{/* Main About + Skills Section */}  
  <div className="flex-1 flex flex-col">  
    {/* About Me Details */}  
    <h2 className="text-5xl font-bold mb-4">About Me</h2>  
    <p className="text-1xl mb-2 text-gray-700">  
      Motivated BCA graduate seeking an entry-level role in Software Development / Data Analytics where I can apply programming, analytical, and problem-solving skills to contribute to organizational success while enhancing my technical expertise.  
    </p>  
    <p className="mb-6 text-gray-700">  
      Interests: web development, UI engineering, and data-driven apps.  
    </p>  
    <p className="mb-20 text-gray-700">  
      Education: BCA • Goal: Software Developer  
    </p>  

    {/* Skills Section Below About Me */}  
    <div>  
      <h2 className="text-3xl font-bold mb-2">Skills</h2>  
       <ul className="flex flex-wrap grid grid-cols-3 gap-2">  
<li className="flex items-center px-3 py-2 rounded-xl bg-gray-100">  
  <img src="/html.png" alt="HTML" className="w-6 h-6 mr-2" />  
  HTML  
</li>  
<li className="flex items-center px-3 py-2 rounded-xl bg-gray-100">  
  <img src="/css.png" alt="CSS" className="w-6 h-6 mr-2" />  
  CSS  
</li>  
<li className="flex items-center px-3 py-2 rounded-xl bg-gray-100">  
  <img src="/js.png" alt="JavaScript" className="w-6 h-6 mr-2" />  
  JavaScript  
</li>  
<li className="flex items-center px-3 py-2 rounded-xl bg-gray-100">  
  <img src="/react.png" alt="React" className="w-6 h-6 mr-2" />  
  <span className="whitespace-normal break-words">React</span>  
</li>  
<li className="flex items-center px-3 py-2 rounded-xl bg-gray-100">  
  <img src="/python.png" alt="Python" className="w-6 h-6 mr-2" />  
  Python  
</li>  
<li className="flex items-center px-3 py-2 rounded-xl bg-gray-100">  
  <img src="github.png" alt="Git/GitHub" className="w-6 h-6 mr-2" />  
  Git/GitHub  
</li>

  </ul>  
        </div>  
      </div>  
    </section>  
  );  
}
