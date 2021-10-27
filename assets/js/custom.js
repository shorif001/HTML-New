// document.write(`<br>hellow "Mahadi" `);


// function mydata() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(Response => {
//             if (!Response.ok) {
//                 throw error("ssssssss");
//             }
//             return Response.json();
//         })
//         .then(data => {
//             console.log(data);
//             const html = data.map(user => {
//                     return `
//                     <div class="user">
//                       <p>id: ${user.id}</p>
//                       <p>Title: ${user.title}</p>
//                     </div>
//                     `;
//                 })
//                 .join("");
//             console.log(html);
//             document.querySelector('#view').insertAdjacentHTML('afterbegin', html)
//         })
//         .catch(error => {
//             console.log(error)
//         });
// }

// mydata();