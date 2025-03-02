import { HiOutlineLightningBolt, HiOutlineTemplate, HiOutlineDocumentText } from "react-icons/hi";
//import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Topper from "../components/Topper";
import { useNavigate } from "react-router-dom";
import cr1 from '../assets/creativeTemplates/cr1.png'
import cr2 from '../assets/creativeTemplates/cr2.png'
import cr3 from '../assets/creativeTemplates/cr3.png'
import cr4 from '../assets/creativeTemplates/cr4.png'


const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
const navigate = useNavigate() ;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    arrows: true,
  };

  const templates = [
    { id: 1, name: "Creative" , desc : "This creative template showcases your header, making it eye-catching for recruiters and encouraging them to read on. It's versatile and can be applied to any industry." , image: cr1 },
    { id: 2, name: "Elegant",desc : "The top choice for 2023 among upper management, project managers, and product owners is this highly popular template." , image: cr2 },
    { id: 3, name: "Modern", desc : "This elegant template boasts a beautiful design and a compact, easy-to-read layout that emphasizes your strengths and accomplishments." , image: cr3 },
    { id: 4, name: "Double Column", desc : "The free two-column resume template is a popular choice for various roles, including programming and marketing." , image: cr4 }
  ];
  const handleTemplatesOptions = () => {
    navigate("/TemplateOptions") ;
  }

  return (
    <div className="font-sans">
      <Topper />
      {/* Hero Section */}
      <section className="h-130 bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="w-100 justify-start container mx-auto px-6 text-center">
      
          <h1 className=" w-100 text-5xl font-bold mb-6 ">Get hired faster with a standout resume</h1>
          <p className="text-xl text-gray-600 mb-8">AI-powered resume builder with expert phrases and smart formatting</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 cursor-pointer" onClick={handleTemplatesOptions}>
            Create Your Resume 
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className=" py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <HiOutlineLightningBolt className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">AI-Powered Builder</h3>
              <p className="text-gray-600">Smart suggestions and content optimization</p>
            </div>
            <div className="text-center">
              <HiOutlineTemplate className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Professional Templates</h3>
              <p className="text-gray-600">Modern, recruiter-approved designs</p>
            </div>
            <div className="text-center">
              <HiOutlineDocumentText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ATS Optimization</h3>
              <p className="text-gray-600">Beat applicant tracking systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <div className="w-[40%] mx-auto ">
      <Slider {...settings}>
        {templates.map((template, index) => (
          <div 
            key={index} 
            className="relative p-2"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img 
              src={template.image} 
              alt={`Slide ${index + 1}`} 
              className={`rounded-lg shadow-md transition-transform duration-300 ${hoveredIndex === index ? "scale-105" : ""}`}
            />
            {hoveredIndex === index && (
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded opacity-100 transition-opacity duration-300">
                Use This Template
              </button>
            )}
          </div>
        ))}
      </Slider>
    </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12 mt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">enhancv</h4>
              <p className="text-gray-400">Making job search easier since 2015</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Product</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white">Templates</a></li>
                <li><a href="/" className="hover:text-white">Examples</a></li>
                <li><a href="/" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white">About</a></li>
                <li><a href="/" className="hover:text-white">Blog</a></li>
                <li><a href="/" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Resources</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white">Help Center</a></li>
                <li><a href="/" className="hover:text-white">Contact</a></li>
                <li><a href="/" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2023 enhancv. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

