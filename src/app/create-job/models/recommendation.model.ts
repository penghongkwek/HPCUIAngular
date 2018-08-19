let nextId = 0;

export class Recommendation {
    id?: string;
    title?: string;
    subtitle?: string;
    waitingtime?: string;
    walltime: string;
    price?: string;
    chunk: string;
    ncpu: string;
    mem: string;
    gpu?: string;
    clockspeed?: string;
    cluster: string;
    queuename?: string;

    constructor(obj?: Recommendation) {
        if (obj) {
            this.id = obj.id || `rec-card-${nextId++}`;
            this.title = obj.title || '';
            this.subtitle = obj.subtitle || '';
            this.waitingtime = obj.waitingtime || '';
            this.walltime = obj.walltime || '';
            this.price = obj.price || '';
            this.chunk = obj.chunk || '';
            this.ncpu = obj.ncpu || '';
            this.mem = obj.mem || '';
            this.gpu = obj.gpu || '';
            this.clockspeed = obj.clockspeed || '';
            this.cluster = obj.cluster || '';
            this.queuename = obj.queuename || '';
        }
    }
}
