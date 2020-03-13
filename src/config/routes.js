import LayoutAdmin from '../layouts/layoutAdmin';

import Admin from '../pages/Admin';

import Signin from '../pages/Admin/Signin';

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path:"/admin",
                component: Admin,
                exact:true
            },
            {
                path:"/admin/login",
                component: Signin,
                exact:true
            }
        ]
    }
]

export default routes;