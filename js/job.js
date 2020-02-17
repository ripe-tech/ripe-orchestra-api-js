export const JobAPI = superclass =>
    class extends superclass {
        async listJobs() {
            const url = `${this.baseUrl}jobs`;

            const contents = await this.get(url);
            return contents;
        }

        async createJob(jobParams, output = false) {
            const options = { params: {} };

            if (output !== undefined && output !== null) options.params.output = output ? "1" : "0";
            for (const [key, value] of Object.entries(jobParams)) options.params[key] = value;

            const response = await this.get(this.baseUrl, options);
            return response;
        }

        async showJob(id) {
            const url = `${this.baseUrl}jobs/${id}`;

            const contents = await this.get(url);
            return contents;
        }

        async cancelJob(id) {
            const url = `${this.baseUrl}jobs/${id}/cancel`;

            const contents = await this.put(url);
            return contents;
        }
    };

export default JobAPI;
