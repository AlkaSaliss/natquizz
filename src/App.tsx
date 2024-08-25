// import { invoke } from "@tauri-apps/api/core"
// import "./input.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import PlayQuizPage from './components/PlayQuizPage'
import SummaryPage from './components/SummaryPage'
import Navbar from './components/Navbar'
import FreeStylePage from './components/FreeStylePage'
import FreeStyleQuizPage from './components/FreeStyleQuizPage'
import FreeStylePage120QA from './components/FreeStylePage120QA'
import FreeStyleQuizPage120QA from './components/FreeStyleQuizPage120QA'
import LoginContextProvider from './contexts/login-context'


const App = () => {
  return (
    <Router>
      <LoginContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/freestyle" element={<FreeStylePage />} />
          <Route path="/freestyle/:quizId" element={<FreeStyleQuizPage />} />
          
          <Route path="/freestyle120" element={<FreeStylePage120QA />} />
          <Route path="/freestyle120/:quizId" element={<FreeStyleQuizPage120QA />} />
          
          <Route path="/quiz/:quizId" element={<PlayQuizPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </LoginContextProvider>
    </Router>

  )
}

export default App