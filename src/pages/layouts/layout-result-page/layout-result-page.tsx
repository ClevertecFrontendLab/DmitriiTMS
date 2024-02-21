import { Navigate, Outlet } from "react-router-dom";

import styles from './layout-result-page.module.css';
import { useSelector } from "react-redux";
import { RootState } from "@redux/configure-store";



export const LayoutResultPage: React.FC = () => {

    const ErrorStatusCode = useSelector((state: RootState) => state.user.errors.statusCode);
    const ErrorStatusRecover = useSelector((state: RootState) => state.recover.errors.statusCode);
    const jwtLocalToken = localStorage.getItem('token');
    const jwtsessionToken = sessionStorage.getItem('token');

    const isAuth = jwtLocalToken || jwtsessionToken;

    return (
        (ErrorStatusRecover || ErrorStatusCode) && !isAuth?
            <div className={styles.wrapperResult}>
                <Outlet />
            </div>
            : <Navigate to="/auth" replace />

    )
}
