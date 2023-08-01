import './Featured.styles.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/976919.jpg?k=b4d2dd3f87340b547a0e1aa9fc7e89b47ebe9539086c7f5f4e637e5e2137be7c&o=" />
            <div className='featuredTitles'>
                <h1>Orlando</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/976784.jpg?k=717a6a83ea61edb06017bb8c9bd3d36511ec0e1aef59ac94235584d4fd1709cb&o=" />
            <div className='featuredTitles'>
                <h1>New York</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/977066.jpg?k=3659969918f1a86fc601a58056bd1a0f9c1b1e5205cc75e5dd83c5cc6c1ace49&o=" />
            <div className='featuredTitles'>
                <h1>Las Vegas</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured;
