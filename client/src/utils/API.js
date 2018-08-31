import axios from "axios";
import { DocumentProvider } from "mongoose";

export default {
    // gets all doctors
    getDoctors: function() {
        return axios.get("/api/doctors");
    },
    // gets an article by id
    getDoctor: function(id) {
        return axios.get("/api/doctors/" + id);
    },
    // deletes the Doctor with the given id
    deleteDoctor: function(id) {
        return axios.delete("/api/doctors/" + id);
    },
    // saves an Doctor to the database
    saveDoctor: function(doctorData) {
        return axios.post("/api/doctors", doctorData);
    },
    // updates an Doctor to the database
    updateDoctor: function(doctorData) {
        return axios.put("/api/doctors", doctorData);
    },
        // Gets all notes
        getNotes: function() {
            return axios.get("/api/notes");
        },
        // Gets the note with the given id
        getNote: function(id) {
            return axios.get("/api/notes/" + id);
        },
        // Deletes the Note with the given id
        deleteNote: function(id) {
            return axios.delete("/api/notes/" + id);
        },
        // Saves a Note to the database
        saveNote: function(noteData) {
            return axios.post("/api/notes", noteData);
        }

};

 