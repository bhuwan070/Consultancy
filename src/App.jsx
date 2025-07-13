import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ClientLayout from "../src/layouts/ClientLayout";
import Home from "./pages/landing/Home";
import About from "./pages/landing/About";
import Contact from "./pages/landing/Contact";
import StudyAbrod from "./pages/landing/StudyAbrod";
import TestPrepration from "./pages/landing/TestPrepration";
import Gallery from "./pages/landing/Gallery";
import Blogs from "./pages/landing/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    childern: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "studyabroad",
        element: <StudyAbrod />,
      },
      {
        path: "testpreparation",
        element: <TestPrepration />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "blogs",
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
