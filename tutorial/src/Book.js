import React from 'react'

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

export default Book
