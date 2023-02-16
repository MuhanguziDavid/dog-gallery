import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="about">
      <p>Here at dog CEO, we show you the most adorable dogs!!</p>
      <Link style={{color: '#333'}} to="/">Go head and browse our wholesome gallery</Link>
    </div>
  )
}

export default About
