import React,{useState} from 'react';
import Banner from '@/components/banner';



export default function Home() {

  const [text,setText] = useState(false)

  const btnHandlge= () => {
    setText(!text);
  }
  return (
    <div className='content'>
      <h1>Welcome to my application!</h1>
      <Banner bannerTitle="Hpme" bannerDesc="Eiusmod exercitation velit nulla velit. Nulla tempor veniam cupidatat fugiat culpa adipisicing in laboris ipsum magna id qui sunt. Tempor cupidatat minim fugiat reprehenderit eiusmod mollit aliquip velit pariatur minim magna. Cupidatat dolore laboris deserunt laboris occaecat ad dolore laboris eu sunt incididunt occaecat. Elit exercitation ad quis reprehenderit veniam ut elit enim sunt."/>
      <button className="btn btn-primary" onClick={btnHandlge}>Click Toggle</button>
      {text ? 'nitesh' : 'sameet'}

    </div>
  )
}
