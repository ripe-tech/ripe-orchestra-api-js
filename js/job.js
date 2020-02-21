export const JobAPI = superclass =>
    class extends superclass {
        async listJobs() {
            const url = `${this.baseUrl}jobs`;
            const contents = await this.get(url);
            return contents;
        }

        async createJob(payload) {
            const params = {
                ...payload,
                output:
                    payload.output !== undefined && payload.output !== null
                        ? payload.output
                            ? "1"
                            : "0"
                        : null
            };
            const response = await this.get(this.baseUrl, { params });
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
