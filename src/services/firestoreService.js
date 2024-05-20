const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore();

async function storeData(id, prediction) {
    const predictionCollection = db.collection('prediction');
    await predictionCollection.doc(id).set(prediction);
}

async function readData(request, h) {
    try {
        // ambil semua prediction data dari Firestore
        const snapshot = await db.collection('predictions').get();

        // arahkan data yang didapat kedalam variabel histories
        const histories = snapshot.docs.map(doc => ({
            id: doc.id,
            history: doc.data()
        }));

        return {
            status: 'success',
            data: histories
        };
    } catch (error) {
        console.error('Error fetching prediction histories:', error);
        return {
            status: 'error',
            message: 'Failed to fetch prediction histories'
        };
    }
}


module.exports = { storeData, readData };