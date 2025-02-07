const Input = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  onBlur,
  placeholder,
  error,
  touched,
  rightElement
}) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <label className="text-sm text-green-300">{label}</label>
        {rightElement}
      </div>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full px-3 py-2 rounded-xl backdrop-blur-sm border 
            ${touched && error ? 'border-red-500/50' : 'border-green-500/20'}
            focus:outline-none focus:border-green-500/50 text-white 
            placeholder-green-300/50 bg-black/20`}
          placeholder={placeholder}
        />
        {touched && error && (
          <div className="absolute -bottom-5 left-0 text-xs text-white/70">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
