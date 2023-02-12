import { getByTestId, render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom/server"
import { RESTAURANT_DATA } from "../../mocks/data";
import store from "../../utils/store"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA)
        }
    })
})

test("Restaurant should load on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => {
        return body.getByTestId("search-btn")
    })

    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(15)

})


test("search the restaurant on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => {
        return body.getByTestId("search-btn")
    })

    const input = body.getByTestId("search-input");
    fireEvent.change(input, {target: {
        value: "momo"
    }})

    const searchBtn = body.getByTestId("search-btn")
    fireEvent.click(searchBtn)

    const resList = body.getByTestId("res-list")
    expect(resList.children.length).toBe(1)

})

/* error: fetch in body.js as its provider by browser, jsdom dont have it


*/