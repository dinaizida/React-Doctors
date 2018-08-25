import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import Card from "../Card";
import SearchForm from "../SearchForm";
import Article from "../Article";
import "./Search.css";

class Search extends Component {
    // sets the initial values
    state = {
        articles: [],
        topic: "",
        // user_address: "",
        // doctor_state: ""
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
                // userAddress={this.state.user_address}
                // doctorState={this.state.doctor_state}
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
        // let userAddress = this.state.user_address;
        // let doctorState = this.state.doctor_state;
        // let userTempAdress = "37.773-122.413";


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
              this.setState({ articles: doctorsRes.data.data, topic: ""});
          
          })

                .catch(function(error) {
                    console.log(error);
                });

    };

    // displays search results
    searchResults = () => {
        return (
            <div className="article-grid row">
                {this.state.articles.map(article => (
                    <Article
                        key={article.uid}
                        articleId={article.uid}
                        articleTitle={article.practices[0].name}

                        drSpecialties={article.specialties[0].description}

                        drPracticeAddresss1={article.practices[0].visit_address.street}
                        drPracticeAddresss2={article.practices[0].visit_address.street2}
                        drPracticeAddresss3={article.practices[0].visit_address.city}
                        drPracticeAddresss4={article.practices[0].visit_address.state}
                        drPracticeAddresss5={article.practices[0].visit_address.zip}

                        drPhone={article.practices[0].phones[0].number}
                        drImageURL={article.profile.image_url}
                    
                        saveArticle={this.saveArticle}
                    />
                ))}
            </div>
        )
    }

    // saves an article
    saveArticle = (title, specialties, practiceaddresss1, practiceaddresss2, practiceaddresss3, practiceaddresss4, practiceaddresss5, phone, imageurl) => {
       // console.log(title, specialties, practiceaddresss1, practiceaddresss2, practiceaddresss3, practiceaddresss4, practiceaddresss5, phone, imageurl);
        API.saveArticle({
            title: title,
            // date: date,
            // url: url,
            specialties: specialties,
            practiceaddresss1: practiceaddresss1,
            practiceaddresss2: practiceaddresss2,
            practiceaddresss3: practiceaddresss3,
            practiceaddresss4: practiceaddresss4,
            practiceaddresss5: practiceaddresss5,
            phone:phone,
            imageurl: imageurl,
            saved: true
        })
        .then(res => console.log(title, specialties, practiceaddresss1, practiceaddresss2, practiceaddresss3, practiceaddresss4, practiceaddresss5, phone, imageurl))
        .catch(err => console.log(err))
    };

    render() {
        return (
            <div  >
                <Card cardTitle="Search for Doctors" cardContent={this.searchForm()}
                />
                <div className ="cardDiv col s12 m10">
                { this.state.articles.length ? <Card cardTitle="Search Results" cardContent={this.searchResults()} /> : "" }
                </div>
            </div>
        );
    }
};

export default Search;