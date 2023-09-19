// React State mekanizması
// Function Component
// Senaryo => Sayac : 0  Buton (+) (-) 

import { Fragment, useEffect, useState } from "react";
import MyButton from "./MyButton";


// yani constructor üzerinden değer gönderme
// componentin inital değerleri constuctor üzerinden gönderilebilir.
// Componente dışarıdan gönderilen değerlere Props ismi veriyoruz.
function Counter({ defautCounterValue = 0 }) {
  // önce değişkenler



  let sayac = 0;
  const [sayac1, setSayac1] = useState(defautCounterValue);


  useEffect(() => {

    // normalde function içerisinde state değişikliği yaptığımızda. state async çalıştığı için state son değişim değerini function içerisinde yakalayamadık. State değeri geriden geldiği için sayac1 0 oldugu durumda ekrana cssName özelliği geriden set ediliyor.
    // bu gibi sorunları çözmek için react da useEffect diye asenkron state değişimlerini takip eden bir yapı var. kod blogumuz bu yapının içerisine yazalım.

    if (sayac1 == 0) {
      setCssName('btn secondary');
    } else {
      setCssName('btn primary');
    }

    console.log('sayac değişim', sayac1);
    // return () => {
    //   second
    // }
  }, [sayac1]) // [state1,state2,state3]


  // defautCounterValue = defautCounterValue + 1;

  // proptan gelen değeri state bağladık
  useState(defautCounterValue); // 1. paramtere ekrana yansıyacak getter değeri, 2. parametre ise bir olay sonrasında sayac1 değerini değiştiren method tanımı. 
  // Hook => Componentlere dışarıdan özellik kazandıran yapılar.

  // functions

  const [cssName, setCssName] = useState('btn primary');

  const sayacArtir = () => {
    sayac++;
    // sayac1 = 5;
    setSayac1(sayac1 + 1); // ++ ile sayac1 değerini değiştirmiyoruz.
    console.log('sayac', sayac1);
  }

  const sayacAzalt = () => {
    // sayac--;
    setSayac1(sayac1 - 1);

    console.log('azalt', sayac1);
  }
  // React da event binding yapmak için eventName={functionName} syntax kullanıyoruz
  // JSX
  // Fragmentation bölümleme.
  // <></> <Fragment> </Fragment>
  // fragment ile css style özellikleri kullanamıyoruz
  return <>
    <div>
      {/* <p>Sayac: {sayac}</p> */}
      <p>Sayac : {sayac1}</p>
      <p>
        {/* <button onClick={sayacArtir}>(+)</button> */}
        <MyButton onButtonClick={sayacArtir} text={'+'} />
        {/* <button onClick={sayacAzalt}>(-)</button> */}
        <MyButton cssName={cssName} onButtonClick={sayacAzalt} text={'-'} />
      </p>
    </div>
  </>


}

export default Counter;

