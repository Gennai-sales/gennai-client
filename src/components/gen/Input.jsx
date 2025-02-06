import { forwardRef } from 'react';

const Input = forwardRef(({ 
  icon: Icon,
  type = 'text',
  error,
  ...props 
}, ref) => {
  return (
    <div className="relative">
      {Icon && (
        <Icon 
          className="absolute top-3 left-3 text-green-600" 
          aria-hidden="true"
        />
      )}
      <input
        ref={ref}
        type={type}
        className={`
          w-full pl-10 pr-4 py-2 
          border border-gray-200 rounded-lg 
          focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 
          transition-colors
          ${error ? 'border-red-500' : ''}
        `}
        {...props}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1">
          {error}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
