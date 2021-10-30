// Co-authored-by: abarad-11 <temp.abe5430@gmail.com>

const { db, } = require('./models/');

/**
 * Start the server.
 */
async function run() {
    const {app, server} = await db.server({
        path: '/db', // (optional)
        port: 3000,  // (optional)
        cors: true,   // (optional), enable CORS-headers
        startServer: true, // (optional), start express server
        // options of the pouchdb express server
        pouchdbExpressOptions: {
            inMemoryConfig: true, // do not write a config.json
            logPath: 'rxdb-server-log.txt' // save logs in tmp folder
        }
    });

    app.get('/health', (req, res) => {
        res.json({status: 'healthy', message: req.query.hello});
    })
};

run();