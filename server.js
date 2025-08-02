import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mongoose from "mongoose";
import geoip from "geoip-lite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3002;

// Optional: Trust proxy if behind Nginx or similar
app.set("trust proxy", true);

// Connect to MongoDB
mongoose.connect("mongodb+srv://r151149:r151149@cluster0.ecexy.mongodb.net/portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => console.log("MongoDB connected"));

// --- Visitor Schema ---
const visitorSchema = new mongoose.Schema({
  ip: { type: String, required: true, unique: true },
  visitCount: { type: Number, default: 1 },
  location: {
    country: String,
    region: String,
    city: String,
  },
  lastVisit: { type: Date, default: Date.now },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

// --- Tracking Middleware ---
const trackVisitor = async (req, res, next) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    const geo = geoip.lookup(ip) || {};

    const existing = await Visitor.findOne({ ip });

    if (existing) {
      existing.visitCount += 1;
      existing.lastVisit = new Date();
      await existing.save();
    } else {
      await Visitor.create({
        ip,
        location: {
          country: geo.country || "",
          region: geo.region || "",
          city: geo.city || "",
        },
      });
    }
  } catch (err) {
    console.error("Visitor tracking error:", err.message);
  }

  next();
};

// 🔥 Use tracking middleware before any route
app.use(trackVisitor);

// Serve static files
app.use(express.static(path.join(__dirname, "dist")));

// Handle SPA routing (all unmatched routes)
app.all("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
