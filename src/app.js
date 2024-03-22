import express from "express";
import userRouter from "./routes/usersRouter.js";
import productsRouter from "./routes/productsRouter.js";
import storesRouter from "./routes/storesRouter.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productsRouter);
app.use("/stores", storesRouter);

app.listen(PORT, () => console.log(`Server running. http://localhost:${PORT}`));

export default app;
