import Layout from '../components/Layout';

const teamMembers = {
    Founders: [
        { name: "Priyanka Kumari", image: "/images/priyanka.png", bio: "Co-founder and expert in AI-driven drug discovery." },
        { name: "Vaishnavi Mom", image: "/images/vaishnavi_mom.jpg", bio: "Co-founder with expertise in Gen AI products and research." }
    ],
    Consultants: [
        { name: "Prabhat Shankar", image: "/images/prabhat.jpg", bio: "AI researcher specializing in reinforcement learning and trading strategies." },
        { name: "Vaishnavi Seetharam", image: "/images/vaishnavi_seetharam.jpg", bio: "Consultant in data science and brain-inspired neural networks." },
        { name: "Nithin Nagaraj", image: "/images/nithin_nagaraj.jpg", bio: "Researcher in Consciousness Studies." }
    ]
};

export default function OurTeam() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h1>
            {Object.entries(teamMembers).map(([section, members]) => (
                <div key={section} className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">{section}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {members.map((member) => (
                            <div key={member.name} className="bg-white p-4 shadow-md rounded-lg text-center">
                                <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <p className="text-gray-600">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </Layout>
    );
}
