import { describe, expect, test } from "vitest";
import { render } from "solid-testing-library";
import { PyScript } from "../src";

describe("<PyScript />", () => {
  test("renders", () => {
    const { unmount, container } = render(() => <PyScript />);
    expect(container.innerHTML).toMatchSnapshot();
    unmount();
  });

  test("has attributes", () => {
    const { unmount, container } = render(() => <PyScript src="test.py" />);
    expect(container.innerHTML).toMatchSnapshot();
    unmount();
  });

  test("has children", () => {
    const { unmount, container } = render(() => (
      <PyScript>print("Hello World!")</PyScript>
    ));
    expect(container.innerHTML).toMatchSnapshot();
    unmount();
  });
});
