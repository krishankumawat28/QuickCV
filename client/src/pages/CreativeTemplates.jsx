import cr1 from '../assets/creativeTemplates/cr1.png'
import cr2 from '../assets/creativeTemplates/cr2.png'
import cr3 from '../assets/creativeTemplates/cr3.png'
import cr4 from '../assets/creativeTemplates/cr4.png'
import { useNavigate } from 'react-router-dom'

const CreativeTemplates = () => {
    const navigate = useNavigate();

    const handleTemplateClick = (id) => {
      navigate(`/resume/${id}`); // Redirect to Resume Editor Page
    };
    const templates = [
      { id: 1, name: "Creative" , desc : "This creative template showcases your header, making it eye-catching for recruiters and encouraging them to read on. It's versatile and can be applied to any industry." , image: cr1 },
      { id: 2, name: "Elegant",desc : "The top choice for 2023 among upper management, project managers, and product owners is this highly popular template." , image: cr2 },
      { id: 3, name: "Modern", desc : "This elegant template boasts a beautiful design and a compact, easy-to-read layout that emphasizes your strengths and accomplishments." , image: cr3 },
      { id: 4, name: "Double Column", desc : "The free two-column resume template is a popular choice for various roles, including programming and marketing." , image: cr4 }
    ];
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-center mt-15">Creative Resume Templates</h1>
      <p className="mt-5 ml-40 mr-30 justify-center">Create a professional, ATS-friendly resume in minutes! Choose from 10+ unique templates, optimize for job descriptions, and get instant formatting with our smart editor. Download in PDF and make your resume stand out!</p>
      </div>
      <div className=" ml-3 scroll-smooth py-10 overflow-y-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Select a Resume Template</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 ml-6">
        {templates.map((template) => (
          <div 
            key={template.id} 
            className="border bg-emerald-100 w-[400px] h-[600px] p-4  rounded-lg shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer mt-10"
            onClick={() => handleTemplateClick(template.id)}
          >
            <img src={template.image}
             alt={template.name} 
             className="w-[350px] h-[450px] pl-3 pb-4 rounded-3xl object-fill " />
            <p className="text-center  font-semibold">{template.name}</p>
            <p className='text'>{template.desc}</p>
   
          </div>
        ))}
      </div>
    </div>
    </div> 
  )
}

export default CreativeTemplates
