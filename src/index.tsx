import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from '@redux/configure-store';
import { MainPage, CalendarPage, NotFoundPage } from './pages';

import 'antd/dist/antd.css'
import 'normalize.css';
import './index.css';
import { ContentComponent } from '@components/ContentComponent/ContentComponent';


const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<ContentComponent/>}>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/calendar' element={<CalendarPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
