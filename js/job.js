export const JobAPI = superclass =>
    class extends superclass {
        async listJobs() {
            const url = `${this.baseUrl}jobs`;

            const contents = await this.get(url);
            return contents;
        }

        async showJob(id) {
            const url = `${this.baseUrl}jobs/${id}`;

            const contents = await this.get(url);
            return contents;
        }

        async createJob(jobParams, output = false) {
            const url = new URL(this.baseUrl);

            if (output !== undefined && output !== null) {
                url.searchParams.append("output", output ? "1" : "0");
            }

            for (const [key, value] of Object.entries(jobParams)) {
                url.searchParams.append(key, value);
            }

            const response = await this.get(url);
            return response;
        }

        async cancelJob(id) {
            const url = `${this.baseUrl}jobs/${id}/cancel`;

            const contents = await this.put(url);
            return contents;
        }
    };

export default JobAPI;
