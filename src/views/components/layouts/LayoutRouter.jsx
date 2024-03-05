import CustomContainer from "./Container"
import Navbar from "../navbar/default/Navbar"
import { Outlet } from "react-router-dom"

function Layout(props) {
    return (
        <>
            <Navbar />
            <CustomContainer>
                <Outlet />
            </CustomContainer>
        </>

)
}


export default Layout
