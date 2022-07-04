import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

function Booklist() {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Author />
      <Detail />
    </article>
  )
}

const Image = () => (
  <img src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL302_SR302,200_.jpg' />
)

const Author = () => <h1>Jenny Han</h1>
const Detail = () => (
  <h4 style={{ color: '#617d68', fontsize: '0.75 rem', marginTop: '0.25rem' }}>
    This book is from azmazon
  </h4>
)

ReactDom.render(<Booklist />, document.getElementById('root'))
