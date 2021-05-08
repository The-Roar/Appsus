import { gNotesData } from '../data/notes.js';
export const keepService = {
    query,
    getNoteById,
    addNote,
    removeNoteById,
    updateNoteById,
    pinNoteToggleById,
};

function query(filterBy) {
    if (filterBy) {
        const { type } = filterBy;
        const txt = filterBy.txt.toLowerCase();
        let filteredNotes = gNotesData;
        if (txt.length) {
            filteredNotes = filteredNotes.filter(note => {
                let isIncludesTxt = false;
                let noteTitle = note.content.title.toLowerCase();
                switch (note.type) {
                    case "txt":
                        let noteTxt = note.content.txt.toLowerCase();
                        isIncludesTxt = noteTxt.includes(txt);
                        break;
                    case "todos":
                        isIncludesTxt = note.content.todos.some(todo => {
                            let todoTxt = todo.txt.toLocaleLowerCase();
                            todoTxt.includes(txt);
                        });
                        break;
                }
                return (noteTitle.includes(txt) || isIncludesTxt);
            });
        }
        if (type !== "all") {
            filteredNotes = filteredNotes.filter(note => note.type === type);
        }
        return Promise.resolve(filteredNotes);
    }
    return Promise.resolve(gNotesData);
}

function getNoteById(noteId) {
    return Promise.resolve(gNotesData.find(note => note.id === noteId));
}
function removeNoteById(noteId) {
    const noteIdx = _findNoteIdxById(noteId);
    gNotesData.splice(noteIdx, 1);
    return Promise.resolve(); //Trigger user msg for success
}
function addNote(note) {
    if (!note) return Promise.reject('No note was recieved '); // Trigger user msg for failure
    gNotesData.push(note);
    return Promise.resolve(); //Trigger user msg for success
}

function updateNoteById(updatedNote) {
    const noteIdx = _findNoteIdxById(updatedNote.id);
    gNotesData[noteIdx] = updatedNote;
    return Promise.resolve(); //Trigger user msg for success
}

function pinNoteToggleById(noteId) {
    const noteIdx = gNotesData.findIndex(note => note.id === noteId);
    gNotesData[noteIdx].isPinned = !gNotesData[noteIdx].isPinned;
    return Promise.resolve(); //Trigger user msg for success
}

function _findNoteIdxById(noteId) {
    return gNotesData.findIndex(note => note.id === noteId);
}