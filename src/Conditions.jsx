// CommonJS module declations
// ES module declartions
// const { useState } = require("react")

// const { useState } = require("react");
import { useState  } from "react";

function Conditions() {
  const [visible,setVisible] = useState(true);
  const [hidden,setHidden] = useState(true);

  const toggleVisible =() => {
    setVisible(!visible); // !true ise false false is true yap
    // visible durumunda domdan kaldırır.
    // {visible && <p></p> }
    // {visible ? <p>p1</p>:<></>}
  }

  const toggleHidden = () => {
    setHidden(!hidden);
    // hidden durumunda domdan kaldırmaz
    /* <p hidden={hidden}>
    Gösterilecek gizlenecek değer
    </p>
    */
  }

  return <>
  <button onClick={toggleVisible}>Visible</button>
  <button onClick={toggleHidden}>Hidden</button>
  <p hidden={hidden}>
    Gösterilecek gizlenecek değer
  </p>
  {visible &&  <p> 
    Domdan kaldırılacak değer doma eklenecek değer
  </p>}

  {visible ? <p>p1</p>:<></>}
  {/* ternaryIf kullanımı */}
  {/* true false ifadeler için kullanılıyor */}
  </>
}
// COMMONJS formatı
// module.exports = Conditions;
// ES module formatı
export default Conditions;