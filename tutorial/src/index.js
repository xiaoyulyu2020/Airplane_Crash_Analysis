import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL302_SR302,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/91HHxxtA1wL._AC_UL302_SR302,200_.jpg',
    title: 'The Wonderful Things You Will',
    author: 'Emilly Winfield Martin',
  },
]

function Booklist() {
  return (
    <section className='bookList'>
      {books.map((bok) => {
        const { img, title, author } = bok
        return <Book books={bok}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props.books
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
