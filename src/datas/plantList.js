import monstera from "../assets/monstera.jpg";
import aloe from "../assets/aloe.jpg";
import basilic from "../assets/basilic.jpg";
import ficus from "../assets/ficus-lyrata.jpg";
import geranium from "../assets/geranium.jpg";
import olivier from "../assets/olivier.jpg";
import pothos from "../assets/pothos-argenté.jpg";
import succulente from "../assets/succulente.jpg";
import yucca from "../assets/yucca.jpg";

export const plantList = [
    {
        name: "monstera",
        description:
            "Ce sont des lianes sempervirentes, pouvant grimper dans les arbres jusqu'à 20 m de hauteur. Ces lianes produisent des racines aériennes qui renforcent l'accrochage de la plante sur son support et qui peuvent aussi rejoindre le sol pour s'y replanter.",
        category: "classique",
        id: "1ed",
        light: 2,
        water: 3,
        cover: monstera,
    },
    {
        name: "ficus lyrata",
        description:
            "En intérieur, Ficus lyrata est une belle plante verte, dressée et au feuillage exubérant. Ses feuilles sont grandes, longues de 16 à 30 cm, alternes, entières, en forme de lyre, légèrement ondulée, mais surtout caractérisées par leur limbe coriace et lustré, vert vif au revers plus clair, nettement nervuré.",
        category: "classique",
        id: "2ab",
        light: 3,
        water: 1,
        cover: ficus,
    },
    {
        name: "pothos argenté",
        description:
            "Le Pothos argenté est une plante tropicale grimpante originaire d'Asie. Faisant partie de la famille des Araceae, il est caractérisé par son feuillages en forme d'As et ses taches d'argent. Pouvant supporter des températures allant jusqu'à 15°C, le pothos argenté est un bon compagnon d'intérieur.",
        category: "classique",
        id: "3sd",
        light: 1,
        water: 2,
        cover: pothos,
    },
    {
        name: "yucca",
        description:
            "Yucca est un genre de 40-50 espèces de plantes vivaces arbustives remarquables par leurs rosettes de feuilles dures, en forme d'épée, et par les grappes de fleurs blanches ou tirant sur le blanc.",
        category: "classique",
        id: "4kk",
        light: 3,
        water: 1,
        cover: yucca,
    },
    {
        name: "olivier",
        description:
            "Ses feuilles, persistantes en hiver, sont opposées, ovales, allongées, portées par un court pétiole, coriaces, entières, enroulées sur les bords, d'un vert foncé luisant sur la face supérieure et d'un vert clair argenté avec une nervure médiane saillante sur la face inférieure.",
        category: "extérieur",
        id: "5pl",
        light: 3,
        water: 1,
        cover: olivier,
    },
    {
        name: "géranium",
        description:
            "Geranium est un genre de plantes herbacées sauvages de la famille des Geraniaceae. Le genre comporte environ 430 espèces répertoriées, distribuées partout dans le monde.",
        category: "extérieur",
        id: "6uo",
        light: 2,
        water: 2,
        cover: geranium,
    },
    {
        name: "basilique",
        description:
            "Originaire d'Inde, c'est une plante herbacée vivace éphémère, la plupart du temps cultivée comme une annuelle sous nos climats, au port buissonnant, de 20 à 50 cm de hauteur.",
        category: "extérieur",
        id: "7ie",
        light: 2,
        water: 3,
        cover: basilic,
    },
    {
        name: "aloe",
        description:
            "L'Aloe vera fleurit annuellement en hiver. Ses fleurs sont rouges, jaunes ou orange et apparaissent sur une hampe. Elle produit de nombreuses et longues racines ainsi que des rejets à son pied. Les bienfaits de cette espèce sont connus depuis l'Antiquité par les civilisations du monde entier.",
        category: "plante grasse",
        id: "8fp",
        light: 2,
        water: 1,
        cover: aloe,
    },
    {
        name: "succulente",
        description:
            "Le feuillage de ces succulentes peut être vert très vif ou vert foncé, gris ou pourpre, lisse ou velu. Selon les espèces, le genre Sempervivum fleurit d'avril à août. Leurs tiges florales peuvent atteindre 20 cm de haut. Les fleurs peuvent être roses, rouges et parfois jaunes.",
        category: "plante grasse",
        id: "9vn",
        light: 2,
        water: 1,
        cover: succulente,
    },
];
