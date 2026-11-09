interface DashboardCardProps{
    title: string;
    value: number;
}

export default function DashboardCard(props: DashboardCardProps) {
    return(
        <div style={{border: "1px solid #ddd", padding: "20px", margin: "10px", borderRadius: "8px"}}>
            <h3>{props.title}</h3>
            <h2>{props.value}</h2>
        </div>
    )
}