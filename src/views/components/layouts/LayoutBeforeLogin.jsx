import CustomContainer from "./Container"
import { Outlet } from "react-router-dom"
import LoginNavbar from "../navbar/login/LoginNavbar"

const LayoutBeforeLogin = (props) => (
    <>
        <LoginNavbar />
        <CustomContainer>
            <Outlet />
        </CustomContainer>
    </>
)

export default LayoutBeforeLogin
