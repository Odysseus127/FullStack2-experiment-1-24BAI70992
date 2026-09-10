import { platforms } from "../data/platforms";

export function validatePost(post,selectedPlatforms) {
  return selectedPlatforms.map((platformId) => {
    const platform = platforms.find((p) => p.id === platformId);

    const errors = [];

    if (!platform) {
      return {
        platform: platformId,
        valid: false,
        errors: ["Platform not found"],
      };
    }

    if (post.length > platform.maxCharacters) {
      errors.push(
        `Maximum ${platform.maxCharacters} characters allowed.`
      );
    }
    

    return {
      platform: platform.name,
      valid: errors.length === 0,
      errors,
    };
  });
}