import useSWR from 'swr';

export default function Tarot() {

  let name
  let number
  let fortune
  let keywords
  let light
  let shadow
  let image
  let questions
  let fortuneList =[]
  let questionList = []
  let keywordList = []
  let lightList = []
  let shadowList = []

  function fetcher(url) {
    return fetch(url).then(r => r.json());
  }

  const { data, error } = useSWR('/api/tarot', fetcher);

  name = data?.name;
  number = data?.number;
  fortune = data?.fortune_telling;
  keywords = data?.keywords;
  light = data?.meanings.light;
  shadow = data?.meanings.shadow;
  image = data?.img;
  questions = data?.questions
  if (!data) number = 'Loading...';
  if (error) number = 'Failed to fetch a card.';

  for (var x in fortune) {
    fortuneList.push(<p key={x}>{fortune[x]}</p>)
  }

  
  for (var q in questions) {
    questionList.push(<li key={q}>{questions[q]}</li>)
  }
  

  for (var y in keywords) {
    let mid = keywords[y]
    mid = mid[0].toUpperCase()+ mid.substring(1)
    keywordList.push(<li key={y}>{mid}</li>)
  } 

  for (var l in light) {
    lightList.push(<li key={l}>{light[l]}</li>)
  }

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
          <div className=''><div className='left'><b>Questions to ask:</b></div><ul>{questionList}</ul></div>
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

