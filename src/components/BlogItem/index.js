// Write your JS code here
import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class BlogItem extends Component {
  render() {
    const {blog} = this.props
    const {id, title, imageUrl, avatarUrl, author, topic} = blog
    return (
      <Link to={`/blogs/${id}`}>
        <div className="blog-container">
          <img className="img-style" src={imageUrl} alt={title} />
          <div>
            <p className="para-1">{topic}</p>
            <h1>{title}</h1>
            <div className="avatar-author">
              <img className="img-avatar-style" src={avatarUrl} alt={title} />
              <p className="para-2">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
