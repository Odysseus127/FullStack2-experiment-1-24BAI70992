import ValidationItem from "./ValidationItem";
import { validatePost } from "../../utils/validator";

function ValidationPanel({
  selectedPlatforms,
  post,
}) {
  if (selectedPlatforms.length === 0) {
    return (
      <div className="validation-panel">
        <h3>Validation</h3>
        <p className="validation-empty">
          Select at least one platform.
        </p>
      </div>
    );
  }

  const results = validatePost(post, selectedPlatforms);

  return (
    <div className="validation-panel">
      <h3>Validation</h3>

      <div className="validation-list">
        {results.map((result) => (
          <ValidationItem
            key={result.platform}
            result={result}
          />
        ))}
      </div>
    </div>
  );
}

export default ValidationPanel;