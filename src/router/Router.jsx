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
import NewUser from "../views/pages/user/New"


function ContentRouter() {
    const BRAND_ENPOINT = "/brands"
    const CATEGORY_ENPOINT = "/categories"

    return (
        <BrowserRouter>
            <Routes>

                <Route element={<LayoutBeforeLogin />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/users/new" element={<NewUser />} />
                </Route>

                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    {/* Brands */}
                    <Route path={`${BRAND_ENPOINT}`} element={<HomeBrand />} />
                    <Route path={`${BRAND_ENPOINT}/new`} element={<NewBrand />} />
                    <Route path={`${BRAND_ENPOINT}/:id`} element={<ShowBrand />} />
                    <Route path={`${BRAND_ENPOINT}/edit/:id`} element={<EditBrand />} />

                    {/* Category */}
                    <Route path={`${CATEGORY_ENPOINT}`} element={<CategoryIndex />} />
                    <Route path={`${CATEGORY_ENPOINT}/new`} element={<CategoryNew />} />
                    <Route path={`${CATEGORY_ENPOINT}/:id`} element={<CategoryShow />} />
                    <Route path={`${CATEGORY_ENPOINT}/edit/:id`} element={<CategoryEdit />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ContentRouter
