import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Code, Layout, Smartphone, Zap } from 'lucide-react';

const features = [
    {
        title: "Universal Architecture",
        description: "Write once, run everywhere. Our adaptive layout system ensures your application looks stunning on large 4K monitors and pocket-sized devices alike.",
        icon: <Layout className="w-8 h-8 text-blue-400" />,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Python Powered",
        description: "Leverage the full power of the Python ecosystem. Data science, AI/ML, and robust backend logic are just an import away.",
        icon: <Code className="w-8 h-8 text-green-400" />,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Lightning Fast",
        description: "Built on Vite and FastAPI, ensuring milliseconds matter. Experience instant HMR during development and optimized assets in production.",
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    }
];

function FeatureCard({ feature, index }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn(
                "flex flex-col md:flex-row items-center gap-12 py-24",
                !isEven && "md:flex-row-reverse"
            )}
        >
            {/* Text Content */}
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl border border-white/10 mb-4">
                    {feature.icon}
                </div>
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    {feature.title}
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                    {feature.description}
                </p>
                <button className="text-white border-b border-transparent hover:border-blue-400 transition-colors pb-1">
                    Learn more -&gt;
                </button>
            </div>

            {/* Image/Visual Content */}
            <div className="flex-1 w-full">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
                >
                    <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}

export function FeatureSection() {
    return (
        <section className="bg-black text-white py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-32 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Why choose this skeleton?
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Carefully crafted to provide the best developer experience without compromising on performance or scalability.
                    </p>
                </div>

                <div className="space-y-12">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
