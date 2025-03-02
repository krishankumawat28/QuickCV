import { Outlet } from 'react-router-dom' ;
import Topper from './components/Topper' ;
//import Footer from '../components/Footer' ;
import { Toaster } from 'react-hot-toast';
import './App.css'


function App() {
                                                                                 
  return (
    <>
    
    <main className='min-h-[78vh]'>
      <Outlet />
    </main>
    
    <Toaster />
    </>
  )
}

export default App