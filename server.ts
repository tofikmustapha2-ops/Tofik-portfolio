import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Contact Route for Handling Inquiries
  app.post("/api/contact", (req, res) => {
    const { fullName, email, businessName, serviceNeeded, message } = req.body;

    if (!fullName || !email || !serviceNeeded || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields (Name, Email, Service Needed, and Message).",
      });
    }

    console.log("==========================================");
    console.log("NEW PORTFOLIO INQUIRY RECEIVED FOR ALOLO STUDIO:");
    console.log(`From: ${fullName} <${email}>`);
    console.log(`Business: ${businessName || "N/A"}`);
    console.log(`Service Requested: ${serviceNeeded}`);
    console.log(`Message: ${message}`);
    console.log("==========================================");

    // Returns exact requested success confirmation message
    return res.status(200).json({
      success: true,
      message: "Thank you! Your message has been sent successfully. I’ll get back to you soon.",
    });
  });

  // Vite middleware for development vs production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Alolo Studio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
