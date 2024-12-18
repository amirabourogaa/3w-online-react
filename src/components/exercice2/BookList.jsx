import React from 'react'

export default function BookList({books}) {
  return (
    <ul>
        {books.map(book => (
            <li key={book.id}>
                <strong>{book.title}</strong> par {book.author} ({book.category})
            </li>
        ))}
    </ul>
  )
}
