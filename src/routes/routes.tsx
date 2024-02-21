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
import { ResultSuccess } from "@components/ResultSuccess/ResultSuccess";
import { ResultUserErrorExist } from "@components/ResultUserErrorExist/ResultUserErrorExist";
import { ResultError } from "@components/ResultError/ResultError";
import { ConfirmEmail } from "@components/ConfirmEmail/ConfirmEmail";
import { ResultEmailNoExist } from "@components/ResultEmailNoExist/ResultEmailNoExist";
import { ResultErrorCheckEmail } from "@components/ResultErrorCheckEmail/ResultErrorCheckEmail";
import { ChangePassword } from "@components/ChangePassword/ChangePassword";
import { ResultChangePassword } from "@components/ResultChangePassword/ResultChangePassword";
import { ResultErrorChangePassword } from "@components/ResultErrorChangePassword/ResultErrorChangePassword";




export const routes = (
    <Routes>

        <Route path="/" element={<App/>}/>

        <Route path='/auth' element={<LayoutAuthPage />} >
            <Route index={true} element={<LoginPage />} />
            <Route path="registration" element={<RegisterPage />} />
        </Route>

        <Route path="/auth/confirm-email" element={<ConfirmEmail/>} />
        <Route path="/auth/change-password" element={<ChangePassword/>} />


        <Route path='/main' element={<LayoutMainPage />} >
            <Route index={true} element={<MainPage />} />
            <Route path="calendar" element={<CalendarPage />} />
        </Route>

        <Route path="/result" element={<LayoutResultPage/>} >
            <Route path="error-login" element={<ResultErrorLogin />} />
            <Route path="success" element={<ResultSuccess />} />
            <Route path="error-user-exist" element={<ResultUserErrorExist/>} />
            <Route path="error" element={<ResultError/>} />
            <Route path="error-check-email-no-exist" element={<ResultEmailNoExist/>} />
            <Route path="error-check-email" element={<ResultErrorCheckEmail/>} />
            <Route path="success-change-password" element={<ResultChangePassword/>} />
            <Route path="error-change-password" element={<ResultErrorChangePassword/>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />

    </Routes>
);
