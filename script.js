const api="https://type.fit/api/quotes"
const displayQuote =document.getElementById("quote-display")
const displayAuthor =document.getElementById("author-display")
const buttonForNewQuote =document.getElementById("new-quote-btn")
const buttonShareTweet =document.getElementById("tweet")
let quotes=''
let quotesData=''
let author=''
const getQuotes = async ()=>{
    try{
        let response = await  fetch(api)
     quotes=await response.json()
        getNewQuote()
    }
    catch(error)
    {

    }
}
const getNewQuote=()=>{
    let random=Math.floor(Math.random()*10)
    quotesData= quotes[random]
    console.log(quotes[random].text)
    displayQuote.innerText=`${quotes[random].text}`
    author=quotesData.author.split(',')
    quotesData.author==null
    ? displayAuthor. innerText=`unknown`
    : displayAuthor. innerText=`${author[0]}`
    
    

    // console.log(author)
}

const shareTweet =()=>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} by ${author[0]} `
    window.open(tweetPost)
}
getQuotes()
buttonForNewQuote.addEventListener('click',getQuotes)

buttonShareTweet.addEventListener('click',shareTweet)

