const proyectos = [
    {
        titulo: "Foro Hub (Currently in development)",
        fecha: "2026",
        descripcion: "Our API will manage topics with full CRUD, RESTful routes, validations, database integration, and secure access through authentication and authorization.",
        link: "https://github.com/LuisRC1?tab=repositories",
        imagen: "foroHub.png",
        tecnologias: ["Java", "Spring Boot", "SQL"]
    },
    {
        titulo: "Literalura (Currently in development)",
        fecha: "2026",
        descripcion: "Developing a searchable literary database using Java, Spring Boot, and PostgreSQL, enabling users to filter books by name or language, explore authors by name or year, and view top downloads.",
        link: "https://github.com/LuisRC1/literalura",
        imagen: "literalura.png",
        tecnologias: ["Java", "Spring Boot", "PostgreSQL"]
    },
    {
        titulo: "Nuevo portafolio",
        fecha: "January 2025",
        descripcion: "Created a new portfolio",
        link: "https://new-portafolio-murex.vercel.app/",
        imagen: "newPortafolio2.png",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
        titulo: "Conversor de monedas",
        fecha: "November 2024",
        descripcion: "Built a Java-based currency converter in IntelliJ IDEA using Gson and ExchangeRate-API, enabling conversion between ARS, BRL, COP, and USD with robust input validation for reusability.",
        link: "https://github.com/LuisRC1/conversordemonedas",
        imagen: "conversorDeMonedas.png",
        tecnologias: ["Java", "Gson", "ExchangeRate-API", "IntelliJ IDEA"]
    },
    {
        titulo: "Encriptador de texto",
        fecha: "From July 2024 - August 2024",
        descripcion: "Implemented a text encryption and decryption tool using HTML, CSS, and JavaScript, excludes uppercase letters, accents, and special characters, with a copy-to-clipboard feature for easy reuse.",
        link: "https://encriptador-de-texto-ivory-theta.vercel.app/",
        imagen: "encriptadorDeTexto.png",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
        titulo: "Portafolio",
        fecha: "From July 2024 - August 2024",
        descripcion: "Created my first portfolio",
        link: "https://portafolio-pi-coral.vercel.app/",
        imagen: "portafolioOld.png",
        tecnologias: ["HTML", "CSS"]
    },
    {
        titulo: "Juego secreto",
        fecha: "From June 2024 - July 2024",
        descripcion: "Developed a number-guessing game using HTML, CSS, and JavaScript that generates a random number from 1 to 10, provides clues for the user, and includes a reset button for replayability.",
        link: "https://luisrc1.github.io/juego-secreto/",
        imagen: "juegoSecreto.png",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    }
];

const informacionPersonal = {
    nombre: "Luis Rivas",
    subtitulo: "Java Developer",
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
        ["Java", 8],["Spring Boot", 7],["SQL", 7],["HTML", 8],["CSS", 8],
        ["Javascript",6],["C",6]
    ],
    redes: [
        ["GitHub", "https://github.com/LuisRC1"],
        ["LinkedIn", "https://www.linkedin.com/in/luis-rivas-c/"]
    ]
};