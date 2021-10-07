export class TareaPendiente {
    public nombreTarea: string
    public done: boolean
    constructor(nombreTarea: string, done?: boolean) {
        this.done = done ? done : false;
        this.nombreTarea = nombreTarea;
    }
}