import React from 'react';

function Loader() {
  return (
    <div className="d-flex bg-dar flex-column vh-100 gap-4 w-100 align-items-center justify-content-center">
      <h1 className="text-whit">Loading...</h1>
      <span className="loader" />
    </div>
  );
}

export default Loader;
