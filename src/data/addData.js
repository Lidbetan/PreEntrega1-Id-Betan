//Componente que se encarga de agregar productos a la base de datos de firebase.
import {collection, addDoc, getFirestore} from "firebase/firestore"

const data = [
    {
        category: "Rock",
        description: "Black t-shirt with purple Black Sabbath logo",
        img: "https://i.postimg.cc/VvMpHcqf/black-sabbath.png",
        price: 14.99,
        stock: 6,
        title: "Black Sabbath"
    },
    {
        category: "Rock",
        description: "Black t-shirt with AC/DC Highway to Hell neon logo.",
        img: "https://i.postimg.cc/WbLQqhVh/ac-dc-highway.png",
        price: 14.99,
        stock: 8,
        title: "AC/DC Highway to Hell"
    },
    {
        category: "Rock",
        description: "Black t-shirt with Rolling Stones logo",
        img: "https://i.postimg.cc/MZjCG1hC/stones.png",
        price: 14.99,
        stock: 6,
        title: "Rolling Stones"
    },
    {
        category: "Rock",
        description: "Black t-shirt with Pink Floyd  The Dark Side of the Moon logo",
        img: "https://i.postimg.cc/bwVdPdn8/dark-side.png",
        price: 14.99,
        stock: 4,
        title: "Pink Floyd The Dark Side of the Moon"
    },
    {
        category: "Rock",
        description: "Black t-shirt with Led Zeppelin IV logo",
        img: "https://i.postimg.cc/6ppTFCyY/led-zepp.png",
        price: 14.99,
        stock: 4,
        title: "Led Zeppelin IV"
    },
    {
        category: "D&D",
        description: "Black t-shirt with blue Beholder image",
        img: "https://i.postimg.cc/fb3yRZ7d/beholder.png",
        price: 14.99,
        stock: 6,
        title: "The Beholder"
    },
    {
        category: "D&D",
        description: "Black t-shirt with roll 1, epic fail.",
        img: "https://i.postimg.cc/KvNR90v1/fail.png",
        price: 14.99,
        stock: 8,
        title: "Roll one, you failed"
    },
    {
        category: "D&D",
        description: "Black t-shirt with Wizard Class logo",
        img: "https://i.postimg.cc/RZhRPP1r/wizard.png",
        price: 14.99,
        stock: 6,
        title: "D&D Wizard"
    },
    {
        category: "D&D",
        description: "Black t-shirt with Rogue Class Logo",
        img: "https://i.postimg.cc/Gm4FP4rd/rogue.png",
        price: 14.99,
        stock: 4,
        title: "D&D Rogue"
    },
    {
        category: "D&D",
        description: "Black t-shirt with Paladin Class logo",
        img: "https://i.postimg.cc/LsMJq58y/paladin.png",
        price: 14.99,
        stock: 4,
        title: "D&D Paladin"
    }
]

const addData = () => {
    const db = getFirestore();
    const colRef = collection(db, "products");
    /*addDoc agrega documentos a la colección, en este caso vamos a tener que iterar
    por cada objeto dentro del arreglo, para agregarlos a todos*/
    for (let item of data) {
        addDoc(colRef, item)
            .then(res => console.log("Se inserto en la db", res))
            .catch (err=> console.log(err))
    }

}

export default addData
