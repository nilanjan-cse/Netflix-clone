// import React from 'react'
// const VideoMap = new Map()
var VideoMap = {
    "Squid Game": "https://www.youtube.com/watch?v=oqxAJKy0ii4",
    "Lucifer": "https://www.youtube.com/watch?v=ueMwVGBwqRo"
}
// Below is the video database
// VideoMap.set("Squid Game","https://www.youtube.com/watch?v=oqxAJKy0ii4");
// VideoMap["Squid Game"] = "https://www.youtube.com/watch?v=oqxAJKy0ii4";
// VideoMap["Lucifer"] = "https://www.youtube.com/watch?v=ueMwVGBwqRo";
// VideoMap.set("Lucifer","https://www.youtube.com/watch?v=ueMwVGBwqRo");

//console.log(VideoMap["Lucifer"]);
function VideoDB(videoname) {
    var path = VideoMap[videoname];
    console.log("Returning the following path to Row.js component: ",path);
   return path;
}

export default VideoDB ;
