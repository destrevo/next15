import React from "react";
import { render } from "@testing-library/react";
import SideNav from "../Header";

describe("SideNav", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SideNav />);
    expect(asFragment()).toMatchSnapshot();
  });
});
