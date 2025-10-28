const b1 = document.querySelector('.b-1')
const i1 = document.querySelector('.i-1')

const wrap = document.querySelector('.wrap')
const arr = []

const BASE_URL = 'https://api.github.com/'

const getUserForLogin = () => {
    const elem = arr.find( elem => {
        if (elem.login.toLowerCase() == i1.value.toLowerCase()) {
            return true
        }
    })

    if(elem) return;

    const url = BASE_URL + 'users/' + i1.value;
    fetch(url)
        .then( (response) => {
            console.log(response)
            if(response.status == 200){
                return response.json()
            }
        } )
        .then((data) => {
            // console.log(data)
            
            

         

            arr.push(data)

            
            wrap.innerHTML += 
            `<div class="container">
            <img class="img" src="${data.avatar_url}">
            <div class="box">
                <p>${data.login}</p>
                <p>${data.public_gists}</p>
            </div>
            </div>`
                

        })

    
}








b1.onclick = getUserForLogin





// const data = [
//     { id: 1, name: "Alice", age: 25, city: "New York" },
//     { id: 2, name: "Bob", age: 30, city: "London" },
//     { id: 3, name: "Charlie", age: 22, city: "Paris" },
//     { id: 4, name: "Diana", age: 27, city: "Berlin" },
//     { id: 5, name: "Ethan", age: 35, city: "Toronto" },
//     { id: 6, name: "Fiona", age: 29, city: "Rome" },
//     { id: 7, name: "George", age: 31, city: "Madrid" },
//     { id: 8, name: "Hannah", age: 24, city: "Sydney" },
//     { id: 9, name: "Ian", age: 28, city: "Amsterdam" },
//     { id: 10, name: "Julia", age: 26, city: "Tokyo" }
//   ];

  

//   const a = data.find( item => {
//     if (item.id == 4) {
//         return true
//     }
//   })

//   console.log(a);