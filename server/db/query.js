const dbo = require("./conn");
const ObjectId = require("mongodb").ObjectId;

async function getReviewsByProductId(productId) {
    const db_connect = dbo.getDb();
    return db_connect.collection("reviews").find({ productId: (productId) }).toArray();
}

async function getReviewById(id) {
    const db_connect = dbo.getDb();
    const query = { _id: new ObjectId(id) };
    return db_connect.collection("reviews").findOne(query);
}

async function createReview(data) {
    const db_connect = dbo.getDb();
    return db_connect.collection("reviews").insertOne(data);
}

async function updateReview(id, data) {
    const db_connect = dbo.getDb();
    const query = { _id: new ObjectId(id) };
    const newValues = { $set: data };
    return db_connect.collection("reviews").updateOne(query, newValues);
}


async function deleteReview(id) {
    const db_connect = dbo.getDb();
    const query = { _id: new ObjectId(id) };
    return db_connect.collection("reviews").deleteOne(query);
}

module.exports = {
    getReviewsByProductId,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
};
