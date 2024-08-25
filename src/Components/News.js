import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
   render() {
    return (
      <div className='container my-4'>
        <p>News App - Top Headlines</p>
        <div className='row'>
            <div className='col-md-3'>
        <Newsitem title={"myTitle"} description={"describe"} imgUrl ={"https://media.wired.com/photos/66ab594d0c0cc4819f595db4/191:100/w_1280,c_limit/073024_Crypto%20get%20rich%20quick.jpg"}/>
        </div>
        <div className='col-md-3'>
        <Newsitem title={"myTitle"} description={"describe"}/>
        </div>
        <div className='col-md-3'>
        <Newsitem title={"myTitle"} description={"describe"}/>
        </div>
        <div className='col-md-3'>
        <Newsitem title={"myTitle"} description={"describe"}/>
        </div>
        </div>
      </div>
    )
  }
}

export default News