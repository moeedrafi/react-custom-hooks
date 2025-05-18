import { useState } from "react";

export default function useToggle(
  initialValue: boolean | string = true
): [boolean, (value?: boolean | string) => void] {
  const [on, setOn] = useState<boolean>(() => {
    if (typeof initialValue === "boolean") {
      return initialValue;
    }

    return Boolean(initialValue);
  });

  const toggle = (value?: boolean | string) => {
    if (typeof value === "boolean") {
      return setOn(value);
    }

    return setOn((prev) => !prev);
  };

  return [on, toggle];
}
