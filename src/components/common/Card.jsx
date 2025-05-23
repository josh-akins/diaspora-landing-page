import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  title,
  description,
  icon,
  image,
  backgroundColor = 'bg-white',
  borderColor = 'border-transparent',
  shadowEffect = true,
  rounded = 'rounded-[20px]',
  className = '',
  children,
}) => {
  return (
    <div 
      className={`
        ${backgroundColor} 
        ${borderColor ? `border ${borderColor}` : ''} 
        ${shadowEffect ? 'shadow-md' : ''} 
        ${rounded} 
        overflow-hidden 
        ${className}
      `}
    >
      {icon && (
        <div className="p-6">
          <img src={icon} alt={title} className="w-12 h-12 mb-4" />
        </div>
      )}
      
      {image && (
        <div className="w-full">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      )}
      
      <div className="p-6">
        {title && <h3 className="text-[#1a3a4f] text-xl font-bold mb-2">{title}</h3>}
        {description && <p className="text-[#8b909a]">{description}</p>}
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  shadowEffect: PropTypes.bool,
  rounded: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;