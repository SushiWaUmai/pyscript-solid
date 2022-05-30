import { describe, expect, test } from "vitest";
import { render } from "solid-testing-library";
import { PyScript } from "../src/components/PyScript";

describe("<PyScript />", () => {
  test("renders", () => {
    const { baseElement, unmount } = render(() => <PyScript />);
    unmount();
  });
});
