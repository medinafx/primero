import { fromJS } from "immutable";

import { setupMountedComponent, expect } from "../../test";

import IndexFilters from "./component";
import MoreSection from "./components/more-section";

describe("<IndexFitlers>", () => {
  const state = fromJS({
    user: {
      filters: {
        cases: [
          {
            field_name: "filter1",
            name: "filter1",
            options: [{ id: "true", display_name: "Filter 1" }],
            type: "checkbox"
          }
        ]
      }
    }
  });

  const props = {
    recordType: "cases"
  };

  it("renders search bar", () => {
    const { component } = setupMountedComponent(IndexFilters, props, state);

    expect(component.exists("input#search-input")).to.be.true;
  });

  it("renders MoreSection filters", () => {
    const { component } = setupMountedComponent(IndexFilters, props, state);

    expect(component.find(MoreSection)).to.have.lengthOf(1);
  });
});