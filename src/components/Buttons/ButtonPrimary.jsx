import React from 'react';

const ButtonPrimary = ({btnValue, display, width, margin}) => {
    return (
      <button className={`${display} ${width} ${margin} bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 cursor-pointer`}>
        {btnValue}
      </button>
    );
};

export default ButtonPrimary;