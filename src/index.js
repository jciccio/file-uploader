import React, { Component } from "react";

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
      showLoader: false,
      fileSize: 0,
      sizeExceeded: false,
      fileName: null,
      size:0,
      lastModified:null
    };
  }

  async uploadFile(event) {
    let file = event.target.files[0];
    await this.setState({showLoader: true, fileName: file.name, size: file.size, lastModified: file.lastModified});
    if (file) {
      var reader = new FileReader();
      var context = this;
      reader.onload = function(e) {
        var contents = e.target.result;

        var fileSizeInBytes = file.size;
        var fSExt = ['Bytes', 'KB', 'MB', 'GB'];
        let i = 0;
        let size = fileSizeInBytes;
        while (size > 900 && i < fSExt.length - 1) {
          size /= 1024;
          i++;
        }
        var exactSize = Math.round(size * 100) / 100 + ' ' + fSExt[i];

        console.log("File size in bytes: " + fileSizeInBytes);
        console.log("context.props.maxFileSizeMB: " + context.props.maxFileSizeMB);


        const maxSizeBytes = context.props.maxFileSizeMB * 1024 * 1024;


        if (context.props.maxFileSizeMB === undefined || fileSizeInBytes < maxSizeBytes) {
          context.saveContents(contents);
          context.setState({ sizeExceeded: false });
        } else {
          context.setState({ sizeExceeded: true });
        }

        context.setState({
          showLoader: false,
          fileSize: exactSize,
        });

      };
      reader.onerror = function(e) {
        if(this.props.onErrorCallback){
          this.props.onErrorCallback(e);
          context.setState({showLoader: false});
        }
      };
      reader.onabort = function(e) {
        if(this.props.onAbortCallback){
          this.props.onAbortCallback(e);
          context.setState({showLoader: false});
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
    this.props.uploadedFileCallback(
      {
        filename: this.state.fileName, 
        data: content, 
        lastModified: this.state.lastModified, 
        size: this.state.size
      }
    );
  }

  renderFileLimitExceeded(){
    let text = this.props.customLimitText
      ? this.props.customLimitText
      : "File size exceeds " + this.props.maxFileSizeMB + "MB limit";
    if (this.state.sizeExceeded){
      return (
        <div style={this.props.customLimitTextCSS}>{text}</div>
      );
    }
    else{
      return null;
    }
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
          {this.renderFileLimitExceeded()}
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
  customLimitTextCSS: PropTypes.object,
  isBinary: PropTypes.bool,
  byteLimit: PropTypes.number,
  maxFileSizeMB: PropTypes.number,
};

export default FileUploader;
