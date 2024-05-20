const postPredictHandler = require("./handler");
const getPredictHistoriesHandler = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/predict',
        handler: postPredictHandler,
        options: {
            payload: {
                maxBytes: 1000000,
                allow: 'multipart/form-data',
                multipart: true,
            }
        }
    },
    {
        method: 'GET',
        path: '/predict/histories',
        handler: getPredictHistoriesHandler,
    }

]

module.exports = routes;