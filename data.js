const proyectos = [
    {
        titulo: "Foro Hub",
        fecha: "2025",
        descripcion: "Implemetación de un foro Hub",
        link: "",
        imagen: "portafolioOld.png",
        tecnologias: ["Java", "Spring Framework", "Spring Boot"]
    },
    {
        titulo: "Literalura",
        fecha: "2025",
        descripcion: "Implemetación de una biblioteca",
        link: "",
        imagen: "portafolioOld.png",
        tecnologias: ["Java", "Spring Framework", "Spring Boot"]
    },
    {
        titulo: "Conversor de monedas",
        fecha: "Noviembre 2024",
        descripcion: "Este proyecto calcula el valor de la divisa argentina, brasileña y colombiana a dólares y viceversa, consumiendo la \"ExchangeRate-API\".",
        link: "https://github.com/LuisRC1/conversordemonedas",
        imagen: "conversorDeMonedas.png",
        tecnologias: ["Java", "Gson", "ExchangeRate-API", "IntelliJ IDEA"]
    },
    {
        titulo: "Encriptador de texto",
        fecha: "Julio 2024 - agosto 2024",
        descripcion: "El proyecto ofrece una solución para encriptar y desencriptar texto, excluyendo mayúsculas, acentos y caracteres especiales. Incluye un botón para copiar el texto de salida, facilitando su reutilización en otras entradas de texto.",
        link: "https://encriptador-de-texto-ivory-theta.vercel.app/",
        imagen: "encriptadorDeTexto.png",
        tecnologias: ["HTML", "CSS", "Javascript"]
    },
    {
        titulo: "Portafolio",
        fecha: "Julio 2024 - agosto 2024",
        descripcion: "Portafolio sobre mi trayectoria profesional",
        link: "https://portafolio-pi-coral.vercel.app/",
        imagen: "portafolioOld.png",
        tecnologias: ["HTML", "CSS"]
    },
    {
        titulo: "Juego secreto",
        fecha: "Junio 2024 - julio 2024",
        descripcion: "Implemetación del juego secreto en Alura LATAM",
        link: "https://luisrc1.github.io/juego-secreto/",
        imagen: "juegoSecreto.png",
        tecnologias: ["HTML", "CSS", "Javascript"]
    }
];

const informacionPersonal = {
    nombre: "Luis Rivas",
    subtitulo: "Desarrollador Back-End",
    imagen: "img/IMG_20210226_223100.jpg",
    otros: [
        ["Nacionalidad", "Mexicana"], 
        [
            "Edad",
            new Date(new Date() - new Date("1993/07/10")).getFullYear() - 1970 + "años",
        ]
    ],
    idiomas: [
        ["Español", "Nativo"],["Inglés", "Conversacional"]
    ],
    tecnologias: [
        ["Java", 9],["Spring Framework", 8],["Spring Boot", 9],["HTML", 8],["CSS", 9],
        ["Javascript",7],["C",6],["Python",5]
    ],
    redes: [
        ["github", "https://github.com/LuisRC1"],
        ["linkedin", "https://www.linkedin.com/in/luis-rivas-c/"]
    ]
};