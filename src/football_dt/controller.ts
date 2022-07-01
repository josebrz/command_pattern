import { Request, Response } from "express";
import { DirectorTecnico, Plantel } from "./pattern";
import {getCommand, Ordenes} from "./utils";

const directorTecnico = new DirectorTecnico();

export const orden = (req: Request, res: Response) => {
    try {
        const { orden } = req.query
        const cmd = getCommand(orden as Ordenes)
        directorTecnico.setOrden(cmd)
        res.render(`pages/${orden}`, {message: directorTecnico.ordenar()})
    } catch (err) {
        console.log(err)
        res.send( 'Error al ejecutar orden')
    }
}

