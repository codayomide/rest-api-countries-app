import React from "react";

const Loading = () => {
  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="border-lmBgLightGray dark:border-dmBgVeryDarkBlue h-16 w-16 animate-spin rounded-full border-8 border-t-dmBgVeryDarkBlue dark:border-t-neutralWhite" />
    </div>
  );
};

export default Loading;
