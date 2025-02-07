const Button = ({ onClick, disabled, children, className = '' }) => {
  const baseStyles = `w-full py-2.5 px-4 rounded-xl text-center text-sm font-medium 
    transition-colors duration-200 ease-in-out`;
  
  const validStyles = disabled
    ? 'bg-zinc-800 cursor-not-allowed'
    : 'bg-green-600 hover:bg-green-700 cursor-pointer';

  return (
    <div 
      onClick={!disabled ? onClick : undefined}
      className={`${baseStyles} ${validStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
