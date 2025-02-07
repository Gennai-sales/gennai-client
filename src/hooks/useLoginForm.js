import { useState } from 'react';

export const useLoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });

  const validateForm = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(data.email);
    const isPasswordValid = data.password.length >= 6;
    setIsValid(isEmailValid && isPasswordValid);
  };

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setFormData(newFormData);
    validateForm(newFormData);
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const getFieldStatus = (field) => {
    if (!touched[field]) return '';
    
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(formData.email) ? 'valid' : 'invalid';
    }
    
    if (field === 'password') {
      return formData.password.length >= 6 ? 'valid' : 'invalid';
    }
  };

  const handleSubmit = () => {
    if (isValid) {
      console.log('Formulario válido:', formData);
      // Aquí iría la lógica de autenticación
    }
  };

  return {
    formData,
    isValid,
    touched,
    handleChange,
    handleBlur,
    getFieldStatus,
    handleSubmit
  };
};
