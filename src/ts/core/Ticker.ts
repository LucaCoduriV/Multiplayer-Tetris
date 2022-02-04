import EventEmitter from "../EventEmitter";

/**
 * La class Ticker permet d'emmettre des évènements à interval régulier.
 */
export default class Ticker {
    private _interval: number;
    private _timer: any | null;
    private eventEmmitter = new EventEmitter<() => void>();

    /**
     *
     * @param tickPerSecond Le nombre d'évènements par seconde.
     */
    constructor(tickPerSecond: number) {
        this._interval = 1000 / tickPerSecond;
    }
    /**
     * Démarre le ticker.
     */
    start(): void {
        this._timer = setInterval(() => {
            this.eventEmmitter.fire();
        }, this._interval);
    }

    /**
     * Permet de mettre à jour le ticker.
     * @param tickPerSecond Le nombre d'évènements par seconde.
     */
    updateTickPerSecond(tickPerSecond: number): void {
        this._interval = 1000 / tickPerSecond;
        this.stop();
        this.start();
    }

    /**
     * Arrête le ticker.
     */
    stop(): void {
        if (this._timer == null) return;
        clearInterval(this._timer);
        this._timer = null;
    }
    /**
     * Permet d'écouter un évènement.
     * @param callback Le callback à émettre.
     */
    subscribe(callback: () => void): void {
        this.eventEmmitter.subscribe(callback);
    }
    /**
     * Permet de d'arrêter d'écouter un évènement.
     * @variation Risque de changer dans le futur car les fonctions anonyme ne sont pas supportées.
     * @param callback Le callback à supprimer.
     */
    unsubscribe(callback: () => void): void {
        this.eventEmmitter.unsubscribe(callback);
    }
    /**
     * Permet de retirer tous les listeners.
     */
    unsubscribeAll(): void {
        this.eventEmmitter.unsubscribeAll();
    }
}
