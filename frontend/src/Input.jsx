const Input = ({
  label = "",
  name = "",
  type = "text",
  placeholder = "",
  className = "",
  onChange = (e) => {},
  value = "",
  required = true,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-medium mx-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`bg-gray-50 w-[300px] p-2.5
        text-gray-900 text-sm placeholder:text-gray-500
        border-2 border-gray-300 rounded-lg focus:border-blue-800 focus:ring-blue-500 focus:outline-none ${className}`}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
