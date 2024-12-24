import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homepages/HomePage";
import SignIn from "../pages/authentication/SignIn";
import SignUp from "../pages/authentication/SignUp";
import ErrorPage from "../components/layouts/ErrorPage";
import App from "../App";
import ResetPassword from "../pages/authentication/ResetPassword";
import AddTutorials from "../pages/dashboard/AddTutorials";
import FindTutors from "../pages/FindTutors/FindTutors";
import TutorialDetails from "../pages/tutorDetails/TutorialDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: '/resetPassword',
        element: <ResetPassword></ResetPassword>
      },
      {
        path: "/add-tutorials",
        element: <AddTutorials></AddTutorials>
      },
      {
        path: "/find-tutors",
        element: <FindTutors></FindTutors>
      },
      {
        path: "/tutor/details/:id",
        element: <TutorialDetails></TutorialDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/tutor/details/${params.id}`)
      }
    ],
  },
]);
