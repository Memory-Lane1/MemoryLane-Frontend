import React from "react";


import UploadFiles from "./upload-files.component";

function Home() {
  return (
    <div className="upload-component" style={{ width: "600px" }}>
      <div className="mb-3 txt">
        <h3>Restore Your Old Photos</h3>
        <h4>Upload Your Old Photos Here!</h4>
      </div>

      <UploadFiles />
    </div>
  );
}

export default Home;