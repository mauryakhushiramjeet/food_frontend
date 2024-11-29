import { render,screen } from "@testing-library/react"
import Body from "../Body"
import Data from"../mocks/mockrestListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
 global.fetch=jest.fn(()=>{
    return Promise.resolve(()=>{
        json:()=>{
            return Promise.resolve(Data )
        }
    })
 })
it("shoud render the body componenet",async()=>{
    await act(async ()=>render(
        <BrowserRouter>
    <Body/>
    </BrowserRouter>)
    )
    const searchBtn=screen.getByRole("button",{name:"Search"})
    expect(searchBtn).toBeInTheDocument()
     
})