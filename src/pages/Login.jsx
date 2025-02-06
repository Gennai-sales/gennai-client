import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [isValid, setIsValid] = useState(false);

  const validateForm = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(data.email);
    const isPasswordValid = data.password.length >= 6;
    const areNamesValid = data.firstName.length > 0 && data.lastName.length > 0;
    setIsValid(isEmailValid && isPasswordValid && areNamesValid);
  };

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setFormData(newFormData);
    validateForm(newFormData);
  };

  return (
    <div className="min-h-screen w-screen flex bg-black relative overflow-hidden">
      {/* Detalles de fondo para móvil */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute top-10 left-5 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-5 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="flex flex-col md:flex-row w-full relative z-10">
        {/* Lado izquierdo - Mensajes (oculto en móvil) */}
        <div className="hidden md:flex md:w-1/2 p-6 md:p-12 flex-col justify-center space-y-6">
          <div className="bg-green-950/30 backdrop-blur-sm p-8 rounded-xl border border-green-900/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Impulsa tus ventas</h1>
            <p className="text-green-400 text-xl">Genera más ingresos con menos esfuerzo</p>
          </div>
          <div className="bg-green-950/30 backdrop-blur-sm p-8 rounded-xl border border-green-900/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Gestión Simple.</h2>
            <p className="text-green-400">Resultados Extraordinarios.</p>
          </div>
        </div>

        {/* Lado derecho - Formulario (centrado en móvil) */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-md bg-zinc-900/30 backdrop-blur-sm p-8 rounded-xl border border-green-900/50">
            {/* Logo pequeño solo visible en móvil */}
            <div className="block md:hidden mb-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Impulsa tus ventas</h3>
              <p className="text-green-400 text-sm">Genera ventas con clics</p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-2">Únete ahora</h2>
            <p className="text-gray-400 mb-8">Potencia tu negocio con nuestro CRM</p>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 border border-green-900/50 placeholder-gray-500"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 border border-green-900/50 placeholder-gray-500"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 border border-green-900/50 placeholder-gray-500"
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 border border-green-900/50 placeholder-gray-500"
              />

              <div 
                onClick={() => isValid && handleSubmit()}
                className={`w-full ${isValid ? 'bg-green-800 hover:bg-green-700 cursor-pointer' : 'bg-zinc-800 cursor-not-allowed'} 
                text-white py-3 px-4 rounded-lg text-center font-medium transition-colors duration-200 ease-in-out border border-green-900/50`}
              >
                Sign Up
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-black/40 transition-colors border border-green-900/50">
                  Google
                </button>
                <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-black/40 transition-colors border border-green-900/50">
                  Facebook
                </button>
              </div>

              <p className="text-center text-gray-400 mt-6">
                ¿Ya tienes una cuenta?{' '}
                <a href="#" className="text-green-500 hover:text-green-400">
                  Inicia sesión
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
