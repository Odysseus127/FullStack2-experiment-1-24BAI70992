import { useState, useEffect } from "react";
import {
  getDrafts,
  saveDraft,
  updateDraft,
  deleteDraft,
  getDraftById,
} from "./utils/draftStorage";


import Header from "./components/layout/Header";
import Container from "./components/layout/Container";
import PlatformSelector from "./components/common/PlatformSelector";
import Composer from "./components/composer/Composer";
import ValidationPanel from "./components/validation/Validationpanel";
import ActionButtons from "./components/composer/ActionButtons";
import DraftList from "./components/drafts/DraftList";



function App() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [post, setPost]=useState("");

  const [drafts, setDrafts] = useState([]);
  const [editingDraftId, setEditingDraftId] = useState(null);

  useEffect(() => {
    setDrafts(getDrafts());
  }, []);

  const handleSaveDraft = () => {
    const draftData = {
    content: post,
    selectedPlatforms,
  };

  if (editingDraftId) {
    updateDraft(editingDraftId, draftData);
    alert("Draft updated successfully!");
    setEditingDraftId(null);
  } else {
    saveDraft(draftData);
    alert("Draft saved successfully!");
  }

  // Reload drafts from localStorage
  setDrafts(getDrafts());
};

  const handleEditDraft = (id) => {
    console.log("Editing draft with ID:", id);
    const draft = getDraftById(id);
    console.log(draft);
    
    if (!draft) {
    alert("Draft not found.");
    return;
    }
    setPost(draft.content);
    setSelectedPlatforms(draft.selectedPlatforms);
    setEditingDraftId(id);
};


  const handleDeleteDraft = (id) => {
    const confirmDelete = window.confirm(
    "Are you sure you want to delete this draft?"
    );

    if (!confirmDelete) {
    return;
    }

    deleteDraft(id);

    setDrafts(getDrafts());

    
    if (editingDraftId === id) {
      setEditingDraftId(null);
      setPost("");
      setSelectedPlatforms([]);
    }

    alert("Draft deleted successfully!");
};

  return (
   <>
   <Header />
   <Container>
     <PlatformSelector
       selectedPlatforms={selectedPlatforms}
       setSelectedPlatforms={setSelectedPlatforms}
     />

     <Composer
       post={post}
       setPost={setPost}
     />

     <ValidationPanel
        selectedPlatforms={selectedPlatforms}
        post={post}
     />

     <ActionButtons
        post={post}
        selectedPlatforms={selectedPlatforms}
        onSaveDraft={handleSaveDraft}
      />
      <DraftList
        drafts={drafts}
        onEdit={handleEditDraft}
        onDelete={handleDeleteDraft}
      />
   </Container> 
  </>
  );
}

export default App;
