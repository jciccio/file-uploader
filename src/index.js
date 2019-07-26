import React, { Component } from "react";
import "babel-polyfill";
import PropTypes from 'prop-types';
import "./fileUploader.css";


/**
 * File Uploader component
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

      if(this.props.isBinary)
        reader.readAsBinaryString(file);
      else
        reader.readAsText(file,"iso-8859-1");
    }
  }

  saveContents(content) {
    this.setState({ content });
    this.props.uploadedFileCallback(content);
  }

  render() {
    let accept = "";
    if (this.props.accept !== undefined){
      accept = this.props.accept;
    }
    return (
      <div className="fileUpload">
        <label style={this.props.titleCss}>{this.props.title}</label>
        <div className="itemUpload">
          {this.state.showLoader ? <div className="loader"></div> : null}
          <input 
            type="file" 
            name="fileUpload" 
            onChange={this.uploadFile} 
            accept={accept}
          />
        </div>  
      </div>
    );
  }
}

FileUploader.propTypes = {
  title: PropTypes.string,
  uploadedFileCallback:  PropTypes.func.isRequired,
  accept: PropTypes.string,
  onErrorCallback:  PropTypes.func,
  onAbortCallback:  PropTypes.func,
  titleCss: PropTypes.object,
  isBinary: PropTypes.bool
};

export default FileUploader;
