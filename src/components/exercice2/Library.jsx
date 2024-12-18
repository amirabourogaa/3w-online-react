import React, { useState } from 'react';
import BookList from './BookList';

const Library = () => {

    const books = [
        { id: 1, title: "Les Misérables", author: "Victor Hugo", category: "Classique" },
        { id: 2, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", category: "Fiction" },
        { id: 3, title: "Sapiens", author: "Yuval Noah Harari", category: "Histoire" },
        { id: 4, title: "La Peste", author: "Albert Camus", category: "Classique" },
        { id: 5, title: "1984", author: "George Orwell", category: "Fiction" },
    ];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Classique", "Fiction", "Histoire"];

    const filteredBooks = selectedCategory === "All"
        ? books
        : books.filter(book => book.category === selectedCategory);

    return (
        <div>
            <h2>Ma Bibliothèque</h2>
            <div>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        style={{ margin: "5px", padding: "10px" }}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <BookList books={filteredBooks} />
        </div>
    );
};

export default Library;
