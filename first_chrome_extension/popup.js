
$(function(){
    console.log("Extension is loaded");
    
    
});
// document.addEventListener('DOMContentLoaded', async () => {
//     console.log('working');
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     const posts = [
//         {
//             "userId": 1,
//             "id": 1,
//             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//           },
//           {
//             "userId": 1,
//             "id": 2,
//             "title": "qui est esse",
//             "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//           }
//     ]
//     const showAlert = (e)=>{
//         const str = e.target.dataset.url;
//         alert(str);
//     }
    
//     try {
//         // const res = await fetch(url);
//         // const data = await res.json();
//         const postData = posts.map(post => {
//             const postTitle = `${post.title}`;
//             return `<li class="video-link">
//                     <button class="postBtn" class="btn" data-url="${postTitle}">Post Copy</button>
//                     ${postTitle}
//                     </li>
//             `
//         }).join('');
//         linksList.innerHTML = postData;
//     } catch (error) {
//         console.error(error);

//     }
// });