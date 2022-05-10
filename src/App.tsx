import { Route, Routes } from "react-router-dom";
import HomePage from './app/containers/HomePage';
import { IssueDetailsPage } from './app/containers/IssueDetailsPage';
import Layout from "./app/containers/Layout";
import NotFoundPage from './app/containers/NotFoundPage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/issue/:id" element={<IssueDetailsPage />} /> */}
        <Route path="/issue/:id" element={<IssueDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
