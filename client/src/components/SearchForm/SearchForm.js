import React from "react";

const SearchForm = props => (
    <form>
        <div className="row ">
            <div className="input-field col m10 s10 ">
                <input id="topic" name="topic" type="text"   value={props.topic} onChange={props.handleInputChange} required />
                <label htmlFor="topic">Medical Issue</label>
            </div>
            
        </div>
        <button type="submit" className="waves-effect waves-light btn btn-large pulse  red lighten-3" onClick={props.handleFormSubmit}><i className="material-icons left tiny">search</i> Search</button>
    </form>
)
export default SearchForm;