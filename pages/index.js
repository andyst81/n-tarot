import React from 'react'
import Head from 'next/head'
import Tarot from "../components/tarot"


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
      button = "Ask another question"
    } else {
      button = "Bring Card"
    }
    return (
      <div className='container'>
        <Head>
          <title>One Tarot Card Reading</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather" rel="stylesheet" />      
        </Head>
        <br />
        <h3 className="heading">Ask a question outloud and press the button below to generate one card to answer the question.</h3>
        <p className="heading">An interpretation of the meaning of the card will appear below it.</p>
        <button className="button-success pure-button" onClick={this.buttonClick}>{button}</button>
        <br/>
        {show}
      </div>
    )
  }
}

export default Home