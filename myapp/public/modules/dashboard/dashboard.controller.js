/**
 * Created by tudor on 05.04.2016.
 */
 'use strict';
var myApp = angular.module('myApp');

myApp.controller('dashboardController', function($scope)
{
  var handleFileSelect = function(evt) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
        var reader = new FileReader();
        reader.onload = function(readerEvt) {
            var binaryString = readerEvt.target.result;
            ///////////////////////////////////////
            var video = document.getElementById('video');
            var source = document.createElement('source');
            source.setAttribute('src', 'data:video/mp4;base64,'+btoa(binaryString));
            video.appendChild(source);
            video.play();
            ///////////////////////////////////////
        };
        reader.readAsBinaryString(file);
    }
};
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('filePicker').addEventListener('change', handleFileSelect, false);
} else {
    alert('The File APIs are not fully supported in this browser.');
}
});
