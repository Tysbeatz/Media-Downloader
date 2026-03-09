async function download(){

let url = document.getElementById("url").value

if(url === ""){
alert("Paste a link first")
return
}

let result = document.getElementById("result")

result.innerHTML = `
<p>Click the button below to download</p>
<a href="https://en.savefrom.net/1-youtube-video-downloader-16/?url=${url}" target="_blank">
<button>Open Downloader</button>
</a>
`

}
