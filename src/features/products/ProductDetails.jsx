import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductDetail } from "./productslice"

const ProductDetail = () => {
    const { ProductId } = useParams()
    const data = useSelector((state) => state.product.ProductDetail)
    console.log(data, "====data");
    const dispatch = useDispatch()
    useEffect(() => {
        if (ProductId) {
            dispatchEvent(getProductDetail(ProductId))
        }
    }, [ProductId])
    return (
        <>
            {/* <h1>Product Detail</h1> */}
            {data?.loading ?
                <p>Loading...</p>
                : <div claaName="card-wrapper">
                    <div claaName="card">
                        <div claaName="product-imgs">
                            <div claaName="img-display">
                                <div claaName="img-showcase">
                                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
                                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
                                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
                                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
                                </div>
                            </div>
                            <div claaName="img-select">
                                <div claaName="img-item">
                                    <a href="#" data-id="1">
                                        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
                                    </a>
                                </div>
                                <div claaName="img-item">
                                    <a href="#" data-id="2">
                                        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
                                    </a>
                                </div>
                                <div claaName="img-item">
                                    <a href="#" data-id="3">
                                        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
                                    </a>
                                </div>
                                <div claaName="img-item">
                                    <a href="#" data-id="4">
                                        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div claaName="product-content">
                            <h2 claaName="product-title">nike shoes</h2>
                            <a href="#" claaName="product-link">visit nike store</a>
                            <div claaName="product-rating">
                                <i claaName="fas fa-star"></i>
                                <i claaName="fas fa-star"></i>
                                <i claaName="fas fa-star"></i>
                                <i claaName="fas fa-star"></i>
                                <i claaName="fas fa-star-half-alt"></i>
                                <span>4.7(21)</span>
                            </div>

                            <div claaName="product-price">
                                <p claaName="last-price">Old Price: <span>$257.00</span></p>
                                <p claaName="new-price">New Price: <span>$249.00 (5%)</span></p>
                            </div>

                            <div claaName="product-detail">
                                <h2>about this item: </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                                <ul>
                                    <li>Color: <span>Black</span></li>
                                    <li>Available: <span>in stock</span></li>
                                    <li>Category: <span>Shoes</span></li>
                                    <li>Shipping Area: <span>All over the world</span></li>
                                    <li>Shipping Fee: <span>Free</span></li>
                                </ul>
                            </div>

                            <div claaName="purchase-info">
                                <input type="number" min="0" value="1" />
                                <button type="button" claaName="btn">
                                    Add to Cart <i claaName="fas fa-shopping-cart"></i>
                                </button>
                                <button type="button" claaName="btn">Compare</button>
                            </div>

                            <div claaName="social-links">
                                <p>Share At: </p>
                                <a href="#">
                                    <i claaName="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i claaName="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i claaName="fab fa-instagram"></i>
                                </a>
                                <a href="#">
                                    <i claaName="fab fa-whatsapp"></i>
                                </a>
                                <a href="#">
                                    <i claaName="fab fa-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductDetail