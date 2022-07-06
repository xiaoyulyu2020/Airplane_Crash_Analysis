import { queryAllByAttribute } from '@testing-library/react'
import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

import { books } from './books.js'

import Book from './Book'

function Booklist() {
  return (
    <section className='bookList'>
      {books.map((bok) => {
        return <Book key={bok.id} {...bok}></Book>
      })}
    </section>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
