import NewTopper from "../components/NewTopper";

import { useParams } from "react-router-dom";
import cr1 from "../ResumeForms/cr1";
import cr2 from "../ResumeForms/cr1";

const templates = {
    1: cr1,
    2: cr2
  };
const EditResume = () => {
  const { id } = useParams();
  const SelectedTemplate = templates[id];
  
  return (
    <div className="h-screen">
    
      <div className="w-full fixed top-0 bg-white shadow-md z-50">
        <NewTopper />
      </div>

    
      <div className="flex pt-16">
        
       
        <div className="mt-8 fixed left-0 top-16 w-[158px] bg-gray-200 h-[calc(100vh-64px)] ml-5 rounded-2xl"></div>

       
        <div className="mt-8 ml-[210px] bg-white-200 w-[1000px] h-[1000px] shadow-2xl rounded-2xl">
        <SelectedTemplate />
        </div>
      
      </div>
    </div>
  );
};

export default EditResume;

