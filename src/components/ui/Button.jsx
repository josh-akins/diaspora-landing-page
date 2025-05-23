import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  disabled = false, 
  type = 'button', 
  ...props 
}) => {
  const baseClasses = 'font-medium rounded transition-colors duration-200 focus:outline-none';
  
  const variants = {
    primary: 'bg-[#3da647] text-white hover:bg-[#228821] disabled:bg-gray-400',
    secondary: 'bg-[#e6ffe8] text-[#3da647] border border-[#3da647] hover:bg-[#d7f9d9] disabled:bg-gray-100',
    outline: 'border border-[#8b909a] text-[#1a3a4f] hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400',
  };
  
  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'cursor-not-allowed' : ''}`;
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      className={buttonClasses} 
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;