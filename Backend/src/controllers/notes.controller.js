export function getAllNotes(req, res) {
  res.status(200).json({ message: "fetech all data" });
}

export function creteNote(req, res) {
  res.status(201).json({ message: "New post created" });
}

export function updateNote(req, res) {
  res.status(200).json({ message: "Updated notes" });
}

export function deleteNote(req, res) {
  res.status(200).json({ message: "Notes deleted successfully" });
}
