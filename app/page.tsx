// import Image from "next/image";
'use client';
import styles from "../styles/page.module.scss";
import { Radio } from "@/components/Radio";
import { Button } from "@/components/Button";
import { useState } from "react";
import database from "@/data.json";
import { text } from "stream/consumers";

export default function Home() {
  const [pop, setPop] = useState(true);
  const [data, setData] = useState(true);
  const [txt, setTxt] = useState(" ")
  const [tmp, setTmp] = useState(-1)
  const [random1, setRandom] = useState(false)
  let tab: number[] = []
  let tab2: number[] = []
  const radio1 = () => {
    setTmp(0)
    setRandom(false)

  }
  const radio2 = () => {
    setTmp(1)
    setRandom(false)

  }
  const radioRanodm = () => {
    setRandom(true)

    
  }
  const add = () =>{
    if(random1){
      let rndInt = Math.floor(Math.random() * 4) + 1
      if(tab.length < 4){
        while(tab.includes(rndInt)){
          rndInt = Math.floor(Math.random() * 4) + 1
        }
        if(!tab.includes(rndInt)){
          tab.push(rndInt)
          tab2.push(rndInt)
          setTmp(rndInt)
        }
      }
    }
    console.log(tmp);
    
    if(!tab2.includes(tmp)){
      tab2.push(tmp)
      let x = txt + '\n' + database[tmp].txt
      console.log(x);
      setTxt(x)
    }else{
      alert("cat")
    }

  }
  const replace = () =>{
    if(random1 == true){
      let rndInt = Math.floor(Math.random() * 4) + 1
      if(tab.length < 4){
        while(tab.includes(rndInt)){
          rndInt = Math.floor(Math.random() * 4) + 1
        }
        if(!tab.includes(rndInt)){
          tab.push(rndInt)
          tab2.push(rndInt)
          setTmp(rndInt)
        }
      }
    }
    tab2=[tmp]
    console.log(tmp);
    
    setTxt(database[tmp].txt)
  }
  const resetData = () => {
    tab2 = []
    tab = []
  }
  const popup = () =>{ setPop(!pop) }
  const showData = () =>{ setData(!data)}

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.circle}>
          <img className={styles.img} src='https://img.icons8.com/?size=100&id=23028&format=png&color=FFFFFF'/>
        </div>
        <div className={styles.info}>
          <span className={styles.bigTxt}>Zadanie <span className={styles.bold}>rekrutacyjne</span></span><br/><span className={styles.name} hidden={data}>Mikołaj Zając</span>
        </div>
      </div>

      <div className={styles.main}>
        
        <h1>Nagłówek H1<hr/></h1>
        
        
        <div className={styles.container}>
          <div className={styles.block}>
            <h4>BLOK PIERWSZY</h4>
            <Radio  
              textContent={"Opcja pierwsza"} 
              onClick={radio1} 
              name={"ket"}/>

            <Radio  
              textContent={"Opcja druga"} 
              onClick={radio2} 
              name={"ket"}/>

            <Radio  
              textContent={"Opcja losowa"} 
              onClick={radioRanodm} 
              name={"ket"}/>

           </div>

          <div className={styles.block}>
            <h4>BLOK DRUGI</h4>
            <div className={styles.buttonBox}>
              <Button 
                textContent={"ZASTĄP"} 
                onClick={replace} 
                popup={false}/>

              <Button 
                textContent={"DOKLEJ"} 
                onClick={add} 
                popup={false}/>
            </div>

          </div>
          <div className={styles.block}>
            <h4 className="longName">BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE</h4>
            <div className={styles.txt}>{txt}</div>
          </div>
        </div>
        
      </div>

      <div className={styles.footer}>
        <div className={styles.csslogo}>
          <div/>
          <span>CSS<br/>IS<br/>AWESOME</span>
          
        </div>
        <div className={styles.logo}>nabthat</div>
        <div>
          <Button 
            textContent={`POKAŻ ${pop?'^':'v'}`}
            onClick={popup}
            popup={true}/>
          <div className={styles.popup + pop?styles.slideOut:styles.slideIn} hidden={pop}>
            <a className={styles.popupItem} onClick={resetData}>&gt; ZRESETUJ USTAWIENIA</a><br/><br/>
            <a className={styles.popupItem} onClick={showData}>&gt; POKAŻ DANE OSOBOWE</a>
          </div>
        </div>
      </div>
    </main>
  );
}
