import { API as BaseAPI, mix, load, conf } from "yonius";
import { JobAPI } from "./job";
import { NodesAPI } from "./nodes";

const RIPE_ORCHESTRA_BASE_URL = "https://ripe-orchestra.platforme.com/";

export class API extends mix(BaseAPI).with(JobAPI, NodesAPI) {
    constructor(kwargs = {}) {
        super(kwargs);
        this.baseUrl = conf("RIPE_ORCHESTRA_BASE_URL", RIPE_ORCHESTRA_BASE_URL);
        this.token = conf("RIPE_ORCHESTRA_TOKEN", null);
        this.baseUrl = kwargs.baseUrl === undefined ? this.baseUrl : kwargs.baseUrl;
        this.token = kwargs.token === undefined ? this.token : kwargs.token;
    }

    static async load() {
        await load();
    }

    async build(method, url, options = {}) {
        await super.build(method, url, options);
        options.headers = options.params !== undefined ? options.headers : {};
        options.kwargs = options.kwargs !== undefined ? options.kwargs : {};
        const auth = options.kwargs.auth === undefined ? true : options.kwargs.auth;
        delete options.kwargs.auth;
        if (auth) {
            options.headers.Authorization = `Bearer ${this.token}`;
        }
    }
}

export default API;
