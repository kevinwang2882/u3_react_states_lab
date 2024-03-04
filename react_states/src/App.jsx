

import {  Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import StateList from './components/StateList';
import StateDetail from './components/StateDetail';
import statesData from './components/states';
function App() {
  

  return (

    <div>
    <Header />
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/states" element={<StateList states={statesData.states} />} />
        <Route path="/states/:id" element={<StateDetail states={statesData.states} />} />
    </Routes>
</div>
  )
}

export default App
