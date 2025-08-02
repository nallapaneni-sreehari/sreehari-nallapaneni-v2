import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mongoose from "mongoose";
import fetch from "node-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3002;

// Optional: Trust proxy if behind Nginx or similar
app.set("trust proxy", true);

// Connect to MongoDB
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
  lastVisit: { type: Date, default: Date.now },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

// --- Tracking Middleware ---
const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return req.ip || req.socket.remoteAddress;
};

const trackVisitor = async (req, res, next) => {
  try {
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket.remoteAddress;

    const existing = await Visitor.findOne({ ip });

    if (existing) {
      existing.visitCount += 1;
      existing.lastVisit = new Date();
      await existing.save();
    } else {
      const geoRes = await fetch(`https://ipwho.is/${ip}`);
      const geo = await geoRes.json();

      console.log(`geo :: `, geo);
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
  console.log(`got req`);
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

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
