import useSWR from 'swr';

export default function Tarot() {
    function fetcher(url) {
      return fetch(url).then(r => r.json());
    }

    const { data, error } = useSWR('/api/tarot', fetcher);
  
    const name = data?.name;
    let number = data?.number;
    let fortune = data?.fortune_telling;
    let keywords = data?.keywords;
    let light = data?.meanings.light;
    let shadow = data?.meanings.shadow;
    let image = data?.img;
    let questions = data?.questions
    if (!data) number = 'Loading...';
    if (error) number = 'Failed to fetch a card.';
  
    let fortuneList = []
    for (var x in fortune) {
      fortuneList.push(<p key={x}>{fortune[x]}</p>)
    }
  
    let questionList = []
    for (var q in questions) {
      questionList.push(<li key={q}>{questions[q]}</li>)
    }
    
    let keywordList = []
    for (var y in keywords) {
      let mid = keywords[y]
      mid = mid[0].toUpperCase()+ mid.substring(1)
      keywordList.push(<li key={y}>{mid}</li>)
    } 
  
    let lightList = []
    for (var l in light) {
      lightList.push(<li key={l}>{light[l]}</li>)
    }
  
    let shadowList = []
    for (var d in shadow) {
      shadowList.push(<li key={d}>{shadow[d]}</li>)
    }
  
  return(
      <div className="">
        <main className="">
          <div>
            <img style={{display: "flex", margin:"auto", alignItems:"center", justifyContent:"center"}} src={image} />
            <div className='heading'><h1>{number}</h1></div>
            <div className='heading'><h2>{name}</h2></div>
            <div style={{textAlign:"center"}}><h5>{fortuneList}</h5></div>
            <div className=''><b>Questions to ask:</b><ul>{questionList}</ul></div>
            <div className='row'>
              <div className="one-third column"><div className='centered'><b>Keywords:</b></div><ul>{keywordList}</ul></div>
              <div className="one-third column"><div className='centered'><b>Light Meanings:</b></div><ul>{lightList}</ul></div>
              <div className="one-third column"><div className='centered'><b>Dark Meanings:</b></div><ul>{shadowList}</ul></div>
            </div>
            
          </div>
          

        </main>
      </div>
  )
}

