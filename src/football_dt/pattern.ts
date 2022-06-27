export interface ICommand {
    execute(): string;
}

abstract class Command implements ICommand {
    constructor(protected plantel: Plantel) {
        this.plantel = plantel
    }
    abstract execute(): string;
}

export class EntrenarCommand extends Command {
    execute(): string {
        return this.plantel.entrenar()
    }
}

export class DescansarCommand extends Command {
    execute(): string {
        return this.plantel.descansar()
    }
}

export class JugarCommand extends Command {
    execute(): string {
        return this.plantel.jugar()
    }
}

export class Plantel {
    entrenar(): string {
        return 'Estamos entrenando';
    }
    descansar(): string {
        return 'Estamos descansando'
    }
    jugar(): string {
        return 'Estamos jugando'
    }
}

export class DirectorTecnico {
    orden: ICommand

    setOrden(orden: ICommand) {
        this.orden = orden
    }
    ordenar(): string {
        return this.orden.execute()
    }
}


