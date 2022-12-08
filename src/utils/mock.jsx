const productos = [
    {
        id: 1,
        marca: "SMOK",
        modelo: "NORD4",
        precio: 1100,
        categoria: "principiantes",
        img: "./imagenes/1 Principiantes/Nord Pod/1.jpg",
        description: "Estilo POD, lo más sencillo pero eficiente",
        alt: "Equipo de inicio, de marca smok modelo Nord 4"
    },
    {
        id: 2,
        marca: "SMOK",
        modelo: "VAPEPEN22",
        precio: 1500,
        categoria: "principiantes",
        img: "./imagenes/1 Principiantes/VapePen 22/1.jpg",
        description: "Simple pero elegante",
        alt: "Equipo de inicio, de marca Smok, modelo VapePen 22"
    },
    {
        id: 3,
        marca: "SMOK",
        modelo: "STICKPRINCE",
        precio: 2000,
        categoria: "principiantes",
        img: "./imagenes/1 Principiantes/Smok Stick Prince/1.jpg",
        description: "Kit de inicio... a lo grande",
        alt: "Equipo de inicio, de marca Smok, modelo Prince"
    },
    {
        id: 4,
        marca: "VAPORESSO",
        modelo: "SKYSOLO",
        precio: 2000,
        categoria: "principiantes",
        img: "./imagenes/1 Principiantes/Sky Solo/1.jpg",
        description: "Cabe en el bolsillo pero el límite es el cielo.",
        alt: "Equipo de inicio, de marca Vaporesso, modelo Sky Solo"
    },
    {
        id: 5,
        marca: "JOYTECH",
        modelo: "EXCEED",
        precio: 1800,
        categoria: "principiantes",
        img: "./imagenes/1 Principiantes/Joyctech exceed grip/1.jpg",
        description: "Simple pero poderoso",
        alt: "Equipo de inicio, de marca Joytech, modelo Exceed Grip"
    },
    {
        id: 6,
        marca: "VAPORESSO",
        modelo: "POD",
        precio: 1100,
        categoria: "principiantes",
        img: "./ imagenes / 1 Principiantes/ Vaporesso Pod / 1.jpg",
        description: "Estilo POD, el pequeño primer paso",
        alt: "Equipo de inicio, de marca Joytech, modelo Exceed Grip"
    },
    {
        id: 7,
        marca: "VOOPOO",
        modelo: "DRAGXPLUS",
        precio: 2200,
        categoria: "avanzados",
        img: "./ imagenes / 2 Avanzados / Kit voopoo drag 3 / 1.jpg",
        description: "Drag en formato kit... Nada puede salir mal",
        alt: "Equipo avanzado, de marca Voopoo, modelo Drag X"
    },
    {
        id: 8,
        marca: "GEEKVAPE",
        modelo: "AEGISMAX",
        precio: 2500,
        categoria: "avanzados",
        img: "./ imagenes / 2 Avanzados / Kit Aegis Max / 1.jpg",
        description: "Un todo terreno con un tanque poderoso",
        alt: "Equipo avanzado, de marca GeekVape, modelo Aegis MAX"
    },
    {
        id: 9,
        marca: "GEEKVAPE",
        modelo: "BOOSTPRO",
        precio: 2100,
        categoria: "avanzados",
        img: "./ imagenes / 2 Avanzados / Aegis Boost + /1.jpg",
        description: "Sencillamente revolucionario y potente",
        alt: "Equipo avanzado, de marca GeekVape, modelo Aegis Boost Pro"
    },
    {
        id: 10,
        marca: "VAPORESSO",
        modelo: "GENS",
        precio: 2800,
        categoria: "avanzados",
        img: "./ imagenes / 2 Avanzados / Vaporesso Gen S / 1.jpg",
        description: "El mejor chip del mercado y la mejor estética",
        alt: "Equipo avanzado, de marca Vaporesso, modelo Gen S"
    },
    {
        id: 11,
        marca: "EHPRO",
        modelo: "ARMOR",
        precio: 2500,
        categoria: "pro",
        img: "./ imagenes / 3 Pro / Equipo pro 1.jpg",
        description: "Semi mecánico... Poderoso y seguro",
        alt: "Mod para vapeo, de marca Ehpro, modelo Armor"
    },
    {
        id: 12,
        marca: "GEEKVAPE",
        modelo: "DRAG3",
        precio: 3000,
        categoria: "pro",
        img: "./ imagenes / 3 Pro / Equipo pro 2.jpg",
        description: "Calidad, estética y potencia, todo en uno",
        alt: "Mod para vapeo, de marca Voopoo, modelo Drag 3"
    },
    {
        id: 13,
        marca: "VAPORESSO",
        modelo: "LUXE",
        precio: 3000,
        categoria: "pro",
        img: "./ imagenes / 3 Pro / Equipo pro 3.jpg",
        description: "Nuestro único mod de pantalla táctil",
        alt: "Mod para vapeo, de marca Vaporesso, modelo Luxe"
    },
    {
        id: 14,
        marca: "DESIRE",
        modelo: "CUT",
        precio: 2800,
        categoria: "pro",
        img: "./ imagenes / 3 Pro / Equipo pro 4.jpg",
        description: "Mod potente y portátil",
        alt: "Mod para vapeo, de marca Desire, modelo Cut"
    },
    {
        id: 15,
        marca: "AUGVAPE",
        modelo: "VX217",
        precio: 2800,
        categoria: "pro",
        img: "./ imagenes / 3 Pro / Equipo pro 5.jpg",
        description: "Mod compatible con baterias 21700, 20700 y 18650",
        alt: "Mod para vapeo, de marca Augvape, modelo VX217"
    },
    {
        id: 16,
        marca: "HELLVAPE",
        modelo: "AREZ",
        precio: 2800,
        categoria: "pro",
        img: "./ imagenes / 3 Pro / Equipo pro 6.jpg",
        description: "Mod de baja potencia pero de una bateria",
        alt: "Mod para vapeo, de marca Hellvape, modelo Arez"
    },
    {
        id: 17,
        marca: "KING CREST",
        modelo: "DON JUAN",
        precio: 1200,
        categoria: "",
        img: "./ imagenes / Eliquids / King Crest / king crest 1.jpg",
        description: "La versión reserva del popular sabor Don Juan",
        alt: "eliquid de marca King Crest sabor Don Juan"
    },
    {
        id: 18,
        marca: "KING CREST",
        modelo: "ALIEN POP",
        precio: 1200,
        categoria: "",
        img: "./ imagenes / Eliquids / King Crest / alien pop.webp",
        description: "Chupetín de frutilla que pareciera ser de otro mundo",
        alt: "Eliquid de la marca King Crest, sabor Alien Pop, chupetin de frutilla"
    },
    {
        id: 19,
        marca: "KING CREST",
        modelo: "PLANET POP",
        precio: 1200,
        categoria: "",
        img: "./ imagenes / Eliquids / King Crest / planet pops blue.jpg",
        description: "Sabor a caramelo de frutos rojos y arándanos",
        alt: "Eliquid de la marca King Crest, sabor Planet Pop, sabor a frutos rojos y arandanos"
    },
    {
        id: 20,
        marca: "ICE MONSTER",
        modelo: "MIXED BERRY ICE",
        precio: "",
        categoria: 1500,
        img: "./ imagenes / Eliquids / Ice Monster / ice monster 1.png",
        description: "Sabrosos frutos rojos congelados",
        alt: "Eliquid de marca Ice Monster con sabor a frutos rojos frescos"
    },
    {
        id: 21,
        marca: "ICE MONSTER",
        modelo: "MANDARINA Y GUAYAVA",
        precio: "",
        categoria: 1500,
        img: "./ imagenes / Eliquids / Ice Monster / ice monster 2.png",
        description: "Combinación de mandarina y guayaba refrescante",
        alt: "Eliquid de marca Ice Monster con sabor a mandarina y guayava con un golpe fresco"
    },
    {
        id: 22,
        marca: "ICE MONSTER",
        modelo: "MELON COLADA",
        precio: 1500,
        categoria: "",
        img: "./ imagenes / Eliquids / Ice Monster / ice monster 3.jpg",
        description: "Sabor a melón, con frutas tropicales y un golpe fresco",
        alt: "Eliquid de marca Ice Monster con sabor a melón"
    },
    {
        id: 23,
        marca: "ICE MONSTER",
        modelo: "STRAWMELON - APPLE",
        precio: "",
        categoria: 1500,
        img: "./ imagenes / Eliquids / Ice Monster / ice monster 4.jpg",
        description: "Sandías y frutillas... Pero en un invierno en tu boca",
        alt: "Eliquid de marca Ice Monster con sabor a sandía y frutilla, con un final fresco"
    },
    {
        id: 24,
        marca: "ICE MONSTER",
        modelo: "BANANA ICE",
        precio: 1500,
        categoria: "",
        img: "./ imagenes / Eliquids / Ice Monster / ice monster 5.webp",
        description: "Sabor fiel a Banana, con un golpe frío al paladar",
        alt: "Eliquid de marca Ice Monster con sabor a banana y un golpe fresco"
    },
    {
        id: 25,
        marca: "ICE MONSTER",
        modelo: "ACID ICE",
        precio: 1500,
        categoria: "",
        img: "./ imagenes / Eliquids / Ice Monster / ice monster 6.jpg",
        description: "Frutos rojos, frutillas y limón con un final fresco",
        alt: "Eliquid de marca Ice Monster con sabor a frutos rojos, limon y frutillas con un golpe fresco"
    },
    {
        id: 26,
        marca: "VAPETASIA",
        modelo: "KILLER KUSTARD",
        precio: 1400,
        categoria: "",
        img: "./ imagenes / Eliquids / Vapetasia / vapetasia.webp",
        description: "Sabor vainilla y crema",
        alt: "Eliquid de marca Vapetasia con sabor a vainilla y crema"
    },
    {
        id: 27,
        marca: "VAPETASIA",
        modelo: "RAINBOW ROAD",
        precio: 1400,
        categoria: "",
        img: "./ imagenes / Eliquids / Vapetasia / vapetasia 2.webp",
        description: "Cereal con leche y frutos rojos",
        alt: "Eliquid de marca Vapetasia con sabor a cereal con leche y frutos rojos"
    },
    {
        id: 28,
        marca: "VAPETASIA",
        modelo: "ROYALTY TWO",
        precio: 1400,
        categoria: "",
        img: "./imagenes/Eliquids/Vapetasia/vapetasia 3.png",
        description: "Tabaco, crema, vainilla y nueces",
        alt: "Eliquid de marca Vapetasia con sabor a tabaco, crema, vainilla y nueces"
    }
]

export default productos