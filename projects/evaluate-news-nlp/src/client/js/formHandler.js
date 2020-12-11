function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }

/*// take the url as an input from the client and use meaningcloud api
// with url as parameter to analize that.
"https://api.meaningcloud.com/sentiment-2.1?key=<<YOUR OWN KEY>>&of=json&txt=<<YOUR OWN TXT>><MODEL>>&lang=en"
*/
