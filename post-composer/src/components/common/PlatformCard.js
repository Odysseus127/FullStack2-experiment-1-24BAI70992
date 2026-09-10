function PlatformCard({ platform, selected, onToggle }) {
  return (
    <div
      onClick={() => onToggle(platform.id)}
      style={{
        cursor: "pointer",
        border: selected ? "3px solid #2563EB" : "2px solid #d1d5db",
        borderRadius: "10px",
        padding: "12px",
        width: "110px",
        textAlign: "center",
        backgroundColor: selected ? "#471492" : "#62ecde",
        transition: "0.2s",
      }}
    >
      <h3
        style={{
          margin: 0,
          color: platform.color,
        }}
      >
        {platform.name}
      </h3>

      <p
        style={{
          marginTop: "1px",
          fontSize: "12px",
          color: "#555",
        }}
      >
        {platform.maxCharacters} Characters
      </p>
    </div>
  );
}

export default PlatformCard;