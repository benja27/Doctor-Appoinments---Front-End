import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main_page from './components/main_page'
import './App.css'


import './App.css'

function App() {  

  return (
    <BrowserRouter> 

      <Routes>  
        <Route path="/" element={<Main_page />} />        
      </Routes>    

    </BrowserRouter>
  )

}

export default App
