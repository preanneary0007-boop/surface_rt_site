import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: prompt
    });

    res.json({
      content: response.output[0].content[0].text
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ content: "Error from AI server" });
  }
});

app.get("/", (req, res) => {
  res.send("AI Backend Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
