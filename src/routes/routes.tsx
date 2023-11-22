import RootLayout from "@/layout/RootLayout";
import Home from "@/views/Home/Home";
import Question from "@/views/Question/Question";
import Result from "@/views/Result/Result";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/question/:questionId" element={<Question />} />
      <Route path="/result" element={<Result />} />
    </Route>
  )
);

export default router;
