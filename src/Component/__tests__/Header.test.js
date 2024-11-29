import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Header from "../Header";
import { Provider } from "react-redux";
import appstrore from "../../Utill/appStore"
import { BrowserRouter } from "react-router-dom";
it("It shoud load header componenet with login button",()=>{
render(
<BrowserRouter>
<Provider store={appstrore}>
<Header/>
</Provider>
</BrowserRouter>
)
const login=screen.getByRole("button",{name:"Login"})
expect(login).toBeInTheDocument();
})
test(" shoud load header componenet with Cart item 0",()=>{
    render(
    <BrowserRouter>
    <Provider store={appstrore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    const CartItem=screen.getByText(/Cart/)
    // 
    expect(CartItem).toBeInTheDocument();
    })
    it("It shoud load header componenet with  wether  its login button or logout",()=>{
        render(
        <BrowserRouter>
        <Provider store={appstrore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        )
        const login=screen.getByRole("button",{name:/Login/})
        fireEvent.click(login)
        const logout=screen.getByRole("button",{name:/Logout/})
        expect(logout).toBeInTheDocument();
        })