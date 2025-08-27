import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mongoose from "mongoose";
import fetch from "node-fetch";
import { UAParser } from "ua-parser-js";   // 👈 new import

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3002;

app.set("trust proxy", true);

// --- MongoDB connection ---
mongoose.connect(
  "mongodb+srv://r151149:r151149@cluster0.ecexy.mongodb.net/portfolio",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.once("open", () => console.log("MongoDB connected"));

// --- Visitor Schema ---
const visitorSchema = new mongoose.Schema({
  ip: { type: String, required: true, unique: true },
  visitCount: { type: Number, default: 1 },
  location: {
    country: String,
    region: String,
    city: String,
    network: String,
  },
  device: {
    type: String, // desktop / mobile / tablet / bot
  },
  os: {
    name: String,
    version: String,
  },
  browser: {
    name: String,
    version: String,
  },
  isBot: { type: Boolean, default: false },
  lastVisit: { type: Date, default: Date.now },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

// --- Tracking Middleware ---
const trackVisitor = async (req, res, next) => {
  try {
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket.remoteAddress;

    const uaString = req.headers["user-agent"] || "";
    const parser = new UAParser(uaString);
    const ua = parser.getResult();

    // Detect bots
    const isBot = /bot|crawler|spider|crawling|curl|wget|postman|python/i.test(
      uaString
    );

    const deviceType =
      isBot
        ? "bot"
        : ua.device.type || "desktop"; // ua.device.type can be 'mobile', 'tablet', etc.

    const existing = await Visitor.findOne({ ip });

    if (existing) {
      existing.visitCount += 1;
      existing.lastVisit = new Date();
      await existing.save();
    } else {
      const geoRes = await fetch(`https://ipwho.is/${ip}`);
      const geo = await geoRes.json();

      const location = geo.success
        ? {
            country: geo.country || "",
            region: geo.region || "",
            city: geo.city || "",
            network: geo?.connection?.isp,
          }
        : {};

      await Visitor.create({
        ip,
        location,
        device: deviceType,
        os: {
          name: ua.os.name || "",
          version: ua.os.version || "",
        },
        browser: {
          name: ua.browser.name || "",
          version: ua.browser.version || "",
        },
        isBot,
      });
    }
  } catch (err) {
    console.error("Visitor tracking error:", err.message);
  }

  next();
};

// 🔥 Use tracking middleware before any route
app.get("/", trackVisitor);

app.get("/get-visitors", async (req, res) => {
  try {
    const users = await Visitor.find().sort({ lastVisit: -1 });
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch visitors" });
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, "dist")));

// Handle SPA routing (all unmatched routes)
app.all("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
