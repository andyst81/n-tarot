import Head from 'next/head'
import Tarot from "../components/tarot"

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>One Tarot Card Reading</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Open+Sans&display=swap" rel="stylesheet" />      
      </Head>
      <br />
          <h3 className="heading">Ask a question outloud and press the button below to generate one card to answer the question.</h3>
          <p className="heading">An interpretation of the meaning of the card will appear below it.</p>
          <button className="button-success pure-button">Show Card</button>
          <br/>
      <Tarot />
    </div>
  )
}
