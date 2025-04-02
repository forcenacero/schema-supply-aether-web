
import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[300px]">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-2 border-schema-lightgray rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-2 border-t-schema-black border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
