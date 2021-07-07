import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import BlogList from './components/BlogList'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="app-card">
      <Header />

      <div className="app-body">
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/blogs/:id" component={BlogItemDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
