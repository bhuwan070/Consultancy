import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ClientLayout from "../src/layouts/ClientLayout";
import Home from "./pages/landing/Home";
import About from "./pages/landing/About";
import Contact from "./pages/landing/Contact";
import StudyAbroad from "./pages/landing/study_abroad/StudyAbroad";
import TestPrepration from "./pages/landing/TestPrepration";
import Gallery from "./pages/landing/Gallery";
import Blogs from "./pages/landing/Blogs";
import StudyInUSA from "./pages/landing/study_abroad/study_countries/StudyInUSA";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/studyabroad",
        element: <StudyAbroad />,
      },
      {
        path: "/about/usa",
        element: <StudyInUSA />,
      },
      {
        path: "/testpreparation",
        element: <TestPrepration />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
