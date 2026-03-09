function download(){

let url = document.getElementById("url").value

if(url === ""){
alert("Paste link first")
return
}

let downloader = "https://en.savefrom.net/1-youtube-video-downloader-16/?url=" + encodeURIComponent(url)

window.open(downloader,"_blank")

}
