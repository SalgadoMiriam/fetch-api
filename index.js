console.log("Inicio de sesión fetch api");

const url = "https://reqres.in/api/users?delay=3"
let contenido = document.getElementById("contenido")
let boton = document.getElementById("boton")

function traer() {
   boton.disabled=true;
    fetch(url)
        .then(response => response.json())
        .then(data => {

            tabla(data)
        })
        .catch(err => console.log(err));
    setTimeout(() => {
       console.log("aaaa");
        contenido.innerHTML = "";
        boton.disabled = false;
    }, 6000)

}


function tabla(data) {
    // console.log(data)
    contenido.innerHTML = ''
    for (let valor of data.data) {
        // console.log(valor.first_name)
        contenido.innerHTML += `

       <tr>
       <th scope="row">${valor.id}</th>
       <td>${valor.email}</td>
       <td>${valor.first_name}</td>
       <td>${valor.last_name}</td>
       <td><img src='${valor.avatar}'/></td>
     </tr>`
    }
}

boton.onclick = () => traer();