# file-uploader
React File Uploader Component

# Description

Simple react file upload component with loading throbber. 
Abstracts the FE loading functionality and invokes a callback function once the file has been already loaded with the appropriate data.
This was originally thought for text files.

# Installation

Install it from npm and include it in your React build process (using Webpack, Browserify, etc).

```
npm i file-uploader-js
```


# Usage

Import `FileUploader` in your react component.

```
import FileUploader from 'file-uploader';
```

and specify the callback function you want to call when the file is loaded.

While the file is loading, you'll see a loading throbber.

```
uploadedCsv(fileData) {
    console.log(fileData);
    //Do stuff with the loaded file data
}
```
# License 
MIT
