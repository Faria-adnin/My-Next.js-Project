export default async function ProductDetails({ params }:{ params: Promise<{ productsId: string }> }) {
    const productsId = (await params).productsId;
    return(
        <div>
            <h1>Product Details</h1>
            <p>Product ID: {productsId}</p>
        </div>
    )
}