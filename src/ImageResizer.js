import React, { Component } from "react";

class ImageResizer extends Component {
  imageChangeHandler = () => {};
  render() {
    return (
      <div>
        <input
          type="file"
          name="UploadImage"
          onChange="this.imageChangeHandler"
        />
      </div>
    );
  }
}

export default ImageResizer;
