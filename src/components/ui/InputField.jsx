import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type = 'text',
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  className = '',
  required = false,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label 
          htmlFor={name} 
          className="block text-gray-700 text-sm font-medium mb-2"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} 
          rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3da647] 
          focus:border-[#3da647] ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${className}`}
        required={required}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default InputField;