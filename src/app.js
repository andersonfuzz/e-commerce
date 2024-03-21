import express from "express";
import router from "./routes/usersRouter.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server running. http://localhost:${PORT}`));

export default app;
