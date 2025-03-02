//import React from 'react'

import { useNavigate } from "react-router-dom"

const TemplatesSection = () => {
  const navigate = useNavigate() ;
  const navigateCreativeTemplate = () =>{
    navigate("/CreativeTemplates") ;
  }
  return (
    <div>
       <div className="bg-gray-100 p-10 gap-7 shadow-md rounded-lg flex justify-between">
      {/* Resume Templates Section */}
      <div className="w-1/3">
        <h3 className="text-purple-600 font-semibold text-lg flex items-center">
          📄 Resume Templates
        </h3>
        <ul className="mt-2 space-y-2  text-gray-700">
          <li onClick={navigateCreativeTemplate} className="cursor-pointer hover:bg-amber-200">🖌 <strong>Creative Templates</strong> - Creative resume for creative industries.</li>
          <li className="cursor-pointer hover:bg-amber-200">🎭 <strong>Traditional Templates</strong> - For conservative industries.</li>
          <li className="cursor-pointer hover:bg-amber-200">🔲 <strong>Modern Templates</strong> - The latest resume trends.</li>
          <li className="cursor-pointer  hover:bg-amber-200">📑 <strong>Simple Templates</strong> - Focus on skills & accomplishments.</li>
        </ul>
      </div>

      {/* Resume Writing Guides Section */}
      <div className="w-1/3">
        <h3 className="text-purple-600 font-semibold text-lg flex items-center">
          📖 Resume Writing Guides
        </h3>
        <ul className="mt-2 space-y-2 text-gray-700">
          <li><strong>Writing a Resume</strong> - A complete guide on resume writing.</li>
          <li><strong>Resume Summary</strong> - How to write a quick resume summary.</li>
          <li><strong>Choosing a Resume Format</strong> - Best format for your use case.</li>
          <li><strong>Fitting Experience on One Page</strong> - Tricks to fit experience.</li>
        </ul>
      </div>

      {/* Resume Examples Section */}
      <div className="w-1/3">
        <h3 className="text-purple-600 font-semibold text-lg flex items-center">
          📂 Resume Examples
        </h3>
        <ul className="mt-2 space-y-2 text-gray-700">
          <li>✅ Project Manager</li>
          <li>✅ Data Scientist</li>
          <li>✅ Scrum Master</li>
          <li>✅ Business Analyst</li>
        </ul>
        <div className="mt-4 flex flex-col space-y-2 text-purple-600 font-medium">
          <a href="#">⚡ AI Resume Builder</a>
          <a href="#">✅ Resume Checker</a>
          <a href="#">⚡ Resume Skills</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TemplatesSection
