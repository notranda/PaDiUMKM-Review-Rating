const dbo = require("./conn");
const ObjectId = require("mongodb").ObjectId;

async function getReviewsByProductId(productId) {
    const db_connect = dbo.getDb();
    
    return db_connect.collection("reviews").aggregate([
        {
            $match: { productId: productId }
        },
        {
            $lookup: {
                from: "userdata",         
                localField: "userId",     
                foreignField: "userId",   
                as: "userDetails"         
            }
        },
        {
            $unwind: "$userDetails"     
        },
        {
            $project: {
                _id: 1,
                productId: 1,
                rating: 1,
                comment: 1,
                timestamp: 1,
                media: 1,
                "userDetails.userName": 1 
            }
        }
    ]).toArray();
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
