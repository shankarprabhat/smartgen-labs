import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 text-center p-6">
            <header className="bg-blue-600 text-white py-6 text-2xl font-bold">
                SmartGen Labs
            </header>
            <nav className="my-6">
                <Link href="/" className="text-blue-600 mx-4">Home</Link>
                <Link href="/careers" className="text-blue-600 mx-4">Careers</Link>
                <Link href="/our_team" className="text-blue-600 mx-4">Our Team</Link>
            </nav>
            <div className="text-xl">{children}</div>
        </div>
    );
};

export default Layout;

