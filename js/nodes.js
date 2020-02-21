export const NodesAPI = superclass =>
    class extends superclass {
        async listNodes() {
            const url = `${this.baseUrl}nodes`;
            const contents = await this.get(url);
            return contents;
        }
    };

export default NodesAPI;
