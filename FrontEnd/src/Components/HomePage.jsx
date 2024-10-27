import { useEffect,useState } from "react";
import Slider from "react-slick";
import axios from "axios"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard"

export default function HomePage() {
    const [products, setProducts] = useState([]);
    const [latestCollections, setLatestCollections] = useState(
        products.slice(2,6)
    );

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get("https://perfume-shop-server.vercel.app/api/products");
            console.log("data is ",res.data.data);
            setProducts(res.data.data);
            setLatestCollections(res.data.data.slice(8, 12));
        }
        fetchProducts();
    }, [])

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