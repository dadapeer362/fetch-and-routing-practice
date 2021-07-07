// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import UserInfo from '../UserInfo'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state

    return (
      <div className="user-data-container">
        <UserInfo />
        <div>
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
          ) : (
            blogData.map(eachBlog => (
              <BlogItem blog={eachBlog} key={eachBlog.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default BlogList
