import React from 'react';
import ReactDOM from 'react-dom/client';
import { SiteNav, SiteFooter } from './layout.jsx';
import { Home } from './home.jsx';
import { CaseStudy } from './case.jsx';
import { About } from './about.jsx';
import { Writing } from './writing.jsx';


export function Site(){
  const [route,setRoute]=React.useState('work');
  const go=r=>{setRoute(r);window.scrollTo(0,0)};
  return <div>
    <SiteNav route={route} go={go}/>
    {(route==='work'||route==='home')&&<Home go={go}/>}
    {route==='case'&&<CaseStudy go={go}/>}
    {route==='about'&&<About/>}
    {route==='writing'&&<Writing go={go}/>}
    <SiteFooter/>
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<Site/>);