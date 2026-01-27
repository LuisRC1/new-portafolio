const proyectos = [
    {
        titulo: "Foro Hub - Java Backend REST API",
        fecha: "",
        descripcion: "Designed and developed a RESTful backend API using Java and Spring Boot, implemented CRUD operations with input validation, integrated PostgreSQL for persistent data storage, secured endpoints using authentication and authorization mechanisms, followed clean architecture and REST best practices.",
        link: "https://github.com/LuisRC1/forohub"
        imagen: "foroHub.png",
        tecnologias: ["Java", "Spring Boot", "PostgreSQL"]
    },
    {
        titulo: "Literatura - Backend Application",
        fecha: "",
        descripcion: "Developed a searchable literary database backend, implemented book search by title and language, enabled author queries by name and publication year, and designed APIs to support data visualization and downloads.",
        link: "https://github.com/LuisRC1/literalura",
        imagen: "literalura.png",
        tecnologias: ["Java", "Spring Boot", "PostgreSQL"]
    },
    {
        titulo: "New portfolio - Website",
        fecha: "January 2025",
        descripcion: "",
        link: "https://new-portafolio-murex.vercel.app/",
        imagen: "newPortafolio2.png",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
        titulo: "Currency Converter - Java Application",
        fecha: "November 2024",
        descripcion: "Built a Java-based currency converter, integrated Gson and the ExchangeRate API, implemented conversions between ARS, BRL, COP, and USD, added robust input validation for scalability and reuse.",
        link: "https://github.com/LuisRC1/conversordemonedas",
        imagen: "conversorDeMonedas.png",
        tecnologias: ["Java", "Gson", "ExchangeRate-API", "IntelliJ IDEA"]
    },
    {
        titulo: "Text Encryptor - Web Application",
        fecha: "From July 2024 - August 2024",
        descripcion: "Developed a text encryption and decryption tool using HTML, CSS, and JavaScript with custom encryption rules and copy-to-clipboard functionality to enhance the user experience.",
        link: "https://encriptador-de-texto-ivory-theta.vercel.app/",
        imagen: "encriptadorDeTexto.png",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
        titulo: "Portfolio - Website",
        fecha: "From July 2024 - August 2024",
        descripcion: "",
        link: "https://portafolio-pi-coral.vercel.app/",
        imagen: "portafolioOld.png",
        tecnologias: ["HTML", "CSS"]
    },
    {
        titulo: "Secret Number Game - Web Application",
        fecha: "From June 2024 - July 2024",
        descripcion: "Developed a number-guessing game with random number generation, implemented hints and reset functionality for replayability.",
        link: "https://luisrc1.github.io/juego-secreto/",
        imagen: "juegoSecreto.png",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    }
];

const informacionPersonal = {
    nombre: "Luis Rivas",
    subtitulo: "Java rfg rtytrDeveloper",
    imagen: "img/IMG_20210226_223100.jpg",
    otros: [
        ["Nationality", "Mexican"], 
        [
            "Age",
            new Date(new Date() - new Date("1993/07/10")).getFullYear() - 1970 + " years old",
        ]
    ],
    idiomas: [
        ["Spanish", "Native"],["English", "Intermediate"]
    ],
    tecnologias: [
        ["Java", 7],["Spring Boot", 6],["PostgreSQL", 6],["MySQL", 6],["HTML", 7],
        ["CSS",6],["Javascript",6]
    ],
    redes: [
        ["GitHub", "https://github.com/LuisRC1"],
        ["LinkedIn", "https://www.linkedin.com/in/luis-rivas-c/"]
    ]
};