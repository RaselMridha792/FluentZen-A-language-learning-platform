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
import MyTutorials from "../pages/myTutorials/MyTutorials";
import UpdateTutorial from "../pages/UpdateTutorial/UpdateTutorial";
import MyBookedTutors from "../pages/my booked tutor/MyBookedTutors";
import PrivetRoute from "../privetRoutes/PrivetRoute";

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
        path: "/resetPassword",
        element: <ResetPassword></ResetPassword>,
      },
      {
        path: "/add-tutorials",
        element: (
          <PrivetRoute>
            <AddTutorials></AddTutorials>
          </PrivetRoute>
        ),
      },
      {
        path: "/find-tutors",
        element: <FindTutors></FindTutors>,
      },
      {
        path: "/tutor/details/:id",
        element: (
          <PrivetRoute>
            <TutorialDetails></TutorialDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-sandy.vercel.app/tutor/details/${params.id}`
          ),
      },
      {
        path: "/my-tutorials",
        element: (
          <PrivetRoute>
            <MyTutorials></MyTutorials>
          </PrivetRoute>
        ),
      },
      {
        path: "/update-tutorial/:id",
        element: (
          <PrivetRoute>
            <UpdateTutorial></UpdateTutorial>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-sandy.vercel.app/tutor/details/${params.id}`
          ),
      },
      {
        path: "/my-booked-tutor/:user",
        element: (
          <PrivetRoute>
            {" "}
            <MyBookedTutors></MyBookedTutors>
          </PrivetRoute>
        ),
      },
      {
        path: "/find-tutors/:id",
        element: <FindTutors></FindTutors>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-sandy.vercel.app/find-tutors/${params.id}`
          ),
      },
    ],
  },
]);
