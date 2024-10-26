import { useEffect,useState } from "react";
import Slider from "react-slick";
import axios from "axios"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard"

export default function HomePage() {
    const [products, setProducts] = useState([
        {
            "id": "N001",
            "name": "Paradoxe",
            "brand": "Prada",
            "description": "A modern floral ambery fragrance with notes of Calabrian bergamot, pear, neroli, jasmine sambac, bourbon vanilla, and white musk.",
            "sizes": [
              {
                "volume": "30ml",
                "price": 95.00
              },
              {
                "volume": "50ml",
                "price": 125.00
              },
              {
                "volume": "90ml",
                "price": 165.00
              }
            ],
            "images": {
              "main": "/images/image1.jpg",
              "gallery": [
                "/image/image1.jpg",
                "/image/image6.jpg",
                "/image/image3.jpg",
                "/image/image5.jpg"
              ]
            }
          },
          {
            "id": "N002",
            "name": "Flora Gorgeous Jasmine",
            "brand": "Gucci",
            "description": "A luminous floral fragrance featuring mandarin essence, jasmine grandiflorum, magnolia, and sandalwood.",
            "sizes": [
              {
                "volume": "30ml",
                "price": 89.00
              },
              {
                "volume": "50ml",
                "price": 120.00
              },
              {
                "volume": "100ml",
                "price": 158.00
              }
            ],
            "images": {
              "main": "/images/image2.jpg",
              "gallery": [
                "/image/image2.jpg",
                "/image/image4.jpg",
                "/image/image6.jpg",
                "/image/image1.jpg"
              ]
            }
          },
          {
            "id": "N003",
            "name": "Perfect Intense",
            "brand": "Marc Jacobs",
            "description": "An intense floral gourmand with night-blooming jasmine, golden roasted almonds, and sandalwood.",
            "sizes": [
              {
                "volume": "30ml",
                "price": 82.00
              },
              {
                "volume": "50ml",
                "price": 108.00
              },
              {
                "volume": "100ml",
                "price": 145.00
              }
            ],
            "images": {
              "main": "/images/image3.jpg",
              "gallery": [
                "/image/image3.jpg",
                "/image/image5.jpg",
                "/image/image2.jpg",
                "/image/image4.jpg"
              ]
            }
          },
          {
            "id": "N004",
            "name": "Idôle Aura",
            "brand": "Lancôme",
            "description": "A radiant floral fragrance with salted vanilla, jasmine grandiflorum, and sustainably sourced rose essence.",
            "sizes": [
              {
                "volume": "25ml",
                "price": 78.00
              },
              {
                "volume": "50ml",
                "price": 115.00
              },
              {
                "volume": "75ml",
                "price": 140.00
              }
            ],
            "images": {
              "main": "/images/image4.jpg",
              "gallery": [
                "/image/image4.jpg",
                "/image/image1.jpg",
                "/image/image6.jpg",
                "/image/image3.jpg"
              ]
            }
          },
          {
            "id": "N005",
            "name": "Luna Rossa Ocean",
            "brand": "Prada",
            "description": "A fresh aromatic fragrance with bergamot, pink pepper, iris, saffron, and suede notes.",
            "sizes": [
              {
                "volume": "50ml",
                "price": 98.00
              },
              {
                "volume": "100ml",
                "price": 132.00
              },
              {
                "volume": "150ml",
                "price": 175.00
              }
            ],
            "images": {
              "main": "/images/image5.jpg",
              "gallery": [
                "/image/image5.jpg",
                "/image/image2.jpg",
                "/image/image4.jpg",
                "/image/image6.jpg"
              ]
            }
          },
          {
            "id": "N006",
            "name": "Born in Roma Green Stravaganza",
            "brand": "Valentino",
            "description": "A vibrant green floral fragrance with Italian bergamot, green mandarin, and sustainable vanilla bourbon.",
            "sizes": [
              {
                "volume": "30ml",
                "price": 92.00
              },
              {
                "volume": "50ml",
                "price": 128.00
              },
              {
                "volume": "100ml",
                "price": 168.00
              }
            ],
            "images": {
              "main": "/images/image6.jpg",
              "gallery": [
                "/image/image6.jpg",
                "/image/image3.jpg",
                "/image/image1.jpg",
                "/image/image5.jpg"
              ]
            }
          }
    ]);
    const [latestCollections, setLatestCollections] = useState(
        products.slice(2,6)
    );

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const res = await axios.get("http://localhost:8080/api/products");
    //         console.log("data is ",res);
            

    //         setProducts(res.data);
    //         setLatestCollections(res.data.slice(8, 12));
    //     }
    //     fetchProducts();
    // }, [])

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const offerBanners = [
        {
            id: 1,
            title: "Summer Sale",
            description: "Get up to 50% off on selected fragrances",
            bgColor: "bg-blue-500",
        },
        {
            id: 2,
            title: "New Arrivals",
            description: "Discover our latest collection of luxury perfumes",
            bgColor: "bg-purple-500",
        },
        {
            id: 3,
            title: "Gift Sets",
            description: "Perfect presents for your loved ones",
            bgColor: "bg-pink-500",
        },
        {
            id: 4,
            title: "Exclusive Offer",
            description: "Buy 2 Get 1 Free on all designer fragrances",
            bgColor: "bg-green-500",
        },
        {
            id: 5,
            title: "Limited Edition",
            description: "Shop our exclusive limited edition scents",
            bgColor: "bg-yellow-500",
        },
    ];


    return (
        <div className="container mx-auto px-4">
            <div className="my-8">
                <Slider {...sliderSettings}>
                    {offerBanners.map((banner) => (
                        <div key={banner.id} className={`${banner.bgColor} text-white text-center py-16 px-4 rounded-lg`}>
                            <h2 className="text-3xl font-bold mb-2">{banner.title}</h2>
                            <p className="text-xl">{banner.description}</p>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="my-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Latest Collections</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {latestCollections.map((product)=>(
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>

            <div className="my-12">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    All fragrances
                </h2>
                <div className="grid grid-col1 sm:grid-cols-2 lg:grid-cols-3 xl:grid gridcols-4 gap-6">
                    {products.map((product)=>(
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    )
}