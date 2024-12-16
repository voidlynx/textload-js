var teststr = "// the universe survives on give and take //"
var teststr2 = "shorter"
var glitchchars = "@#$%+="
var interval = 0.075


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

document.getElementById("animate").onclick=async() => {
    await animate("thetext");
};

async function animate(elemid) {
    elem = document.getElementById(elemid)
    elem.innerHTML = ""
    var lyric = "// " + lines[Math.floor(Math.random()*lines.length)].toLowerCase() + " //"
    for (var i = 0; i < lyric.length; i++) {
        elem.innerHTML += glitchchars[Math.floor(Math.random()*glitchchars.length)]
        await new Promise(r => setTimeout(r, interval*1000));
        var intermed = setCharAt(elem.innerHTML, elem.innerHTML.length-1, lyric.slice(i,i+1))
        elem.innerHTML = intermed
    }
}

function test(elemid){
    elem = document.getElementById(elemid)
    elem.innerHTML = "this sucks"
}