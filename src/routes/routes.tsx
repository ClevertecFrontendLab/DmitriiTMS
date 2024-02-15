import { Routes, Route } from "react-router-dom";

import { LayoutAuthPage } from "@pages/layouts/layout-auth-page";
import { LoginPage } from "@pages/login-page";
import { RegisterPage } from "@pages/register-page";
import { MainPage } from "@pages/main-page";
import { CalendarPage } from "@pages/calendar-page";
import { NotFoundPage } from "@pages/notFound-page";

import { LayoutMainPage } from "@pages/layouts/layout-main-page/layout-main-page";


export const routes = (
    <Routes>
        <Route path='/auth' element={<LayoutAuthPage/>} >
            <Route index={true} element={<LoginPage/>}/>
            <Route path="registration" element={<RegisterPage/>}/>
        </Route>
        <Route path='/main' element={<LayoutMainPage/>} >
            <Route index={true} element={<MainPage/>}/>
            <Route path="calendar" element={<CalendarPage/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
);