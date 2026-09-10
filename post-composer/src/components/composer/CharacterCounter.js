function CharacterCounter({ count }) {
  return (
    <div
      style={{
        textAlign: "right",
        marginTop: "8px",
        color: "#f7efef",
        fontSize: "14px",
      }}
    >
      Characters: <strong>{count}</strong>
    </div>
  );
}

export default CharacterCounter;