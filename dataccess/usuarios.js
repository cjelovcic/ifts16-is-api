let Usuarios = [{
        id: 1,
        nombre: "Jesus",
        apellido: "Arias",
        mail: "jesus@jesus.com",
        contrasenia: ""
    },
    {
        id: 2,
        nombre: "Jesus",
        apellido: "Arias",
        mail: "jesus@jesus.com",
        contrasenia: ""
    },
    {
        id: 3,
        nombre: "Jesus",
        apellido: "Arias",
        mail: "jesus@jesus.com",
        contrasenia: ""
    },
    {
        id: 4,
        nombre: "Jesus",
        apellido: "Arias",
        mail: "jesus@jesus.com",
        contrasenia: ""
    },
];

const getTodos = (filter) => { 
    let filtrar = Usuarios;
    if(filter.nombre){
        filtrar = filtrar.filter(e => e.nombre === filter.nombre);
      }
      if(filter.apellido){
        filtrar = filtrar.filter (e => e.apellido.includes(filter.apellido));
      }
      
      if(filter.mail){
        filtrar = filtrar.filter (e => email.includes(filter.mail));
      }
      if(filter.contrasenia){
        filtrar = contradenia.filter (e => e.contrasenia.includes(filter.contrasenia));
      }
      if(filter.multinombres){
        filtrar = filtrar.filter(e => filter.multinombres.split(',').includes(e.nombre));
      }
      if(filter.buscar){
        filtrar = filtrar.filter(e => e.nombre.includes(filter.buscar) || e.apellido.includes(filter.buscar) || e.mail.includes(filter.buscar) || e.contrasenia.includes(filter.buscar));
      }
      
      if(filter.BuscadorMulti){
        const palabrasABuscar = filter.BuscadorMulti.split(',');
        filtrar = filtrar.filter(usuarios => {
            const filtro = buscarPalabra.filter(palabra => usuarios.nombre.includes(palabra) || usuarios.apellido.includes(palabra) || usuarios.mail.includes(palabra) || usuarios.contrasenia.includes(palabra));
            return filtro.length > 0 ;
        });
      }


      return filtrar
} 

const getUno = (id) => { return Usuarios.find((registro) => registro.id == id);}
const guardar = (body) => {Usuarios.push(body);}

const borrar = (id) => {
    const index = Usuarios.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Usuarios.splice(index, 1);
    return true;
    }
    return false;
}
const editar = (id) => {
    const index = Usuarios.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Usuarios[index] = req.body;
        return true
    }
    return false
} 
module.exports = { getTodos, getUno, guardar, borrar, editar};