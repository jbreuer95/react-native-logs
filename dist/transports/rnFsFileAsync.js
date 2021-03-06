"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rnFsFileAsync = (msg, level, options) => {
    /**
     * Control msg type
     * Here we use JSON.stringify so you can pass object, array, string, ecc...
     */
    let stringMsg;
    if (typeof msg === 'string') {
        stringMsg = msg;
    }
    else if (typeof msg === 'function') {
        stringMsg = '[function]';
    }
    else {
        stringMsg = JSON.stringify(msg);
    }
    let dateTxt = `${new Date().toLocaleString()} | `;
    let levelTxt = `${level.text.toUpperCase()} | `;
    let loggerName = 'rnlogs';
    let loggerPath = RNFS.DocumentDirectoryPath;
    if (options && options.hideDate)
        dateTxt = '';
    if (options && options.hideLevel)
        levelTxt = '';
    if (options && options.loggerName)
        loggerName = options.loggerName;
    if (options && options.loggerPath)
        loggerPath = options.loggerPath;
    let output = `${dateTxt}${levelTxt}${stringMsg}\n`;
    try {
        var RNFS = require('react-native-fs');
    }
    catch (error) {
        console.error('Unable to load react-native-fs, try "yarn add react-native-fs"');
        return true;
    }
    var path = loggerPath + '/' + loggerName + '.txt';
    RNFS.appendFile(path, output, 'utf8')
        .then(() => { })
        .catch((err) => {
        console.error(err);
    });
};
exports.rnFsFileAsync = rnFsFileAsync;
