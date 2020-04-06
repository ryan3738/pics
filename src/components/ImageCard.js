import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    //How to create a reference, "React.createRef() assigned to a variable."
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        {/* Here is the image reference to this.imageRef */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
