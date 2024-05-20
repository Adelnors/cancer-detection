const crypto = require('crypto');
const predict = require('../services/inferenceService');
const { storeData, readData } = require('../services/firestoreService');
// const storeData = require('../services/storeModel');
// const readData = require('../services/readModel');
// const { preProcessingImage, predict } = require('../services/loadModel');


async function postPredictHandler(request, h) {
    const { image } = request.payload;
    const { model } = request.server.app;

    const prediction = await predict(model, image);


    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const data = {
        "id": id,
        "result": prediction.label,
        "suggestion": prediction.suggestion,
        "createdAt": createdAt
    }

    //await storeData(id, data);

    const response = h.response({
        status: 'success',
        message: 'Model is predicted successfully',
        data: data
    })
    response.code(201);
    return response;
}

async function getPredictHistoriesHandler(request, h) {
    // const data = await readData();
    return {
        status: 'success',
        message: 'Prediction histories received',
        data: data
    }
}

module.exports = postPredictHandler, getPredictHistoriesHandler;