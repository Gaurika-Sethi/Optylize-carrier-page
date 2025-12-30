import React from 'react';

import { FiArrowUpRight } from 'react-icons/fi'; // Icon for the external link arrow

const TalkToUsButton = ({ onClick, href, target }) => {

  // Define base classes for the button

  const buttonBaseClasses = `

    inline-flex items-center justify-center 

    px-6 py-3 rounded-full 

    text-white font-semibold text-lg 

    transition duration-300 ease-in-out 

    focus:outline-none focus:ring-4 focus:ring-opacity-50

  `;

  // Define custom styles for the gradient background and shadow

  const gradientStyle = {

    background: 'linear-gradient(90deg, #9333ea 0%, #d8b4fe 100%)', // Purple gradient

    boxShadow: '0 4px 10px rgba(147, 51, 234, 0.4)', // Subtle shadow

  };

  // Define focus ring color to match the purple gradient

  const focusRingStyle = {

    focusRingColor: 'rgba(147, 51, 234, 0.6)',

  };

  // If an href is provided, render an anchor tag (link)

  if (href) {

    return (

      <a

        href={href}

        target={target || '_self'} // Use _blank for external links

        className={`${buttonBaseClasses} focus:ring-[${focusRingStyle.focusRingColor}]`}

        style={gradientStyle}

      >

        Talk to us

        <FiArrowUpRight className="w-5 h-5 ml-2" />

      </a>

    );

  }

  // If no href is provided, render a standard button

  return (

    <button

      onClick={onClick}

      type="button" // Default type

      className={`${buttonBaseClasses} focus:ring-[${focusRingStyle.focusRingColor}]`}

      style={gradientStyle}

    >

      Talk to us

      <FiArrowUpRight className="w-5 h-5 ml-2" />

    </button>

  );

};

export default TalkToUsButton;










