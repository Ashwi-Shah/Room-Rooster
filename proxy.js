const corsAnywhere = require('cors-anywhere');
const port = process.env.PORT || 8080;

corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['x-powered-by']
}).listen(port, () => {
    console.log(`CORS Anywhere proxy is running on port ${port}`);
});