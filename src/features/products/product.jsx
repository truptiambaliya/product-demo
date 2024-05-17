import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./productslice";
import loader from "../../assets/images/loader.gif"
import Productlist from "./Productlist";
import "../products/product.css"

const Product = () => {
    const loading = useSelector((state) => state.product.loading)
    const data = useSelector((state) => state.product.data)
    console.log({ loading, data });
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <>
            <h1>All products</h1>
            <div class="listing-section">
                {loading ?
                    <img src={loader} />
                    :
                    data?.products?.length > 0 ?
                        <Productlist
                            data={data?.products}
                        />
                        :
                        <div>
                            <p>No product found</p>
                        </div>
                }
            </div>
        </>
    )
}

export default Product