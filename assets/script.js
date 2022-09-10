    class Juegos {
        constructor(id, genero, titulo, precio){
    
            this.id = id,
            this.titulo = titulo,
            this.genero = genero,
            this.precio = precio
    
        }

        mostrarData(){
            console.log(
                `El titulo es: ${this.titulo}
El genero es: ${this.genero}
Su precio es: ${this.precio}`)
        }
    }
    
    const juego1 = new Juegos(1, "Survival Horror","Resident Evil 3 Nemesis", 2900)
    
    const juego2 = new Juegos(2,"Survival Horror", "Dead Space", 1500)
    
    const juego3 = new Juegos(3, "Survival Horror", "Silent Hill", 2800)
    
    const juego4 = new Juegos(4, "Lucha","Marvel vs Capcom", 1400)
    
    const juego5 = new Juegos(5, "Lucha", "Street Fighter", 1500)
    
    const juego6 = new Juegos(6, "Lucha", "Super Smash Bros: Ultimate", 2000)

    const juego7 = new Juegos(7, "Deportes", "Rocket League", 1000)

    const juego8 = new Juegos(8, "Deportes", "Fifa 22", 900)

    const juego9 = new Juegos(9, "Deportes", "NBA2K22", 800)

    const juego10 = new Juegos(10, "Aventuras", "God of War", 2100)

    const juego11 = new Juegos(11, "Aventuras", "Assassins Creed Valhalla", 2700)

    const juego12 = new Juegos(12, "Aventuras", "Sekiro: Shadows Die Twice", 2500)
    
    

    
    const catalogo= []
    catalogo.push(juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8, juego9, juego10, juego11, juego12)
    
    
    function mostrarCatalogo(array){
        alert("En la consola puedes ver nuestra variedad de juegos")
        console.log("Disfrute de nuestro catálogo:")
        array.forEach((juego)=>{
            juego.mostrarData()
        })
    }
    
    function buscarPorTitulo(){
        let buscarTitulo = prompt("Ingrese el título que desee buscar")
        let tituloEncontrado = catalogo.find((juego)=> juego.titulo.toLowerCase() == buscarTitulo.toLowerCase())
        if(tituloEncontrado == undefined){
            alert("Por el momento ese juego no esta en nuestro catalogo")
        }else{
            console.log(`El resultado de busqueda:`)
            console.log(tituloEncontrado)
        }
    }
    
    function buscarPorGenero(){
        let buscarGenero = prompt("Ingrese el genero que desea encontrar")
        let busqueda = catalogo.filter((book)=>book.genero.toLowerCase() == buscarGenero.toLowerCase())
        if(busqueda.length == 0){
            alert("No se encontro ningún juego de ese genero")
        }else{
    
            console.log("Las coincidencias con el genero son:")
            console.log(busqueda)
            for(let juegoEncontrado of busqueda){
                juegoEncontrado.mostrarData()
            }
        }
    }
    
    function sumarIva(array){
        let juegosConIva = array.map((juego)=>{
    
            return {
                id : juego.id,
                genero : juego.genero,
                titulo : juego.titulo,
                precio : juego.precio * .16
            }
        })


        console.log("Total con IVA:")
        console.log(juegosConIva)
    }
    sumarIva(catalogo)
    
    function preguntarOpcion(){
        let opcion = parseInt(prompt(`Hola Gamer que deseas realizar:
                            1 - Ver catálogo de juegos
                            2 - Buscar por titulo del juego:
                            3 - Buscar por genero del juego:
                            0 - Para salir
                            `))
        menu(opcion)
    }
    
    function menu(opcionSeleccionada){
        switch(opcionSeleccionada){
            case 0:
                salir = true
                alert(`Gracias por visitarnos Gamer, vuelve pronto :D`)
            break    
            case 1:
                mostrarCatalogo(catalogo)
              break 
               case 2: 
               buscarPorTitulo()
              break 
               case 3: 
               buscarPorGenero()
              break
               default: 
              alert(`Ingrese una opción correcta`)
        }
    }
    
    let salir 
    while(salir != true){
        preguntarOpcion()
    }
    
    //como se podria anexar la operacion de suma de IDs y precios con impuestos
    function totalConIva(totales, impuest){
        let resultado = totales + impuest
        return resultado
    }
    
    function impuesto(total, impuestos){
        let resultado = total * impuestos
        return resultado
    }
    
    function acumulador(acumulador, prodSumada){
        return acumulador = acumulador + prodSumada
    }
    
    function prodCantidad(){
        let cantidadProducto = parseInt(prompt("Ingrese la cantidad de productos"))
        return cantidadProducto
    }
    
    let producto = 0;
    let acum = 0;
    let imp = 0.16;
    let iva = 0;
    let total = 0;
    let cantProducto = prodCantidad()
    for(let i=0; i<cantProducto; i++){
        producto = parseFloat(prompt(`Ingrese el precio del producto ${i+1}`))
        acum = acumulador(acum, producto)
        
    }
    iva = impuesto(acum, imp);
    total = totalConIva(acum,iva);
    
    console.log(`Total sin IVA: ${acum} pesos`);
    console.log(`IVA: ${iva} pesos`);
    console.log(`Total: ${total} pesos`);



