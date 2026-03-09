async function download(){

let url=document.getElementById("url").value

let api=`https://api.vevioz.com/api/button/mp4?url=${url}`

document.getElementById("result").innerHTML=

`<iframe src="${api}" width="100%" height="200"></iframe>`

}
