import { useState } from "react";
import { cn } from "./lib/utils";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={cn("text-red-100")}>Tekblog</h1>
    </>
  );
}

export default App;
