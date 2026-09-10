import React from "react";
import DraftItem from "./DraftItems";

function DraftList({ drafts, onEdit, onDelete }) {
  return (
    <div className="draft-list">
      <h2>Draft Management(Saved Drafts)</h2>

      {drafts.length === 0 ? (
        <p>No drafts available.</p>
      ) : (
        drafts.map((draft) => (
          <DraftItem
            key={draft.id}
            draft={draft}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default DraftList;