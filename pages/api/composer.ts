import type { NextApiRequest, NextApiResponse } from "next";

// Farcaster Mini Apps'ın GET ve POST isteklerini yakalayıp
// metadata ve açılacak URL'yi dönüyoruz.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json({
      type: "composer",
      name: "OnchainGM",
      icon: "browser",
      description: "onchaingm.com",
      aboutUrl: "https://onchaingm.vercel.app/",
      imageUrl: "https://onchaingm.com/gm-icon.png",
      action: { type: "post" }
    });
  }
  if (req.method === "POST") {
    return res.status(200).json({
      type: "form",
      title: "OnchainGM",
      url: "https://onchaingm.vercel.app/"
    });
  }
  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
