import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Register, Login, DashboardLayout, Error, NhanDienMRI, Profile, History, DetailHistory } from './pages'
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { action as NhanDienMRIAction } from "./pages/NhanDienMRI";
import { loader as HistoryLoader } from "./pages/History";
import { action as deleteHistoryAction } from './pages/DeleteHistory';
import { action as profileAction } from "./pages/Profile";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
}

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction
      },
      {
        path: 'dashboard',
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <NhanDienMRI />,
            action: NhanDienMRIAction
          },
          {
            path: 'history',
            element: <History />,
            loader: HistoryLoader
          },

          {
            path: 'profile',
            element: <Profile />,
            action: profileAction,
          },
          {
            path: 'detail-history/:id',
            element: <DetailHistory />,

          },
          {
            path: 'delete-history/:id',
            action: deleteHistoryAction
          },
        ],
      },

    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />
};
export default App; 