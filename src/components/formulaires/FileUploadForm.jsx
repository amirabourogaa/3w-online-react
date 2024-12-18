import React, { useState } from "react";

function FileUploadForm() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || "");
  };

  return (
    <form>
      <label>
        Téléchargez un fichier :
        <input type="file" onChange={handleFileChange} />
      </label>
      {fileName && <p>Fichier sélectionné : {fileName}</p>}
    </form>
  );
}

export default FileUploadForm;
