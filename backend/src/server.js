const cors = require("cors");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/order", async (req, res) => {
  const {} = req.param;

  return res.json({});
});

app.post("/order", async (req, res) => {
  const { customerEmail, paid, filled, total } = req.body;

  const result = await prisma.order.create({
    data: {
      customerEmail,
      paid,
      filled,
      total,
    },
  });

  return res.json(result);
});

const server = app.listen(5000, () =>
  console.log(`🚀 Server ready at: http://localhost:5000 `)
);
