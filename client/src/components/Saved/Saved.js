import React, { Component }from "react";
import API from "../../utils/API";
import Card from "../Card";
import Doctor from "../Doctor";
import "./Saved.css";

class Saved extends Component {
    // sets the initial values
    state = {
        doctors: []
    };

    // loads doctors
    componentDidMount() {
        this.loadDoctors();
    }

    // loads saved doctors
    loadDoctors = () => {
        API.getDoctors()
        .then(res => this.setState({ doctors: res.data }))
        .catch(err => console.log(err));
    };

    // displays search results
    savedDoctors = () => {
        return (
            <div className="doctor-grid row">
                {this.state.doctors.map(doctor => (
                    <Doctor
                        key={doctor._id}
                        doctorId={doctor._id}
                        doctorTitle={doctor.title}
    
                        drSpecialties={doctor.specialties}
                        drPracticeAddresss1={doctor.practiceaddresss1}
                        drPracticeAddresss2={doctor.practiceaddresss2}
                        drPracticeAddresss3={doctor.practiceaddresss3}
                        drPracticeAddresss4={doctor.practiceaddresss4}
                        drPracticeAddresss5={doctor.practiceaddresss5}
                        drPhone={doctor.phone}
                        drImageURL={doctor.imageurl}

                        deleteDoctor={this.deleteDoctor}
                    />
                ))}
            </div>
        )
    };

    // deletes a Doctor
    deleteDoctor = id => {
        API.deleteDoctor(id)
        .then(res => this.loadDoctors())
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div >
                { this.state.doctors.length ? <Card shadow={false} cardTitle="Saved Doctors" cardContent={this.savedDoctors()} /> : <Card cardTitle="No saved doctors to display" /> }
            </div>
        );
    };
}

export default Saved;