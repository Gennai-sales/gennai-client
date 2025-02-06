import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
  return (
    <Routes>
      {/* Redirige / a /login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* Ruta de login */}
      <Route path="/login" element={<Login />} />
      
      {/* Aquí puedes agregar más rutas protegidas */}
      {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
    </Routes>
  )
}

export default App
