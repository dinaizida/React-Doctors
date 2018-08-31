import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";


class Notes extends Component {
  state = {
    notes: [],
    title: "",
    specialties: "",
    mynote: ""
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    API.getNotes()
      .then(res =>
        this.setState({ notes: res.data, title: "", specialties: "", mynote: "" })
      )
      .catch(err => console.log(err));
  };

  deleteNote = id => {
    API.deleteNote(id)
      .then(res => this.loadNotes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.specialties) {
      API.saveNote({
        title: this.state.title,
        specialties: this.state.specialties,
        mynote: this.state.mynote
      })
        .then(res => this.loadNotes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Note</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Your Doctor Name (required)"
              />
              <Input
                value={this.state.specialties}
                onChange={this.handleInputChange}
                name="specialties"
                placeholder="Your Doctor's specialty"
              />
              <TextArea
                value={this.state.mynote}
                onChange={this.handleInputChange}
                name="mynote"
                placeholder="Your Note"
              />
              <FormBtn
                disabled={!(this.state.specialties && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Save My Note
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Notes List</h1>
            </Jumbotron>
            {this.state.notes.length ? (
              <List>
                {this.state.notes.map(note => (
                  <ListItem key={note._id}>
                    <Link to={"/notes/" + note._id}>
                      <strong>
                        {note.title} by {note.specialties}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteNote(note._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Notes;
