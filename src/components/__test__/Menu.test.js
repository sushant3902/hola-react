import { getByTestId, render, waitFor, fireEvent } from "@testing-library/react";
import store from "../../utils/store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
    return Promise.resolve(({
        json: () => {
            return Promise.resolve(MENU_DATA)
        }
    }))
})

test("Add items to cart", async () => {
    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(menu.getByTestId("menu-items")))
    const  menuBtn = menu.getAllByTestId("add-item-btn")

    fireEvent.click(menuBtn[0])
    const cart = menu.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart 1")
}) 