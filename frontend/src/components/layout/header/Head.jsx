import React from 'react'

const Head = () => {
  return (
    <>
      <section className="head bg-green-900">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+94 76 451 0860</label>
            <i className="fa fa-envelope"></i>
            <label>wellnessroots@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>FAQ's</label>
            <label>Need Help?</label>
            <span>🇺🇸</span>
            <label>EN</label>
            <span>🇱🇰</span>
            <label>LKR</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
