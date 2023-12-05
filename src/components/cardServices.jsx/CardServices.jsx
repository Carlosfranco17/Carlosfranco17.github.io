import React from 'react'
import './cardservices.css'

const CardServices = () => {
  return (
    

    <section>




<section className="info">
  <img src="https://codetheweb.blog/assets/img/icon2.png"/>
  <h1>Learn HTML &mdash; <a href="https://codetheweb.blog/" target="_blank">Code The Web</a></h1>
</section>
<section className="cards-wrapper">
  <div className="card-grid-space">
    <div className="num">01</div>
    <a className="card" style={{ '--bg-img': `url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg')` }}>
      <div>
        <h1>HTML Syntax</h1>
        <p>The syntax of a language is how it works. How to actually write it. Lea 
          rn HTML syntax…</p>
        <div className="date">6 Oct 2017</div>
        <div className="tags">
          <div className="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  <div className="card-grid-space">
    <div className="num">02</div>
    <a className="card" style={{ '--bg-img': `url('${encodeURIComponent('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg')}')` }}>
    <div>
        <h1>Basic types of HTML tags</h1>
        <p>Learn about some of the most common HTML tags…</p>
        <div className="date">9 Oct 2017</div>
        <div className="tags">
          <div className="tag">HTML</div>
        </div>
      </div>
 </a>  

  </div>
  <div className="card-grid-space">
    <div className="num">03</div>
    <a className="card" style={{ '--bg-img': `url('${encodeURIComponent('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg')}')` }}>
    <div>
        <h1>Links, images and about file paths</h1>
        <p>Learn how to use links and images along with file paths…</p>
        <div className="date">14 Oct 2017</div>
        <div className="tags">
          <div className="tag">HTML</div>
        </div>
      </div>
</a>

  </div>
 
</section>

      </section>


   
  )
}

export default CardServices