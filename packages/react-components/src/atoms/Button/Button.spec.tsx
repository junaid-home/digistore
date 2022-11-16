import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

test("render with right text content", async () => {
  const BUTTON_TEXT = "ABC";

  const { container } = render(<Button label={BUTTON_TEXT} />);

  expect(container.textContent).toBe(BUTTON_TEXT);
});
