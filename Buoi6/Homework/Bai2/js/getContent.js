let main = document.getElementById("main");
fetch(
  "https://news-ncov-api.herokuapp.com/news?_page=1&_limit=20&fbclid=IwAR089KvCg3PBXk1FIVGdPRPTv30iqcFVVvCA1oqx_HBBUb-ecHvwgrDQc6E"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let html = `
        <main-content></main-content>
        `;
      main.insertAdjacentHTML("afterbegin", html);
    }
    console.log(main);
  });

//   .then(()=>{
//       console.log(main.innerHTML);
//       for(let i = 0; i< main.children.length; i++){
//           let content = main.children[i]
//           console.log(content.children[0]);
// console.log(main.children);
