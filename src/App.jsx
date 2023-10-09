import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main_page from './components/main_page'
import Set_appoiment from './components/set_appoiment'
import './App.css'


import './App.css'

function App() {  

  return (
    <BrowserRouter> 

      <Routes>  
        <Route path="/" element={<Main_page />} />        
        <Route path="/doctor:id" element={<Main_page />} />        
        <Route path="/set_appoinment" element={<Set_appoiment  />} />   
        

      </Routes>    

    </BrowserRouter>
  )

}

export default App
