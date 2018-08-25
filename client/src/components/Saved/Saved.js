import React, { Component }from "react";
import API from "../../utils/API";
import Card from "../Card";
import Article from "../Article";
import "./Saved.css";

class Saved extends Component {
    // sets the initial values
    state = {
        articles: []
    };

    // loads articles
    componentDidMount() {
        this.loadArticles();
    }

    // loads saved articles
    loadArticles = () => {
        API.getArticles()
        .then(res => this.setState({ articles: res.data }))
        .catch(err => console.log(err));
    };

    // displays search results
    savedArticles = () => {
        return (
            <div className="article-grid row">
                {this.state.articles.map(article => (
                    <Article
                        key={article._id}
                        articleId={article._id}
                        articleTitle={article.title}
    
                        drSpecialties={article.specialties}
                        drPracticeAddresss1={article.practiceaddresss1}
                        drPracticeAddresss2={article.practiceaddresss2}
                        drPracticeAddresss3={article.practiceaddresss3}
                        drPracticeAddresss4={article.practiceaddresss4}
                        drPracticeAddresss5={article.practiceaddresss5}
                        drPhone={article.phone}
                        drImageURL={article.imageurl}

                        deleteArticle={this.deleteArticle}
                    />
                ))}
            </div>
        )
    };

    // deletes an article
    deleteArticle = id => {
        API.deleteArticle(id)
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                { this.state.articles.length ? <Card shadow={false} cardTitle="Saved Doctors" cardContent={this.savedArticles()} /> : <Card cardTitle="No saved doctors to display" /> }
            </div>
        );
    };
}

export default Saved;