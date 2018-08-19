export class ResourceSettings {
    metaid: string;
    chunk: string;
    ncpu: string;
    mem: string;
    cluster: string;
    queuename: string;

    /**
     * Commented out since the keys are not ready to be used yet
     */

    // gpu: string;
    // clockspeed: string;
    // price: string;

    constructor(obj?: ResourceSettings) {
        this.metaid = '';
        this.chunk = '';
        this.ncpu = '';
        this.mem = '';
        this.cluster = '';
        this.queuename = '';

        // this.gpu = '';
        // this.clockspeed = '';
        // this.price = '';

        if (obj) {
            this.metaid = obj.metaid ? obj.metaid : '';
            this.chunk = obj.chunk ? obj.chunk : '';
            this.ncpu = obj.ncpu ? obj.ncpu : '';
            this.mem = obj.mem ? obj.mem : '';
            this.cluster = obj.cluster ? obj.cluster : '';
            this.queuename = obj.queuename ? obj.queuename : '';

            // this.gpu = obj.gpu ? obj.gpu : '';
            // this.clockspeed = obj.clockspeed ? obj.clockspeed : '';
            // this.price = obj.price ? obj.price : '';
        }
    }
}
