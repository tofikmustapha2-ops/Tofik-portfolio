import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

// API Contact & Messages In-Memory Store
interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  businessName?: string;
  serviceNeeded: string;
  message: string;
  createdAt: string;
  status: 'unread' | 'read' | 'replied';
}

const receivedMessages: ContactMessage[] = [
  {
    id: 'msg-1',
    fullName: 'Sample Client',
    email: 'client@example.com',
    businessName: 'Tamale Tech Hub',
    serviceNeeded: 'Business Website Design',
    message: 'Hello Mustapha! I need a modern website for our business in Tamale. Please contact me on WhatsApp.',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    status: 'unread',
  }
];

// API Contact Route for Handling Inquiries
app.post("/api/contact", (req, res) => {
  const { fullName, email, businessName, serviceNeeded, message } = req.body;

  if (!fullName || !email || !serviceNeeded || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields (Name, Email, Service Needed, and Message).",
    });
  }

  const newMessage: ContactMessage = {
    id: `msg-${Date.now()}`,
    fullName,
    email,
    businessName,
    serviceNeeded,
    message,
    createdAt: new Date().toISOString(),
    status: 'unread',
  };

  receivedMessages.unshift(newMessage);

  console.log("==========================================");
  console.log("NEW PORTFOLIO INQUIRY RECEIVED FOR ALOLO STUDIO:");
  console.log(`From: ${fullName} <${email}>`);
  console.log(`Business: ${businessName || "N/A"}`);
  console.log(`Service Requested: ${serviceNeeded}`);
  console.log(`Message: ${message}`);
  console.log("==========================================");

  return res.status(200).json({
    success: true,
    message: "Thank you! Your message has been sent successfully. I’ll get back to you soon.",
    messageData: newMessage,
  });
});

// GET all received messages for Inbox
app.get("/api/messages", (req, res) => {
  return res.json({
    success: true,
    messages: receivedMessages,
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
