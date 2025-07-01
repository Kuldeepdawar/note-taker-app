import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import axios from "axios";
import NoteCard from "../components/NoteCard";

const HomePages = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/notes");
        console.log(response.data);
        setNotes(response.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}

        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <div>
                <NoteCard key={note._id} note={note} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePages;
