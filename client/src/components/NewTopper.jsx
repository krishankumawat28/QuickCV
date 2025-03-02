
import { IoIosArrowDown } from "react-icons/io";
import TemplatesSection from "./TemplatesSection";
import { useState  } from "react";
import GuidesSection from './GuidesSection' ;
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Topper = () => {
  const user = useSelector((state)=> state?.user)
  const [showTemplates, setShowTemplates] = useState(false);
  const [ShowGuides, setShowGuides] = useState(false);
  const handleCloseshowTemplates = ()=>{
    setShowTemplates(false) ;
}
const navigate = useNavigate() ;
const  handleCloseshowGuides = ()=>{
  setShowGuides(false) ;
}
const handleSignUp = ()=>{
  if(!user._id){
    navigate("/login")
    return
}

navigate("/userProfile")
}
return (
    <header className=" resize-none lg:h-15  lg-shadow-md sticky top-0 z-40 flex items-center gap-50 px-6 bg-white border border-black-600">
    <div className="text-2xl font-bold text-gray-800 cursor-pointer">QuickCV</div>
    <nav className="hidden lg:flex gap-20 text-2xl ">
   <div  onMouseLeave={() => setShowTemplates(false)}
          onMouseEnter={() => setShowTemplates(true)}> <button  className="hover:text-blue-600 flex gap-2 items-center cursor-pointer" > Templates <IoIosArrowDown/></button>
    {
                                                      showTemplates && (
                                                          <div className='absolute right-0 top-12'>
                                                              <div className='  left-0 m-7 bg-white rounded  z-50 p-4 min-w-52 lg:shadow-lg'>
                                                                  <TemplatesSection onmouseleave={handleCloseshowTemplates}/>
                                                              </div>
                                                          </div>
                                                      )
                                                  }   </div>
 <div  onMouseLeave={() => setShowGuides(false)}
          onMouseEnter={() => setShowGuides(true)}> <button  className="hover:text-blue-600 flex gap-2 items-center cursor-pointer" > Templates <IoIosArrowDown/></button>
    {
                                                      ShowGuides && (
                                                          <div className='absolute right-0 top-12'>
                                                              <div className='bg-white rounded p-4 min-w-52 lg:shadow-lg'>
                                                                  <GuidesSection onmouseleave={handleCloseshowGuides}/>
                                                              </div>
                                                          </div>
                                                      )
                                                  }   </div>  
        <button  className="hover:text-blue-600 flex gap-2 items-center cursor-pointer">Pricing <IoIosArrowDown/></button>   
   </nav>
    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 cursor-pointer ml-auto" onClick={handleSignUp}>
      My Resumes
    </button>
  </header>
)
}

export default Topper