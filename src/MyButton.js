// klasörlü yapılarda tam adres vermek için ./ kök dizin demek ./../klasör_ismi
import "./MyButton.css";
import PropTypes from 'prop-types';
// props reactda componente gönderilen initial değerleri belirtmek için kullanılan özel bir tanımlama
function MyButton(props) {

  // deconstruction
  // objeyi parçalara ayırma işlemi
  const { cssName, text } = props;

  const btnClick = (e) => {
    props.onButtonClick(e);
  }

  return <>
    {/* <button className={props.cssName}>{props.text}</button> */}
    <button onClick={btnClick} className={cssName}>{text}</button>
  </>

}

// default değer ataması
MyButton.defaultProps = {
  cssName: "btn primary",
  text: "Button1",
  onButtonClick: function (e) {
    console.log('btn click', e);
  }
};

// propTypes tipi tanımlamak için kullandığımız yöntem
MyButton.propTypes = {
  cssName: PropTypes.string.isRequired,
  text: PropTypes.string
}


export default MyButton;