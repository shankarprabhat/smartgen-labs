import Layout from '../components/Layout';

// export default function GenAI() {
//     return <Layout>Gen AI Products</Layout>;
// }

const products = [
    {
        name: "Audit Assistant",
        image: "/images/audit_assistant.png",
        description: "An AI-powered tool that streamlines financial and compliance audits, detecting inconsistencies and ensuring regulatory adherence with advanced NLP and anomaly detection techniques."
    },
    {
        name: "Budget of India Evolution",
        image: "/images/budget_evolution.png",
        description: "A data-driven analysis platform that visualizes and interprets India's budget trends over time, leveraging AI to predict future financial strategies and economic impacts."
    },
    {
        name: "Road Traffic Control",
        image: "/images/road_traffic_control.png",
        description: "An intelligent traffic management system utilizing deep learning and reinforcement learning to optimize traffic flow, reduce congestion, and enhance urban mobility."
    }
];

export default function GenAIProducts() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Gen AI Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.name} className="bg-white p-6 shadow-md rounded-lg text-center">
                        <img src={product.image} alt={product.name} className="w-48 h-48 object-cover mx-auto mb-4" />
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
