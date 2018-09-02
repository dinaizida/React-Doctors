import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import Card from "../Card";
import SearchForm from "../SearchForm";
import Doctor from "../Doctor";
import Message from "../Message";
import "./Search.css";

class Search extends Component {
    // sets the initial values
    state = {
        doctors: [],
        topic: "",
        info: 'click on "search" button to find a doctor',
        
    };
    

    // handles any changes to the input fields
    handleInputChange = event => {
        const { name, value } = event.target;
        // sets the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };
    // displays the search form
    searchForm = () => {
        return (
            <SearchForm
                topic={this.state.topic}
                
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
            />
        )
    }
   
    // handles the submission of the form
    handleFormSubmit = event => {
        event.preventDefault();

        // form fields
        const topic = this.state.topic;

        // API URL
        //const apiKey = "932c328bab1a81634332edee178f5544";
       //let queryURL = `https://api.betterdoctor.com/2016-03-01/doctors?query=" + ${topic} + "&location?query=" + ${doctorState} + "&user_location=30.1431%2C-97.8335&skip=0&sort=distance-asc&limit=10&user_key=932c328bab1a81634332edee178f5544`;
       let queryURL = `https://api.betterdoctor.com/2016-03-01/doctors?query=" + ${topic} +  "&user_location=30.1431%2C-97.8335&skip=0&sort=distance-asc&limit=10&user_key=932c328bab1a81634332edee178f5544`;
        console.log(`queryURL: ${queryURL}`);

        axios.get(queryURL)
        .then(doctorsRes => {
            //
              console.log(doctorsRes);
              for (let i = 0; i < 3; i++){
              console.log(doctorsRes.data.data[i].practices[0].name);
              console.log(doctorsRes.data.data[i].specialties[0].description);
              var practiceAddress = doctorsRes.data.data[i].practices[0].visit_address.street +
               " " + doctorsRes.data.data[i].practices[0].visit_address.street2 + 
               " " +  doctorsRes.data.data[i].practices[0].visit_address.city + 
               " " +  doctorsRes.data.data[i].practices[0].visit_address.state +
               " " +  doctorsRes.data.data[i].practices[0].visit_address.zip;
              console.log(practiceAddress);
              console.log(doctorsRes.data.data[i].practices[0].phones[0].number);
              console.log(doctorsRes.data.data[i].profile.image_url);
              }
              //console.log(doctorsRes.data.data[0].profile.bio);

              console.log(doctorsRes.data.data);
              this.setState({ doctors: doctorsRes.data.data, topic: ""});
          
          })

                .catch(function(error) {
                    console.log(error);
                });

    };

    // displays search results
    searchResults = () => {
        return (
            <div className="doctor-grid row">
                {this.state.doctors.map(doctor => (
                    <Doctor
                        key={doctor.uid}
                        doctorId={doctor.uid}
                        doctorTitle={doctor.practices[0].name}

                        drSpecialties={doctor.specialties[0].description}

                        drPracticeAddresss1={doctor.practices[0].visit_address.street}
                        drPracticeAddresss2={doctor.practices[0].visit_address.street2}
                        drPracticeAddresss3={doctor.practices[0].visit_address.city}
                        drPracticeAddresss4={doctor.practices[0].visit_address.state}
                        drPracticeAddresss5={doctor.practices[0].visit_address.zip}

                        drPhone={doctor.practices[0].phones[0].number}
                        drImageURL={doctor.profile.image_url}
                    
                        saveDoctor={this.saveDoctor}
                    />
                ))}
            </div>
        )
    }

    // saves  a doctor 
    saveDoctor = (title, specialties, practiceaddresss1, practiceaddresss2, practiceaddresss3, practiceaddresss4, practiceaddresss5, phone, imageurl, saved) => {
    console.log(title, specialties, practiceaddresss1, practiceaddresss2, practiceaddresss3, practiceaddresss4, practiceaddresss5, phone, imageurl, saved);
        API.saveDoctor({
            title: title,
            specialties: specialties,
            practiceaddresss1: practiceaddresss1,
            practiceaddresss2: practiceaddresss2,
            practiceaddresss3: practiceaddresss3,
            practiceaddresss4: practiceaddresss4,
            practiceaddresss5: practiceaddresss5,
            phone:phone,
            imageurl: imageurl,
            saved: "Doctor saved"
        })
        .then(res => console.log(title, specialties, practiceaddresss1, practiceaddresss2, practiceaddresss3, practiceaddresss4, practiceaddresss5, phone, imageurl, saved))
        .catch(err => console.log(err))
       // alert ( "Doctor saved");
        this.setState({ info: 'Doctor saved!' });
    };

    render() {
        return (
            <div>
                <Card cardTitle="Search for Doctors"  cardContent={this.searchForm()} 
                />
                <Message message={this.state.info} />
                <div className ="cardDiv col s12 m3">
                { this.state.doctors.length ? <Card cardTitle="Search Results" cardContent={this.searchResults()} /> : "" }
                
                </div>
               
            </div>
            
        );
    }
};

export default Search;