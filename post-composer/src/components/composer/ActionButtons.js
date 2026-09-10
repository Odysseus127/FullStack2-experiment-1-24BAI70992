function ActionButtons({
  post,
  selectedPlatforms,
  onSaveDraft,
}) {
  
  const handlePublish = () => {
    if (selectedPlatforms.length === 0) {
      alert("Please select at least one platform.");
      return;
    }

    if (post.trim() === "") {
      alert("Post cannot be empty.");
      return;
    }

    const publishData = {
      post,
      selectedPlatforms,
    };

    console.log("Publishing...");
    console.log(publishData);

    alert("Publishing process started!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "15px",
        marginTop: "30px",
      }}
    >
      <button
        onClick={onSaveDraft}
        style={{
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: "#6c757d",
          color: "#fff",
          fontSize: "16px",
        }}
      >
        Save Draft
      </button>

      <button
        onClick={handlePublish}
        style={{
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: "#b4d2eb",
          color: "#fff",
          fontSize: "16px",
        }}
      >
        Publish
      </button>
    </div>
  );
}

export default ActionButtons;