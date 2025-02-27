import { useState } from 'react';

function CategoryBar({setCategory}) {

    const [activeCatg , setActiveCatg] = useState('World News');

    const categories = ['World News', 'Business', 'Technology', 'Entertainment', 'Sports', 'Health', 'Science', 'Politics', 'Travel', 'Lifestyle', 'Opinion', 'Education', 'Environment', 'Food', 'Art & Culture'];

    const handleCategoryClick = (category) => {
        setCategory(category);
        setActiveCatg(category)
    }

    const newCategories = categories.map((cat, idx) => {
        return (
            <button className={`border border-Almond p-2 rounded-lg flex-shrink-0 text-sm ${cat === activeCatg ? 'bg-Almond text-black' : 'text-white' }`} key={idx} data-id={cat} onClick={() => handleCategoryClick(cat)} >{cat}</button>
        )
    })

    return (
        <nav className="w-full">
            <div className="w-full flex overflow-auto box-border px-4 py-2 gap-2 scrollbar-x-2">
                {newCategories}
            </div>
        </nav>
    )

}

export default CategoryBar; 