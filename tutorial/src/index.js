import { queryAllByAttribute } from '@testing-library/react'
import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL302_SR302,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91HHxxtA1wL._AC_UL302_SR302,200_.jpg',
    title: 'The Wonderful Things You Will',
    author: 'Emilly Winfield Martin',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71Mx-bE91+L._AC_UL604_SR604,400_.jpg',
    title: "It's Not Summer Without You",
    author: 'Jenny Han',
  },
]

function Booklist() {
  return (
    <section className='bookList'>
      {books.map((bok) => {
        return <Book key={bok.id} {...bok}></Book>
      })}
    </section>
  )
}
const clickHandler = (event) => {
  console.log(event.target)
  alert('Hellowwww')
}
const moreDetail = (author) => {
  console.log(author)
}

function Book(props) {
  const { img, title, author } = props
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => alert("Don't touch me!")}>{title}</h1>
      <h4>{author}</h4>
      <button id='myButton' type='button' onClick={clickHandler}>
        click
      </button>
      <br></br>
      <button type='button' onClick={() => moreDetail(author)}>
        For detail click me!
      </button>
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
