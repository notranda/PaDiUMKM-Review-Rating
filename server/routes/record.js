const express = require("express");
const reviewRoutes = express.Router();
const moment = require("moment-timezone");
const {
    getReviewsByProductId,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
} = require("../db/query");

reviewRoutes.route("/reviews/:productId").get(async (req, res) => {
    try {
        const result = await getReviewsByProductId(req.params.productId);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

reviewRoutes.route("/review/:id").get(async (req, res) => {
    try {
        const result = await getReviewById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

reviewRoutes.route("/review/add").post(async (req, res) => {
    const newReview = {
        userId: req.body.userId,
        productId: req.body.productId,
        rating: req.body.rating,
        comment: req.body.comment,
        timestamp: moment().tz("Asia/Jakarta").format() 
    };
    try {
        const result = await createReview(newReview);
        res.status(201).json(result);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

reviewRoutes.route("/review/update/:id").put(async (req, res) => {
    const updatedReview = {
        rating: req.body.rating,
        comment: req.body.comment,
        timestamp: moment().tz("Asia/Jakarta").format() 
    };
    try {
        const result = await updateReview(req.params.id, updatedReview);
        res.status(200).json(result);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

reviewRoutes.route("/review/:id").delete(async (req, res) => {
    try {
        const result = await deleteReview(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(204).json({ message: "Review not found!" });
    }
});

module.exports = reviewRoutes;
