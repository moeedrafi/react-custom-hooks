import { useState } from "react";

export default function usePrevious(value: string) {
  const [current, setCurrent] = useState(value);
  const [previous, setPrevious] = useState<string | null>(null);

  if (value !== current) {
    setPrevious(current);
    setCurrent(value);
  }

  return previous;
}
