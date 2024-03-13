import CustomContainer from "./Container"
import Navbar from "../navbar/default/Navbar"
import { Outlet } from "react-router-dom"
import AccessDenied from "../../pages/errors/AccessDenied"

function Layout() {
    if (sessionStorage.getItem('token')) {
        return (
            <>
            <Navbar />
            <CustomContainer>
                <Outlet />
            </CustomContainer>
        </>
        )
    } else {
        return (
            <AccessDenied/>
        )
    }
}


export default Layout
