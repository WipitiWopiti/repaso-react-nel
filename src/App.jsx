import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import TarjetaCandidato from './TarjetaCandidato.jsx'
import Directorio from './Directorio.jsx'
import PerfilCandidato from './PerflCandidato.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Directorio />} />
      <Route path="/candidato/:id" element={<PerfilCandidato />} />
    </Routes>
  )
}
export default App;
