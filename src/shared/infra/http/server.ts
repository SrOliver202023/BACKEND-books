import { app } from "./app";

const port = 5555;

app.listen(port, () =>
  console.log(`Server is running in http://localhost:${port}`)
);
