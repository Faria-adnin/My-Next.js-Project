export function generateStaticParams(): { slug: string[] }[] {
    return [{ slug: [] }];
}

export default async function Docs({
    params,
}:{
    params: Promise<{ slug: string[]}>
}) {
    const {slug} = await params;
    if(slug?.length === 2) {
        return(
            <div>
                <h1>Viewing docs for feature {slug[0]} concept {slug[1]}</h1>
            </div>
        )
    } else if(slug?.length === 1) {
        return (
            <div>
                <h1>Viewing docs for feature {slug[0]}</h1>
            </div>
        )
    } 
    return (
        <div>
            <h1>Docs Home Page</h1>
        </div>
    )
}