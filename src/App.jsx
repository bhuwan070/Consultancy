import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ClientLayout from "../src/layouts/ClientLayout";
import Home from "./pages/landing/Home";
import About from "./pages/landing/About";
import Contact from "./pages/landing/Contact";
import StudyAbroad from "./pages/landing/study_abroad/StudyAbroad";
import Gallery from "./pages/landing/Gallery";
import Blogs from "./pages/landing/Blogs";
import StudyInUSA from "./pages/landing/study_abroad/study_countries/StudyInUSA";
import StudyInJapan from "./pages/landing/study_abroad/study_countries/StudyInJapan";
import StudyInUK from "./pages/landing/study_abroad/study_countries/StudyInUK";
import StudyInCanada from "./pages/landing/study_abroad/study_countries/StudyInCanada";
import TestPrepration from "./pages/landing/test_prep/TestPrepration";
import GMAT from "./pages/landing/test_prep/test_prep_services/GMAT";
import IELTS from "./pages/landing/test_prep/test_prep_services/IELTS.JSX";
import GRE from "./pages/landing/test_prep/test_prep_services/GRE.JSX";
import SAT from "./pages/landing/test_prep/test_prep_services/SAT.JSX";
import PTE from "./pages/landing/test_prep/test_prep_services/PTE.JSX";




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
        path: "/studyabroad/usa",
        element: <StudyInUSA />,
      },
      {
        path: "/studyabroad/japan",
        element: <StudyInJapan />,
      },
      {
        path: "/studyabroad/uk",
        element: <StudyInUK />,
      },
      {
        path: "/studyabroad/canada",
        element: <StudyInCanada />,
      },
      {
        path: "/testpreparation",
        element: <TestPrepration />,
      },
      {
        path: "/testpreparation/gmat",
        element: <GMAT />,
      },
      {
        path: "/testpreparation/gre",
        element: <GRE />,
      },
      {
        path: "/testpreparation/ielts",
        element: <IELTS />,
      },
      {
        path: "/testpreparation/sat",
        element: <SAT />,
      },
      {
        path: "/testpreparation/pte",
        element: <PTE />,
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
