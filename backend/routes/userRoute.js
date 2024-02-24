import express from "express";

// router object
const router = express.Router();

// this is our get method.
// An api endpoint that returns a short list of items
router.get('/list', (req,res) => {
  const list = ["M", "E", "R", "N"];
  res.json(list);
  console.log('Sent list of items');
});

export default router;
