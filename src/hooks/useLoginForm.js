import { useState } from 'react';

export const useLoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      setIsLoading(true); // Activamos el loading
      // Simulamos una llamada a la API
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Formulario enviado:', formData);
      // Aquí iría tu lógica de autenticación real
    } catch (error) {
      setErrors({ submit: 'Error al iniciar sesión' });
    } finally {
      setIsLoading(false); // Desactivamos el loading
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpiamos los errores cuando el usuario escribe
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return {
    formData,
    errors,
    isLoading, // Aseguramos que isLoading se está pasando correctamente
    handleChange,
    handleSubmit
  };
};