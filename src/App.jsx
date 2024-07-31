import { initFlowbite } from 'flowbite'
import { useEffect,useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  useEffect(() => {
    initFlowbite();
  }, [])

  const [progress, setProgress] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Routes>
        {/* Give unique keys to each route to re-render the component */}
        <Route path="/" element={<News setProgress={setProgress} key="general" category="general" />} />
        <Route path="world/*" element={<News setProgress={setProgress} key="world" category="world" />} />
        <Route path="nation/*" element={<News setProgress={setProgress} key="nation" category="nation" />} />
        <Route path="business/*" element={<News setProgress={setProgress} key="business" category="business" />} />
        <Route path="entertainment/*" element={<News setProgress={setProgress} key="entertainment" category="entertainment" />} />
        <Route path="sports/*" element={<News setProgress={setProgress} key="sports" category="sports" />} />
        <Route path="technology/*" element={<News setProgress={setProgress} key="technology" category="technology" />} />
        <Route path="science/*" element={<News setProgress={setProgress} key="science" category="science" />} />
        <Route path="health/*" element={<News setProgress={setProgress} key="health" category="health" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App