const request=require("request")
const cheerio=require("cheerio")

request("https://www.worldometers.info/coronavirus/country/india/",cb)

function cb(error, response, html)
{
    if(error){
        console.log(error)
    }
    else{
        handlehtml(html)
    }
}

function handlehtml(html){
    let sectool=cheerio.load(html)
    let contentArr=sectool("#maincounter-wrap span")
    let headingArr=sectool("#maincounter-wrap h1")
    for(let i=0;i<contentArr.length;i++){
        let data=sectool(contentArr[i]).text()
        let head=sectool(headingArr[i]).text()
        console.log(head,"--------------",data)
    }
}