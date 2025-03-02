import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Register from '../pages/Register' ;
import Login from "../pages/Login";
import OtpVerification from "../pages/Otpverification";
//import TemplateOptions from "../pages/TemplateOptions";
import CreativeTemplates from '../pages/CreativeTemplates'
import { useParams } from "react-router-dom";
import EditResume from "../pages/EditResume";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "register",
                element : <Register />
            },
            {
                path : "login",
                element : <Login />
            },
            {
                path : "EmailVerfication",
                element : <OtpVerification />
            },
            {
                path : "CreativeTemplates",
                element : <CreativeTemplates/>,
                
            },
            {
                path : "resume/:id" ,
            element : <EditResume />
            }
          
           
           
        ]
        }])

export default router