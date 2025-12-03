import { motion } from "framer-motion";

export const CategoryFilter = ({
    categories,
    activeCategory,
    onCategoryChange,
    subcategories,
    activeSubcategory,
    onSubcategoryChange,
}) => {
    return (
        <div className="space-y-6">
            {/* Main Categories */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-3"
            >
                {categories.map((cat, index) => (
                    <motion.button
                        key={cat}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onCategoryChange(cat)}
                        className={`relative px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 overflow-hidden ${activeCategory === cat
                                ? "text-white"
                                : "bg-white text-gray-900 border border-gray-200 hover:border-orange-300 hover:bg-orange-50"
                            }`}
                        style={activeCategory === cat ? {
                            backgroundImage: "linear-gradient(135deg, #f97316, #fb923c)",
                            boxShadow: "0 0 40px rgba(249, 115, 22, 0.3)"
                        } : {
                            boxShadow: "0 4px 20px -4px rgba(249, 115, 22, 0.15)"
                        }}
                    >
                        {/* Active indicator glow */}
                        {activeCategory === cat && (
                            <motion.div
                                layoutId="categoryGlow"
                                className="absolute inset-0 opacity-100"
                                style={{ backgroundImage: "linear-gradient(135deg, #f97316, #fb923c)" }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{cat}</span>
                    </motion.button>
                ))}
            </motion.div>

            {/* Subcategories */}
            {activeCategory !== "All" && subcategories.length > 1 && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-wrap justify-center gap-2"
                >
                    {subcategories.map((sub, index) => (
                        <motion.button
                            key={sub}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onSubcategoryChange(sub)}
                            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeSubcategory === sub
                                    ? "border-2 border-orange-500"
                                    : "bg-white/50 text-gray-500 border border-gray-200 hover:border-orange-300 hover:text-gray-900"
                                }`}
                            style={activeSubcategory === sub ? {
                                backgroundColor: "rgba(249, 115, 22, 0.2)",
                                color: "#f97316"
                            } : undefined}
                        >
                            {sub}
                        </motion.button>
                    ))}
                </motion.div>
            )}
        </div>
    );
};
