import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const App: any = () => {


    const location = useLocation();

    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      console.log(queryParams);

      const accessToken = queryParams.get('accessToken');
      if(accessToken) {
        localStorage.setItem('token', accessToken);
      }
    },[location.search])


    return <Navigate to='/auth' replace />
}
