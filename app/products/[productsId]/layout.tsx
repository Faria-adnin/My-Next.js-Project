export default function ProductDetailsLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    return(
    <div>
        {children}
        <h1>Feature products</h1>
    </div>
    )
}