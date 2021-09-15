import { _api } from "./api";



export const findReviews = () => _api.get('/');

export const createReviews = (data) => {
    _api.post('/create_reviews')
}

export const updateReviews = (data) => {
    _api.post('/create_reviews')
}
