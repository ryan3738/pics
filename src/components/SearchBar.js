import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //e is short for event
  onFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };c

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
