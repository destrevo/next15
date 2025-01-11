import React from "react";
import { render } from "@testing-library/react";
import SearchBox from "../SearchBox";

describe("SearchBox", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchBox />);
    expect(asFragment()).toMatchSnapshot();
  });
});
