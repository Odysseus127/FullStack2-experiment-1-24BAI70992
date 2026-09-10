const STORAGE_KEY = "multiPlatformDrafts";


export const getDrafts = () => {
  const drafts = localStorage.getItem(STORAGE_KEY);
  return drafts ? JSON.parse(drafts) : [];
};


export const getDraftById = (id) => {
  const drafts = getDrafts();
  return drafts.find((draft) => draft.id === id) || null;
};


export const saveDraft = (draft) => {
  const drafts = getDrafts();

  const newDraft = {
    ...draft,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  drafts.push(newDraft);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));

  return newDraft;
};


export const updateDraft = (id, updatedDraft) => {
  const drafts = getDrafts();

  const index = drafts.findIndex((draft) => draft.id === id);

  if (index === -1) return null;

  drafts[index] = {
    ...drafts[index],
    ...updatedDraft,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));

  return drafts[index];
};


export const deleteDraft = (id) => {
  const drafts = getDrafts();

  const filteredDrafts = drafts.filter((draft) => draft.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredDrafts));

  return true;
};


export const clearDrafts = () => {
  localStorage.removeItem(STORAGE_KEY);
};