import { Outlet } from 'react-router';

import Header from '../Header/Header';

function Layout() {
    return (
        <>
            <Header />
            <div>
                <div>Navbar</div>
                <Outlet />
            </div>
            <div>Footer</div>
        </>
    );
}

export default Layout;
