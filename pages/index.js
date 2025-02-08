import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout>
            <p className="mt-4">We innovate in AI and machine learning to push the boundaries of technology.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                <Link href="/brain_nn" className="block bg-white p-4 shadow-md rounded-lg">
                    <img src="/images/brain_nn.png" alt="Brain-Inspired Neural Networks" className="w-full h-40 object-cover rounded" />
                    <p className="mt-2 text-lg font-semibold">Brain-Inspired Neural Networks</p>
                </Link>
                <Link href="/sota_models" className="block bg-white p-4 shadow-md rounded-lg">
                    <img src="/images/sota_models.png" alt="SOTA Models" className="w-full h-40 object-cover rounded" />
                    <p className="mt-2 text-lg font-semibold">SOTA Models</p>
                </Link>
                <Link href="/gen_ai" className="block bg-white p-4 shadow-md rounded-lg">
                    <img src="/images/gen_ai.png" alt="Gen AI Products" className="w-full h-40 object-cover rounded" />
                    <p className="mt-2 text-lg font-semibold">Gen AI Products</p>
                </Link>
                <Link href="/drug_discovery" className="block bg-white p-4 shadow-md rounded-lg">
                    <img src="/images/drug_discovery.png" alt="Drug Discovery" className="w-full h-40 object-cover rounded" />
                    <p className="mt-2 text-lg font-semibold">Drug Discovery</p>
                </Link>                
                <Link href="/algorithmic_trading" className="block bg-white p-4 shadow-md rounded-lg">
                    <img src="/images/trading.png" alt="Algorithmic Trading" className="w-full h-40 object-cover rounded" />
                    <p className="mt-2 text-lg font-semibold">Algorithmic Trading</p>
                </Link>                                
                <Link href="/data_science" className="block bg-white p-4 shadow-md rounded-lg">
                    <img src="/images/data_science.png" alt="Data Science Training" className="w-full h-40 object-cover rounded" />
                    <p className="mt-2 text-lg font-semibold">Data Science Training</p>
                </Link>
            </div>
        </Layout>
    );
}

export function Careers() {
    return <Layout>Careers</Layout>;
}

export function OurTeam() {
    return <Layout>Our Team</Layout>;
}

export function DrugDiscovery() {
    return <Layout>Drug Discovery</Layout>;
}

export function SotaModels() {
    return <Layout>SOTA Models</Layout>;
}

export function Trading() {
    return <Layout>Algorithmic Trading</Layout>;
}

export function GenAI() {
    return <Layout>Gen AI Products</Layout>;
}

export function BrainNN() {
    return <Layout>Brain-Inspired Neural Networks</Layout>;
}

export function DataScience() {
    return <Layout>Data Science Training</Layout>;
}

