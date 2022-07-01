import {ICommand} from "./pattern";
import {EntrenarCommand, DescansarCommand, JugarCommand, Plantel} from "./pattern";

export enum Ordenes {
    entrenar = 'entrenar',
    descansar = 'descansar',
    jugar = 'jugar'
}

interface Commands {
    entrenar: EntrenarCommand;
    descansar: DescansarCommand;
    jugar: JugarCommand
}

const plantel = new Plantel();

export const getCommand = (orden: Ordenes): ICommand  => {
    const commands: Commands = {
        entrenar: new EntrenarCommand(plantel),
        descansar: new DescansarCommand(plantel),
        jugar: new JugarCommand(plantel)
    }
    return commands[orden]
}