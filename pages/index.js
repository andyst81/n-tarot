import React from 'react'
import Head from 'next/head'
import Tarot from "../components/tarot"
import Layout from '../components/Layout'


class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      showCard: false
    }
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick() {
    this.setState(prevState => ({
      showCard: !prevState.showCard
    }))
    console.log(this.state.showCard)
  }

  render() {
    const cardShow = this.state.showCard
    let show
    let button
    if (cardShow) {
      show = <Tarot />
      button = "Ask Another"
    } else {
      button = "Show Card"
    }
    return (
      <div className='container'>
        <Head>
          <title>One Tarot Card Reading</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather" rel="stylesheet" />      
        </Head>
        <Layout>
        <br />
        <h1 className='heading'>One Tarot Card Reading</h1>
        <br />
        <h3 className="heading">Ask a question outload and press the button below.</h3>
        <p className="heading">A card will be shown to answer your question. There will be an interpretation of the card meaning below it.
        <br/> If you would like to ask another question, press the "Ask Another Question" button, ask again and press the "Show Card" button again. 
        <br/>There may be a very short delay before the new card appears - this is normal.</p>
        <button className="button-success pure-button" onClick={this.buttonClick}>{button}</button>
        <br/>
        {show}
        </Layout>
      </div>
    )
  }
}

export default Home