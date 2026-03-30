import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Página Principal");
});

export default router;
