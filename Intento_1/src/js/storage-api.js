/**
 * Created by Javier on 22/07/2016.
 */
var $ = require('jquery');

module.exports = {
    save: function(kind, value, successCallback, errorCallback) {
        //  kind: backend, session, local
        //  value: dictionary key/value to store
        //  successCallback, errorCallback: important for future use in backend storage
        //debugger;
        if (kind=='local') {
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem(value[0],value[1]);
                successCallback();
            }
            else {
                errorCallback();
            }
        }
        else if (kind=='session') {
            if (typeof(Storage) !== "undefined") {
                sessionStorage.setItem(value[0],value[1]);
                successCallback();
            }
            else {
                errorCallback();
            }
        }
        else {

        }
    },

    load: function(kind, itemKey, successCallback, errorCallback) {
        //  kind: backend, session, local
        //  itemKey: dictionary key for value to get
        //  successCallback, errorCallback: important for future use in backend storage
        //debugger;
        var dataStored = null;
        if (kind=='local') {
            if (typeof(Storage) !== "undefined") {
                dataStored = localStorage.getItem(itemKey);
                successCallback();
                return (dataStored);
            }
            else {
                errorCallback();
                return (null);
            }
        }
        else if (kind=='session') {
            if (typeof(Storage) !== "undefined") {
                dataStored = sessionStorage.getItem(itemKey);
                successCallback();
                return (dataStored);
            }
            else {
                errorCallback();
                return (null);
            }
        }
        else {
            return (null);
        }
    }

};
