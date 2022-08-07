import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
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
    <div className='book'>
      <Image />
      <Details />
    </div>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/41d1gVUK1yL._SX331_BO1,204,203,200_.jpg'
    alt='image'
  />
)
const Details = () => (
  <div className='details'>
    <h4>Verity: A Novel</h4>
    <span>Colleen Hoover</span>
  </div>
)

ReactDOM.render(<BookList />, document.getElementById('root'))
