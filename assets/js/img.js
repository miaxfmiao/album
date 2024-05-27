function generateMediaHTML(sourceFolder, numImages, numVideos, classId) {
  var fileNames = [];

  // Generate image file names
  for (var i = 1; i <= numImages; i++) {
    var fileName = i + ".jpg";
    fileNames.push(fileName);
  }

  // Generate video file names
  for (var i = 1; i <= numVideos; i++) {
    var fileName = i + ".mp4";
    fileNames.push(fileName);
  }

  var container = document.getElementById("media-container");
  var videoHTML = '';
  var imageHTML = '';

  for (var i = 0; i < fileNames.length; i++) {
    var fileName = fileNames[i];
    var fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();

    if (fileExtension === "mp4" || fileExtension === "webm" || fileExtension === "ogg") {
      videoHTML += '<div class="item ' + classId + ' col-sm-6 col-md-4 col-lg-4 mb-4">' +
                      '<span></span>' +
                      '<video class="img-fluid" src="' + sourceFolder + fileName + '" controls></video>' +
                    '</div>';
    } else {
      imageHTML += '<div class="item ' + classId + ' col-sm-6 col-md-4 col-lg-4 mb-4">' +
                      '<span></span>' +
                      '<img class="img-fluid" src="' + sourceFolder + fileName + '">' +
                    '</div>';
    }
  }

  container.innerHTML += videoHTML + imageHTML;
}