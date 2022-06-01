import { describe, expect, test } from "vitest";
import { render } from "solid-testing-library";
import { PyEnv } from "../src";

describe("<PyEnv />", () => {
  test("renders", () => {
    const { unmount, container } = render(() => <PyEnv>- numpy</PyEnv>);
    expect(container.innerHTML).toMatchSnapshot();
    unmount();
  });
});
