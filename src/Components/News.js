import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles=[{
        
            "source": {
            "id": "wired",
            "name": "Wired"
            },
            "author": "Jessica Klein",
            "title": "Bitcoin Bros Go Wild for Donald Trump",
            "description": "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.Bitcoin is the first decentralized cryptocurrency.",
            "url": "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
            "urlToImage": "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg",
            "publishedAt": "2024-07-28T12:43:07Z",
            "content": "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]"
            },
            {
            "source": {
            "id": "wired",
            "name": "Wired"
            },
            "author": "Steven Levy",
            "title": "Trump's Crypto Embrace Could Be a Disaster for Bitcoin",
            "description": "At the Bitcoin 2024 conference in Nashville, Donald Trump promised the crypto community the moon. They'd better hope they don't get it.",
            "url": "https://www.wired.com/story/donald-trump-bitcoin-reserve-promises/",
            "urlToImage": "https://media.wired.com/photos/66ab594d0c0cc4819f595db4/191:100/w_1280,c_limit/073024_Crypto%20get%20rich%20quick.jpg",
            "publishedAt": "2024-08-02T13:00:00Z",
            "content": "Donald Trump is an unlikely crypto ally. The power of bitcoin, embodied in Satoshi Nakamotos founding document, is that it frees participants from murky assessments of trust, instead relying on the b… [+4248 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Gizmodo.com"
            },
            "author": "Harri Weber",
            "title": "Trump Promises to Make U.S. the ‘Crypto Capital of the Planet and the Bitcoin Superpower’",
            "description": "The former president drew cheers at the 2024 Bitcoin Conference after saying he'll \"fire\" Biden-nominated SEC Chair Gary Gensler.",
            "url": "https://gizmodo.com/trump-promises-to-make-u-s-the-crypto-capital-of-the-planet-and-the-bitcoin-superpower-2000480037",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-27-at-1.02.37 PM.jpg",
            "publishedAt": "2024-07-27T20:59:48Z",
            "content": "Speaking to a crowd of supporters at the Bitcoin 2024 Conference in Nashville, Tennessee, former president and Republican nominee Donald Trump said he would make the U.S. the “crypto capital of the p… [+2326 chars]"
            },
            {
                "source": {
                "id": null,
                "name": "Gizmodo.com"
                },
                "author": "Passant Rabie",
                "title": "Crypto Bro Charters Private SpaceX Mission to Earth’s Poles",
                "description": "Fram2 could fly as early as this year, marking SpaceX's seventh private crew of astronauts.",
                "url": "https://gizmodo.com/crypto-bro-charters-private-spacex-mission-to-earths-poles-2000486329",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/08/SpaceX-Private-Mission.jpeg",
                "publishedAt": "2024-08-13T16:05:37Z",
                "content": "A private crew of astronauts that includes a cinematographer and an explorer, and commanded by a wealthy bitcoin entrepreneur, will be the first human spaceflight to go over Earth’s polar region.\r\nSp… [+2136 chars]"
                },
        ]
    
    constructor(){
        super();
        console.log('inside contructor')
        this.state={
            articles: this.articles,
            loading: false
        }
    }
    componentDidMount(){
        
    }
   render() {
    return (
      <div className='container my-4'>
         
        <p>News App - Top Headlines</p>
        <div className='row'>
        {this.state.articles.map((ele)=>{
        return <div className='col-md-3'>
        <Newsitem title={ele.title} description={ele.description} imgUrl ={ele.urlToImage}
        newsUrl={ele.url}/>
        </div>
        })}
        </div>
      </div>
    )
  }
}

export default News