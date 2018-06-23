import React, { Component } from "react";
import "babel-polyfill";

import "./fileUploader.css";


/**
 * File Uploader component
 *
 * @version 0.1.10
 * @author [Jose Antonio Ciccio](https://github.com/jciccio)
 */
class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
    this.state = {
      content: null,
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
      reader.onerror = function(e) {
        if(this.props.onErrorCallback){
          this.props.onErrorCallback(e);
        }
      };
      reader.onabort = function(e) {
        if(this.props.onAbortCallback){
          this.props.onAbortCallback(e);
        }
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
      <div className="fileUpload">
        <label>{this.props.title}</label>
        <div className="itemUpload">
          {this.state.showLoader ? <div className="loader"></div> : null}
          <input type="file" name="fileUpload" onChange={this.uploadFile} />
        </div>  
      </div>
    );
  }
}

export default FileUploader;
