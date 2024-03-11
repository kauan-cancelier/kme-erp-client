import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../views/pages/login/Login"
import Layout from "../views/components/layouts/LayoutRouter"
import LayoutBeforeLogin from "../views/components/layouts/LayoutBeforeLogin"

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


function ContentRouter() {
    const BRAND_ENPOINT = "/brands"
    const CATEGORY_ENDPOINT = "/categories"
    const USER_ENDPOINT = "/users"


    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route element={<LayoutBeforeLogin />}>
                    <Route path="/login" element={<Login />} />
                    <Route path={`${USER_ENDPOINT}/new`} element={<NewUser />} />
                </Route>

                <Route element={<Layout />}>
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
                    <Route path={`${USER_ENDPOINT}/edit/:id`} element={<EditUser />} />
                </Route>
                <Route>
                    <Route path={`/page_not_found`} element={<PageNotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ContentRouter
