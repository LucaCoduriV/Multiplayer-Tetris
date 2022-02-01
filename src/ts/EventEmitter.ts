/**
 * Cette classe permet de gérer les évènements.
 */
export default class EventEmitter<T extends Function> {
    private _listeners: Array<T>;
    constructor() {
        this._listeners = [];
    }
    /**
     * Permet d'écouter un évènement.
     * @param callback Le callback à émettre.
     */
    subscribe(callback: T): void {
        this._listeners.push(callback);
    }
    /**
     * Permet de d'arrêter d'écouter un évènement.
     * @variation Risque de changer dans le futur car les fonctions anonyme ne sont pas supportées.
     * @param callback Le callback à supprimer.
     */
    unsubscribe(callback: T): void {
        this._listeners = this._listeners.filter((listener) => listener !== callback);
    }
    /**
     * Permet de déclencher un évènement.
     * @param args Les arguments à envoyer à tous les listeners.
     */
    fire(...args: any[]): void {
        this._listeners.forEach((listener) => listener(...args));
    }
    /**
     * Permet de retirer tous les listeners.
     */
    unsubscribeAll(): void {
        this._listeners = [];
    }
}
