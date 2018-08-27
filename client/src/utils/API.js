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
    }
};

 