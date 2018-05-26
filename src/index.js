import React, { Component } from "react";
import "babel-polyfill";

import "./fileUploader.css";

class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
    this.state = {
      content: "",
      showLoader: false
    };
  }

  async uploadFile(event) {
    let file = event.target.files[0];
    await this.setState({showLoader: true});
    if (file) {
      var reader = new FileReader();
      var context = this;
      reader.onload = function(e) {
        var contents = e.target.result;
        context.saveContents(contents);
        context.setState({showLoader: false});
      };
      reader.readAsText(file);
    }
  }

  saveContents(content) {
    this.setState({ content });
    this.props.uploadedFileCallback(content);
  }

  render() {
    return (
      <div class="fileUpload">
        <label>{this.props.title}</label>
        <div class="itemUpload">
          {this.state.showLoader ? <div class="loader"></div> : null}
          <input type="file" name="fileUpload" onChange={this.uploadFile} />
        </div>
      </div>
    );
  }
}

export default FileUploader;