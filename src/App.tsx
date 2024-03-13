import { Suspense } from "react";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import InitiativesPage from "./pages/InitiativesPage";
import ProjectDetailsPage from "./components/initiatives/ProjectDetailsPage";
import InvolvementPage from "./pages/InvolvementPage";
import InvolvementDetailPage from "./pages/InvolvementDetailPage";

import "./App.css";
import LoadingSpinner from "./components/common/LoadingSpinner";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ClientLayout from "./layout/ClientLayout";
import ContactPage from "./pages/ContactPage";

import PublicationPage from "./pages/PublicationPage";
import PublicationDetailPage from "./pages/PublicationDetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/initiatives",
          element: <InitiativesPage />,
        },
        {
          path: "/initiatives/:id",
          element: <ProjectDetailsPage />,
        },

        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/involvement",
          element: <InvolvementPage />,
        },
        {
          path: "/involvement/details/:id",
          element: <InvolvementDetailPage />,
        },
      ],
    },
    {
      path: "*",
      element: (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
            <a href="/" className="text-blue-500 hover:underline">
              Go back to home
            </a>
          </div>
        </div>
      ),
    },
  ]);
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
