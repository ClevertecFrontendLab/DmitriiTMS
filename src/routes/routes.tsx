import { Routes, Route } from "react-router-dom";

import { LayoutAuthPage } from "@pages/layouts/layout-auth-page";
import { LoginPage } from "@pages/login-page";
import { RegisterPage } from "@pages/register-page";
import { MainPage } from "@pages/main-page";
import { CalendarPage } from "@pages/calendar-page";
import { NotFoundPage } from "@pages/notFound-page";

import { LayoutMainPage } from "@pages/layouts/layout-main-page";
import { App } from "@components/App/App";
import { LayoutResultPage } from "@pages/layouts/layout-result-page";
import { ResultErrorLogin } from "@components/ResultErrorLogin/ResultErrorLogin";




export const routes = (
    <Routes>

        <Route path="/" element={<App/>}/>

        <Route path='/auth' element={<LayoutAuthPage />} >
            <Route index={true} element={<LoginPage />} />
            <Route path="registration" element={<RegisterPage />} />
        </Route>

        <Route path='/main' element={<LayoutMainPage />} >
            <Route index={true} element={<MainPage />} />
            <Route path="calendar" element={<CalendarPage />} />
        </Route>

        <Route path="/result" element={<LayoutResultPage/>} >
            <Route path="error-login" element={<ResultErrorLogin />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />

    </Routes>
);
