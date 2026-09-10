function MediaUploader({
  title,
  accept,
  files,
  setFiles,
}) {

  const handleUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);

    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (index) => {
    const updated = [...files];

    updated.splice(index, 1);

    setFiles(updated);
  };

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <h3>{title}</h3>

      <input
        type="file"
        accept={accept}
        multiple
        onChange={handleUpload}
      />

      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {file.name}

              <button
                onClick={() => removeFile(index)}
                style={{
                  marginLeft: "10px",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MediaUploader;