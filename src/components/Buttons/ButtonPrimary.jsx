import React from 'react';

const ButtonPrimary = ({btnValue, className=''}) => {
    return (
      <button
        className={`bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 cursor-pointer ${className}`}
      >
        {btnValue}
      </button>
    );
};

export default ButtonPrimary;