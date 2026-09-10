function ValidationItem({ result }) {
  return (
    <div
      className={`validation-item ${
        result.valid ? "valid" : "invalid"
      }`}
    >
      <strong>{result.platform}</strong>
      <span>{result.message}</span>
    </div>
  );
}

export default ValidationItem;