const ripeOrchestra = require("..");

async function run() {
    await ripeOrchestra.API.load();
    const api = new ripeOrchestra.API();
    try {
        console.info(await api.listJobs());
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`);
    }

    try {
        console.info(await api.listNodes());
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`);
    }
}

run();
