import React from "react";
import { render } from "@testing-library/react";

import Button from "./button";

test("render with right text content", async () => {
  const BUTTON_TEXT = "ABC";

  const { container } = render(<Button>BUTTON_TEXT</Button>);

  expect(container.textContent).toBe(BUTTON_TEXT);
});
