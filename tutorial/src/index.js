import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

const firstbook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL302_SR302,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
}

const secbook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91HHxxtA1wL._AC_UL302_SR302,200_.jpg',
  title: 'The Wonderful Things You Will',
  author: 'Emilly Winfield Martin',
}

function Booklist() {
  return (
    <section className='bookList'>
      <Book
        img={firstbook.img}
        title={firstbook.title}
        author={firstbook.author}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          doloremque sint nesciunt, iusto sunt voluptatibus itaque excepturi
          aliquam quidem ipsum?
        </p>
      </Book>

      <Book img={secbook.img} title={secbook.title} author={secbook.author} />
    </section>
  )
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
