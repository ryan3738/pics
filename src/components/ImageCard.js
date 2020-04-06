import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    //How to create a reference, "React.createRef() assigned to a variable."
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //set callback as an argument
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  //Set as an arrow function to bind the callback
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 1 + 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* Here is the image reference to this.imageRef */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
