import { useState } from "react";
import { supabase } from "../services/supabase";

function FileUpload() {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) {
      alert("Select a file first");
      return;
    }

    const { data, error } = await supabase.storage
      .from("files")
      .upload(`${Date.now()}-${file.name}`, file);

    if (error) {
      alert(error.message);
    } else {
      alert("File uploaded successfully!");
      console.log(data);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={uploadFile}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-3"
      >
        Upload
      </button>
    </div>
  );
}

export default FileUpload;