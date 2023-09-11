import {render} from "@testing-library/react";
import Login from "./Login";
import React from "react";

test('scénario d exemple',function () {
    render(<Login title="Bonjour les gens"><div id="demo"></div></Login>)

    expect(1).toBe(1)
})
