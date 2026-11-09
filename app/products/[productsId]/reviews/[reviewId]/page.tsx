import { notFound } from "next/navigation";
export default async function ProductReview({
    params,
}:{
    params: Promise<{ productsId : string; reviewId: string }>
}) {
    const {productsId, reviewId} = await params;    
    if (parseInt(reviewId) > 100){
        notFound();
    }
    return(
        <div>
            <h1>Product Review</h1>
            <p>Product ID: {productsId}</p>
            <p>Review ID: {reviewId}</p>
        </div>
    )
}