const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.post("/recommendation", async (req, res) => {
  const { age, income, dependents, risk } = req.body;

  if (
    age === undefined ||
    age === "" ||
    income === undefined ||
    income === "" ||
    dependents === undefined ||
    dependents === "" ||
    risk === undefined ||
    risk === ""
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  let recommendation = "";
  let explanation = "";

  if (age < 40 && risk === "high") {
    recommendation = "Term Life $500,000 for 20 years";
    explanation = "You are young with high risk tolerance. Term life offers large coverage for a lower cost.";
  } else if (age >= 40 || risk === "low") {
    recommendation = "Whole Life $250,000";
    explanation = "Whole life gives permanent coverage and builds cash value over time.";
  } else {
    recommendation = "Term Life $250,000 for 10 years";
    explanation = "Balanced coverage for medium risk and income.";
  }

  try {
    const submission = await prisma.userSubmission.create({
      data: {
        age: parseInt(age),
        income: parseInt(income),
        dependents: parseInt(dependents),
        riskTolerance: risk,
        recommendation,
        explanation,
      },
    });

    res.json({ recommendation, explanation });
  } catch (err) {
    console.error("Prisma error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on ${port}`));
