import React from "react";

function DraftItem({ draft, onEdit, onDelete }) {
  return (
    <div className="draft-item">
      <div className="draft-content">
        <p className="draft-text">
          {draft.content.length > 80
            ? `${draft.content.substring(0, 80)}...`
            : draft.content}
        </p>

        <p className="draft-platforms">
          Platforms: {draft.selectedPlatforms.join(", ")}
        </p>

        <small className="draft-date">
          Last Updated: {new Date(draft.updatedAt).toLocaleString()}
        </small>
      </div>

      <div className="draft-actions">
        <button onClick={() => {
            console.log("Editing draft with ID:", draft.id);
            onEdit(draft.id)}}>
          Edit
        </button>

        <button onClick={() => {
            console.log("Deleting draft with ID:", draft.id);
            onDelete(draft.id)}}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DraftItem;