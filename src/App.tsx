import "./App.css";

import { useState } from "react";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

export default function App() {
  const [count, setCount] = useState(0);

  useDocumentTitle(`Clicked ${count} times`);

  return (
    <section>
      <h1>useDocumentTitle</h1>
      <h6>
        <a
          className="link"
          href="https://6vmc1n.csb.app/"
          target="_blank"
          rel="noreferrer"
        >
          Try in a new tab
        </a>
      </h6>
      <button className="primary" onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
    </section>
  );
}
