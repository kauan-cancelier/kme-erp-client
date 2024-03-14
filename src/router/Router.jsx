import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../views/pages/login/Login"
import Layout from "../views/components/layouts/LayoutRouter"

import Home from "../views/pages/home/Home"
import HomeBrand from "../views/pages/brands/Index"
import NewBrand from "../views/pages/brands/New"
import ShowBrand from "../views/pages/brands/Show"
import EditBrand from "../views/pages/brands/Edit"
import CategoryIndex from "../views/pages/categories/Index"
import CategoryNew from "../views/pages/categories/New"
import CategoryShow from "../views/pages/categories/Show"
import CategoryEdit from "../views/pages/categories/Edit"
import NewUser from "../views/pages/users/New"
import HomeUser from "../views/pages/users/Index"
import ShowUser from "../views/pages/users/Show"
import EditUser from "../views/pages/users/Edit"
import PageNotFound from "../views/pages/errors/PageNotFound"
import AccessDenied from "../views/pages/errors/AccessDenied"
import loggedIn from "./Logged"
import RolesIndex from "../views/pages/roles/Index"
import Redirect from "../views/pages/login/Redirect"
import RoleShow from "../views/pages/roles/Show"
import RoleNew from "../views/pages/roles/New"
import RoleEdit from "../views/pages/roles/Edit"


function ContentRouter() {
    const BRAND_ENPOINT = "/brands"
    const CATEGORY_ENDPOINT = "/categories"
    const USER_ENDPOINT = "/users"
    const ROLE_ENDPOINT = "/roles"


    return (
        <BrowserRouter >
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/" element={loggedIn ? <Home /> : <Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/redirect" element={<Redirect />} /> {/* TODO arrumar essa gambs */}



                <Route element={loggedIn() ?<Layout /> : <AccessDenied/>}>
                    {/* Brands */}
                    <Route path={`${BRAND_ENPOINT}`} element={<HomeBrand />} />
                    <Route path={`${BRAND_ENPOINT}/new`} element={<NewBrand />} />
                    <Route path={`${BRAND_ENPOINT}/:id`} element={<ShowBrand />} />
                    <Route path={`${BRAND_ENPOINT}/edit/:id`} element={<EditBrand />} />

                    {/* Category */}
                    <Route path={`${CATEGORY_ENDPOINT}`} element={<CategoryIndex />} />
                    <Route path={`${CATEGORY_ENDPOINT}/new`} element={<CategoryNew />} />
                    <Route path={`${CATEGORY_ENDPOINT}/:id`} element={<CategoryShow />} />
                    <Route path={`${CATEGORY_ENDPOINT}/edit/:id`} element={<CategoryEdit />} />

                    {/* User */}
                    <Route path={`${USER_ENDPOINT}`} element={<HomeUser />} />
                    <Route path={`${USER_ENDPOINT}/:id`} element={<ShowUser />} />
                    <Route path={`${USER_ENDPOINT}/new`} element={<NewUser />} />
                    <Route path={`${USER_ENDPOINT}/edit/:id`} element={<EditUser />} />

                    {/* Roles */}
                    <Route path={`${ROLE_ENDPOINT}`} element={<RolesIndex />} />
                    <Route path={`${ROLE_ENDPOINT}/:id`} element={<RoleShow />} />
                    <Route path={`${ROLE_ENDPOINT}/new`} element={<RoleNew />} />
                    <Route path={`${ROLE_ENDPOINT}/edit/:id`} element={<RoleEdit />} />

                </Route>
                <Route>
                    <Route path={`/page_not_found`} element={<PageNotFound/>}/>
                    <Route path={`/access_denied`} element={<AccessDenied/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ContentRouter
