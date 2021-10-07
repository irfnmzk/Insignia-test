const cors = require("cors");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/order", async (req, res) => {
  const {} = req.param;

  const orders = await prisma.order.findMany();

  return res.json(orders);
});

app.post("/order", async (req, res) => {
  const { customerEmail, fulfillmentStatus, paymentStatus, total } = req.body;

  console.log(req.body);

  const result = await prisma.order.create({
    data: {
      customerEmail: customerEmail,
      paid: paymentStatus,
      filled: fulfillmentStatus,
      total,
    },
  });

  return res.json(result);
});

const server = app.listen(5000, () =>
  console.log(`🚀 Server ready at: http://localhost:5000 `)
);
