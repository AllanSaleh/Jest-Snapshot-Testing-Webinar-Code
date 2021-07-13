import React from "react"
import renderer from 'react-test-renderer'
import AlertComponent from "./AlertComponent"

test("properly renders the Alert Component", ()=>{
    const tree = renderer.create(<AlertComponent />).toJSON();
    expect(tree).toMatchSnapshot();
})