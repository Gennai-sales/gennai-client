import { useLoginForm } from '../hooks/useLoginForm';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const Login = () => {
  const {
    formData,
    isValid,
    touched,
    handleChange,
    handleBlur,
    getFieldStatus,
    handleSubmit
  } = useLoginForm();

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-black relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Contenedor principal más compacto */}
      <div className="w-full max-w-6xl mx-4 grid md:grid-cols-5 gap-6 relative z-10">
        {/* Login compacto y centrado */}
        <div className="md:col-span-2 w-full flex items-center">
          <div className="w-full p-6 bg-green-900/20 backdrop-blur-lg rounded-3xl border border-green-500/20">
            <div className="w-10 h-10 bg-green-500/20 backdrop-blur-sm rounded-xl border border-green-500/20 mb-4"></div>
            
            <h2 className="text-xl font-light text-white">Get Started</h2>
            <p className="text-green-300 text-sm mb-6">Welcome to the future of payments</p>

            <div className="space-y-8">
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                placeholder="hi@example.com"
                error={getFieldStatus('email') === 'invalid' ? 'Formato de email inválido' : ''}
                touched={touched.email}
              />

              <Input
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={() => handleBlur('password')}
                placeholder="••••••••"
                error={getFieldStatus('password') === 'invalid' ? 'Mínimo 6 caracteres' : ''}
                touched={touched.password}
                rightElement={
                  <a href="#" className="text-xs text-green-400 hover:text-green-300">
                    Forgot?
                  </a>
                }
              />

              <Button
                onClick={handleSubmit}
                disabled={!isValid}
              >
                {isValid ? 'Iniciar Sesión' : 'Complete los campos'}
              </Button>
            </div>
          </div>
        </div>

        {/* Lado derecho - Panel informativo */}
        <div className="hidden md:flex md:col-span-3 flex-col justify-between p-6 bg-green-900/20 backdrop-blur-lg rounded-3xl border border-green-500/20">
          <div className="mb-6">
            <h1 className="text-4xl font-light text-white mb-2 leading-tight">
              Automatiza<br />
              Tus Ventas<br />
              <span className="text-green-400">Sin Complicaciones</span>
            </h1>
            <p className="text-lg text-green-300">Genera más ingresos mientras ahorras tiempo</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-500/10 backdrop-blur-sm rounded-2xl border border-green-500/20">
              <div className="text-3xl font-light text-white mb-1">8hrs/día</div>
              <div className="text-xs text-green-300">Tiempo Ahorrado en Gestión</div>
            </div>
            <div className="p-4 bg-green-500/10 backdrop-blur-sm rounded-2xl border border-green-500/20">
              <div className="text-3xl font-light text-white mb-1">+65%</div>
              <div className="text-xs text-green-300">Conversión en Automático</div>
            </div>
          </div>

          {/* Nueva sección de beneficios más compacta */}
          <div className="my-4 grid grid-cols-3 gap-3">
            <div className="p-3 bg-green-500/10 backdrop-blur-sm rounded-xl border border-green-500/20">
              <div className="text-xl text-white mb-1">24/7</div>
              <div className="text-xs text-green-300">Ventas Automáticas</div>
            </div>
            <div className="p-3 bg-green-500/10 backdrop-blur-sm rounded-xl border border-green-500/20">
              <div className="text-xl text-white mb-1">1-Click</div>
              <div className="text-xs text-green-300">Gestión de Ads</div>
            </div>
            <div className="p-3 bg-green-500/10 backdrop-blur-sm rounded-xl border border-green-500/20">
              <div className="text-xl text-white mb-1">+300%</div>
              <div className="text-xs text-green-300">ROI en Ads</div>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-500/20 to-green-400/10 backdrop-blur-sm rounded-2xl border border-green-500/20">
            <div className="flex flex-col gap-1">
              <div className="text-lg font-light text-white mb-2">Sistema de Ventas Inteligente:</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  <span>Seguimiento Automático</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  <span>Optimización de Ads</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  <span>Análisis Predictivo</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  <span>Reportes en Tiempo Real</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
