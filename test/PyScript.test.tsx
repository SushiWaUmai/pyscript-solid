import { describe, test } from "vitest";
import { render } from "solid-testing-library";
import { PyScript } from "../src";

describe("<PyScript />", () => {
  test("renders", () => {
    render(() => <PyScript />);
  });
});
