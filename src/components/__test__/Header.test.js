import { render } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
    // Load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    
    console.warn(header)
    const logo = header.getAllByTestId("logo")
        expect(logo[0].src).toBe("http://localhost/dummy.png")
});


// jest does not understand jsx fo install @babel/preset-react
["@babel/preset-react", {"runtine": "automatic"}]
//runtine mean a place where your run, so automatic means (now running in jsdom ) sp take runtime automatically


/*another error: reading png image as javascript
create a mock image in dummyLogo.js - export default "dummy.png"
in jest.config.js : modulenameMapper: {"\\.(png|jpg|svg)": "../mocks/dummyLogo.js"}
*/

/* another error we using redux in header.js but here we dont have Provider*/

/* another error We using Link in Header.js but here not router
createBrowserRouter not wotk in jsdom its for actual browser
so import StaticRouter from react-router-dom/server
*/

/* In header cariable we got now our fiber node which is a virtual dom object
*/

test("Online status should be online on rendering header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const onlineStatus = header.getByTestId("online-status")
    expect(onlineStatus.innerHTML).toBe("online")
})


test("cart should have 0 items on rendering header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const cart  = header.getByTestId("cart")
    expect(cart.innerHTML).toBe("Cart 0")
})