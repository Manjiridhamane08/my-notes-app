"use client";

import { useState } from "react";

export default function Home() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = () => {
    if (note.trim() !== "") {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  return (
    <main className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      <div className="mb-4 flex gap-2">
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note"
          className="border p-2 rounded flex-1"
        />
        <button
          onClick={addNote}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </div>
      <ul className="list-disc pl-6">
        {notes.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </main>
  );
}
