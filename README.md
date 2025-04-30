
![npm](https://img.shields.io/npm/dt/file-uploader-js.svg)
![npm](https://img.shields.io/npm/v/file-uploader-js.svg)
![npm](https://img.shields.io/npm/l/file-uploader-js.svg)


# react-js-file-uploader
React JS File Uploader Component

# Description

A customizable React file upload component with built-in loading indicator (throbber) and size validation. It simplifies file upload handling by abstracting front-end logic and providing a clean callback interface once the file is fully loaded.

Some key features are:

## Features:
* Displays a loading spinner while the file is being read.

* Invokes a callback (uploadedFileCallback) with the file's content, name, size, and last modified date after successful loading.

* Supports validation of maximum file size (in MB or bytes).

* Allows restriction of accepted file types (e.g., .csv, .pdf,.docx).

* Handles read errors (onErrorCallback) and aborts (onAbortCallback) gracefully.

* Offers customization of UI text and styles via props.


**How to thank me?**
Just click on ⭐️ button or buy me a tea using the donation button below :)

# Installation

Install it from npm and include it in your React build process (using Webpack, Browserify, etc).

```
npm i file-uploader-js
```
Or if you use yarn, you can execute: 

```
yarn add file-uploader-js
```

# Usage

Import `FileUploader` in your react component.

```
import FileUploader from 'file-uploader-js';
```

and specify the callback function you want to call when the file is loaded.

While the file is loading, you'll see a loading throbber.

For example:

```javascript
<FileUploader
  accept=".csv"
  title="Please upload a CSV file"
  titleCss={{ color: "#000", fontFamily: "arial" }}
  uploadedFileCallback={e => {
    this.uploadedCsv(e);
  }}
/>
```

And then define the callback function

```javascript
    uploadedCsv(fileData) {
      console.log(fileData);
      //Do stuff with the loaded file data
      //It comes in an object form
      //  {
      //    filename: string, 
      //    data: file uploaded data content, 
      //    lastModified: date, 
      //   size: in bytes
      //  }
}
```

# Props

Props available:
* `title` (title that will have the upload component section as a label)
* `uploadedFileCallback` (callback function that will be invoked)
* `accept` (Types you want to filter and accept for uploads e.g ".csv")

Optionally you can handle errors with the following props:

* `onErrorCallback` (Error uploading and reading the file)
* `onAbortCallback` (Operation aborted)

| Name        | Type            | Mandatory | Description  
| ------------- |:-------------:| -----:|:-----|
| title      | String | N | Title you want to have in the uploader |
| uploadedFileCallback | Function callback     | Y|  Function to call on loaded data |
| accept | String    | N|  Filter to determine what file types you want to upload |
| onErrorCallback | Function callback    | N|  Function to call on loading error |
| onAbortCallback | Function callback    | N|  Function to call on loading abort |
| titleCss | Object    | N|  Styling for title |
| isBinary | present? | N| Is the file binary? Text file as default
| customLimitTextCSS | Object | N| Object to customize error title
| byteLimit | Number | N| Number in bytes to determine file size limit
| maxFileSizeMB| Number | N | File size max amount that can be received in MB (e.g 0.1, 100, 10)


# Donations

If you think that any information you obtained here is useful and worth of some money and are willing to pay for it, feel free to send any amount through Paypal :)

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2MSMEVFF9P33N)

You can also follow me on Patreon:
https://patreon.com/Jacware


# Changelog

### v0.5.1
* Fixed read as binary to use modern browser standards.

### v0.5.0

#### Breaking changes:
* Renaming: fileSizeLimit to maxFileSizeBytes
* Changed callback function to return filename and data uploaded
instead of receiving just the content of the uploaded file you will receive { filename: "filename", content: blob}
This can be extended in the future to add more elements.
* To make things easier created a new prop: maxFileSizeMB

#### Deprecations:
* Deprecated prop maxFileSizeBytes

#### Other: 
* Fixed logic issue with max file size limit

### v0.4.0
* No breaking changes besides all dependencies updated
* Dependencies updated
* Overall package size optimized

### v0.3.4
* Dependencies updated
* React version updated
* Overall package size optimized

### v0.3.0
* Dependencies updated
* Overall package size optimized

### v0.2.7
* Added props to have a hard file size limit `byteLimit`
* Added new error message if the file exceeds the limit, can be configured with `customLimitTextCSS` prop

### v0.2.2
* Bug fixes typecheck added

### v0.2.1
* Read binary files

### v0.2.0
* Added accept prop
* Added styling prop for title

### v0.1.8
* Added callback support for abort and error handling


# License 

Licensed under the MIT License © [jciccio](https://www.npmjs.com/~jciccio)
