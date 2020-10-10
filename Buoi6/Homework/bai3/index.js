let data = fetch('https://news-ncov-api.herokuapp.com/news?_page=1&_limit=20&fbclid=IwAR0WGm8_-Dq8RPeeG-nKwQEhRm942pScl8A0hj51VZub6V2faE7hhuq9Wu8')
.then(response => {
    return response.json()
})
.then(myjson => {
    for(let i = 0 ;i< myjson.length ; i++){
        console.log(`
        id : ${myjson[i].id}

        thumb : ${myjson[i].thumb}

        title : ${myjson[i].title}

        date : ${myjson[i].datetime}

        time : ${myjson[i].content}
        ***********************************************
        `);
    }
})
