import { platforms } from "../../data/platforms";
import PlatformCard from "./PlatformCard";

function PlatformSelector({
  selectedPlatforms,
  setSelectedPlatforms,
}) {
  const togglePlatform = (platformId) => {
    if (selectedPlatforms.includes(platformId)) {
      setSelectedPlatforms(
        selectedPlatforms.filter((id) => id !== platformId)
      );
    } else {
      setSelectedPlatforms([
        ...selectedPlatforms,
        platformId,
      ]);
    }
  };

  return (
    <div
      style={{
        marginBottom: "30px",
      }}
    >
      <h2>Select Platforms</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {platforms.map((platform) => (
          <PlatformCard
            key={platform.id}
            platform={platform}
            selected={selectedPlatforms.includes(platform.id)}
            onToggle={togglePlatform}
          />
        ))}
      </div>
    </div>
  );
}

export default PlatformSelector;