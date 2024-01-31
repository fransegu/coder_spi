import mongoose from "mongoose";



const URI="mongodb+srv://franciscosegu:Riverplate92@cluster0.gjwkb4d.mongodb.net/2daPreEntrega?retryWrites=true&w=majority";

mongoose.connect(URI)
    .then(() => console.log("conectado a BD"))
    .catch((error) => console.log(error));