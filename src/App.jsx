import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import ExercisesContainer from './Components/exercisesContainer/ExercisesContainer';
import Upload from './Components/upload/Upload';
import ExercisesPage from './Components/exercisesPage/ExercisesPage';
import ANV from './Components/ANV/ANV';




function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ExercisesContainer />} />
        <Route path='/:ANV' element={<ANV />} /> 
        <Route path='/:ANV/:batchNumber?' element={<ExercisesPage />} /> 
        <Route path="/upload" element={<Upload />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
