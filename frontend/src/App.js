import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import TeamMatches from "./components/TeamMatches";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/team/:id" element={<TeamMatches />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
