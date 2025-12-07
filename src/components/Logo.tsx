import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        src="/img.png"
        alt="咸鱼 TV"
        className="w-8 h-8 mr-2"
      />
      <span className="text-xl font-bold freeok-logo">咸鱼 TV</span>
    </div>
  );
};

export default Logo;
