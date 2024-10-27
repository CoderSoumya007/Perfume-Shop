import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Facebook, Instagram, Twitter, Share2, Star, X, ShoppingCart } from 'lucide-react';

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({
        rating: 5,
        comment: '',
        author: ''
    });
    const [mainImage, setMainImage] = useState('');
    const [showSharePopup, setShowSharePopup] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false);

    useEffect(() => {
        const fetchProductAndReviews = async () => {
            try {
                const productRes = await axios.get(`https://perfume-shop-server.vercel.app/api/products/${id}`);
                setProduct(productRes.data.data);
                setMainImage(productRes.data.data.images.main);
                setSelectedSize(productRes.data.data.sizes[0]);
                const reviewsRes = await axios.get(`https://perfume-shop-server.vercel.app/api/reviews/${id}`);
                setReviews(reviewsRes.data.data[0].reviews);
            } catch (error) {
                console.error('Error fetching product or reviews:', error);
            }
        };
        fetchProductAndReviews();
    }, [id]);

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        try {
            const reviewData = {
                productId: id,
                reviews: [newReview]
            };
            const res = await axios.post(`https://perfume-shop-server.vercel.app/api/reviews/${id}`, reviewData);
            setReviews([...reviews, ...res.data.data.reviews]);
            setNewReview({
                rating: 5,
                comment: '',
                author: ''
            });
            setShowReviewForm(false);
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleShare = (platform) => {
        console.log(`Sharing on ${platform}`);
        setShowSharePopup(false);
    };

    if (!product) return <div className="container mx-auto px-4 py-8">Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img src={mainImage} alt={product.name} className="w-full h-96 object-cover rounded-lg mb-4" />
                    <div className="grid grid-cols-4 gap-2">
                        {product.images.gallery.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.name} ${index + 1}`}
                                className="w-full h-24 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
                                onClick={() => setMainImage(image)}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <h2 className="text-xl text-gray-600 mb-4">{product.brand}</h2>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Available Sizes:</h3>
                        <div className="flex space-x-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size._id}
                                    className={`px-4 py-2 border rounded-md transition-colors ${
                                        selectedSize && selectedSize._id === size._id
                                            ? 'bg-purple-600 text-white'
                                            : 'border-gray-300 hover:bg-purple-100'
                                    }`}
                                    onClick={() => handleSizeChange(size)}
                                >
                                    {size.volume}
                                </button>
                            ))}
                        </div>
                    </div>
                    {selectedSize && (
                        <p className="text-2xl font-bold text-purple-600 mb-4">
                            ${selectedSize.price.toFixed(2)}
                        </p>
                    )}
                    <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300 flex items-center">
                        <ShoppingCart className="mr-2" />
                        Add to Cart
                    </button>
                    <button 
                        className="ml-4 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
                        onClick={() => setShowSharePopup(true)}
                    >
                        Share
                    </button>
                </div>
            </div>
            <div className="mt-12">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Customer Reviews</h2>
                    <button 
                        className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
                        onClick={() => setShowReviewForm(true)}
                    >
                        Write a Review
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {reviews.map((review, index) => (
                        <div key={review._id || index} className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105">
                            <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                ))}
                                <span className="ml-2 text-gray-600">{review.rating}/5</span>
                            </div>
                            <p className="text-gray-800 mb-2 font-medium">{review.comment}</p>
                            <p className="text-sm text-gray-500">By {review.author} on {new Date(review.createdAt).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            </div>

            {showSharePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">Share this product</h3>
                            <button onClick={() => setShowSharePopup(false)} className="text-gray-500 hover:text-gray-700">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex space-x-4">
                            <button onClick={() => handleShare('Facebook')} className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                                <Facebook className="w-6 h-6" />
                            </button>
                            <button onClick={() => handleShare('Instagram')} className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
                                <Instagram className="w-6 h-6" />
                            </button>
                            <button onClick={() => handleShare('Twitter')} className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                                <Twitter className="w-6 h-6" />
                            </button>
                            <button onClick={() => handleShare('WhatsApp')} className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                                <Share2 className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showReviewForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">Write a Review</h3>
                            <button onClick={() => setShowReviewForm(false)} className="text-gray-500 hover:text-gray-700">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <form onSubmit={handleReviewSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                                    Rating
                                </label>
                                <div className="flex space-x-1">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <button
                                            key={num}
                                            type="button"
                                            onClick={() => setNewReview({
                                                ...newReview,
                                                rating: num
                                            })}
                                            className="focus:outline-none"
                                        >
                                            <Star className={`w-8 h-8 ${num <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                                    Comment
                                </label>
                                <textarea
                                    id="comment"
                                    value={newReview.comment}
                                    onChange={(e) => setNewReview({
                                        ...newReview,
                                        comment: e.target.value
                                    })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="author"
                                    value={newReview.author}
                                    onChange={(e) => setNewReview({
                                        ...newReview,
                                        author: e.target.value
                                    })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}