import CharacterCounter from "./CharacterCounter";

function Composer({
  post,
  setPost,
}) {

  return (
    <div
      style={{
        marginTop: "30px",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h2>Compose Post</h2>

      <textarea
        value={post}
        onChange={(e) => setPost(e.target.value)}
        rows={8}
        placeholder="What's on your mind?"
        style={{
          width: "100%",
          resize: "none",
          padding: "11px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          boxSizing: "border-box",
        }}
      />

      <CharacterCounter
        count={post.length}
      />

    </div>
  );
}

export default Composer;