import { Outlet } from 'react-router';

function Layout() {
    return (
        <>
            <div>Header</div>
            <div>
                <div>Navbar</div>
                <Outlet />
            </div>
            <div>Footer</div>
        </>
    );
}

export default Layout;
