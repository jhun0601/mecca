import React from "react";
import { shallow } from "enzyme";
import DashboardPage from "../../components/DashboardPage";

test("Should render Dashboard correctly", () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
