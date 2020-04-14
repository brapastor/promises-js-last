const heroes = {
    capi: {
        nombre: 'Capitan América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iroman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las picaduras de arañas'
    },
}

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    if(heroe){
        callback(null, heroe);
    }else{
        //un error
        callback(`No existe un heroe con el id ${id}`);

    }
    // callback(heroe);
}