export default function List(props) {
  return (
    <li className="item">
      <div className="imgBox">
        <img src={props.imgSrc} alt="" />
      </div>
      <div className="txtBox">
        <span className="one">1+1</span>
        <p className="title">{props.title}</p>
        <p className="price">{props.price}</p>
      </div>
    </li>
  );
}
