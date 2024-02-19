import React from 'react';

interface HeadingProps {
  heading: string;
  className?: string | null;
}

const Heading: React.FC<HeadingProps> = ({ heading, className = '' }) => {
  return (
    <h1
      className={`text-primary-headingColor font-bold capitalize font-inter  text-center ${className} text-2xl md:text-3xl lg:text-3xl xl:text-4xl`}
    >
      {heading}
    </h1>
  );
};

export default Heading;
