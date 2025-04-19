import { useEffect } from "react";
import { createFarcasterApp } from "@farcaster/frame-sdk";

const Home = () => {
  useEffect(() => {
    createFarcasterApp({
      name: "OnChainGM",
      url: "https://onchaingm.com",
      metadataUrl: "/api/composer"
    });
  }, []);

  return (
    <div className="w-full h-screen">
      <iframe
        src="https://onchaingm.com"
        title="Onchain GM"
        className="w-full h-full border-none rounded-2xl"
      />
    </div>
  );
};

export default Home;
