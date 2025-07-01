import React from "react";
import { Routes, Route } from "react-router";
import HomePages from "./pages/HomePages";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
