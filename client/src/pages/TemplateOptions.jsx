import { useNavigate } from "react-router-dom";
import res1 from '../assets/res1.png'
import res2 from '../assets/res2.png'
// import { useParams } from "react-router-dom";
// import { useState } from "react";


// Templates Data (Can be stored in a separate file later)
const templates = [
  { id: 1, name: "Simple Resume", image: res1 },
  { id: 2, name: "Professional Resume", image: res2 },
//   { id: 3, name: "Modern Resume", image: "/images/template3.png" },
//   { id: 4, name: "Creative Resume", image: "/images/template4.png" }
];

const TemplateOptions = () => {
  const navigate = useNavigate();

  const handleTemplateClick = (id) => {
    navigate(`/resume/${id}`); // Redirect to Resume Editor Page
  };

  return (
    <div className="max-w ml-3  mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Select a Resume Template</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-80">
        {templates.map((template) => (
          <div 
            key={template.id} 
            className="border bg-emerald-100 w-[400px] h-[500px] p-4  rounded-lg shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer"
            onClick={() => handleTemplateClick(template.id)}
          >
            <img src={template.image}
             alt={template.name} 
             className="w-[350px] h-[450px] pl-3 pb-4 rounded-3xl object-fill " />
            <p className="text-center mt-2 font-semibold">{template.name}</p>
   
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateOptions ;