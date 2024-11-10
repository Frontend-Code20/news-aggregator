import { useState } from 'react';
import '../css/categorybar.css'

function CategoryBar(props) {

    const [activeCatg , setActiveCatg] = useState('World News');

    const categories = ['World News', 'Business', 'Technology', 'Entertainment', 'Sports', 'Health', 'Science', 'Politics', 'Travel', 'Lifestyle', 'Opinion', 'Education', 'Environment', 'Food', 'Art & Culture'];

    const newCategories = categories.map((cat, idx) => {
        return (
            <button className={cat === activeCatg ? 'category activeCategory' : 'category'} key={idx} data-id={cat} onClick={() => {
                props.setCategory(cat);
                setActiveCatg(cat)
            }} >{cat}</button>
        )
    })

    return (
        <nav className="category-box">
            <div className='category-bar'>
                {newCategories}
            </div>
        </nav>
    )

}

export default CategoryBar; 