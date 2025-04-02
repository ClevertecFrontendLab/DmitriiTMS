import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '~/components/Layout/Layout';
import HomePage from '~/pages/home-page/home-page';
import SecondCoursesPage from '~/pages/second-courses-page/second-courses-page';
// import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    // const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/secondcourses' element={<SecondCoursesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
