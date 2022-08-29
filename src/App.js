import "./App.css";
import "./css/layout.css";
import { useState, useEffect } from "react";
//export default말고 여러개 export할 경우{}안에넣어주기
import axios from "axios";
import List from "./List";

function App() {
  const [count, setCount] = useState(0);
  // 동적으로 연산을 변경하거나 실시간반영하려면 useState()사용해야함
  // js일반변수를 입력하면 콘솔에선 동작하나 화면에서실시간반영 되지않음.
  const [items, setItems] = useState([]); // 상태변화
  // 화면렌더링에 관여를 하면 useState()사용해야 반영됌.
  // 1번째값을 2번째를 통해서 사용
  useEffect(() => {
    axios.get("http://127.0.0.1:8099/items").then((res) => {
      setItems(res.data);
    });
  });
  // useEffect는 시작하자 마자 한번 실행해야 하는 코드window.load()랑 비슷
  // 컴퍼넌트는 태그 여러개 만들어서 집어넣은것, 주로 반복해야하는 것들을 편이하게 쓰기 위한 코드 뭉치
  // props를 주입받아서 군데군데 다르게 수정가능
  // const itemList = [
  //   // { imgSrc: "https://gdimg.gmarket.co.kr/2519021969/still/400?ver=1661741365", title: "삼육두유 검은콩호두와아몬드 190m16입", price: "15,380원" },
  //   // {
  //   //   imgSrc: "https://gdimg.gmarket.co.kr/2519435583/still/400?ver=1661734111",
  //   //   title: "쓱배송)1+1엘지 생활의감동 스페셜 1호",
  //   //   price: "42,900원",
  //   // },
  //   // { imgSrc: "https://gdimg.gmarket.co.kr/2519433321/still/400?ver=1661734419", title: "쓱배송)1+1엘지 생활의감동 샴푸바디세트", price: "31,900원" },
  //   // { imgSrc: "https://gdimg.gmarket.co.kr/2522389738/still/400?ver=1661741864", title: "CJ 고메너겟 550g", price: "9,980원" },
  //   // { imgSrc: "https://gdimg.gmarket.co.kr/2518649331/still/400?ver=1661705420", title: "질러 크레이지 핫 육포 100g", price: "9,880원" },
  //   // { imgSrc: "https://gdimg.gmarket.co.kr/2518575175/still/400?ver=1661730930", title: "존슨즈베이비 탑투토 워시 500mL", price: "12,900원" },
  // ];
  return (
    <div className="App">
      {/* <h1>{count}</h1>
      <button
        onClick={function () {
          setCount = 1;
        }}
      ></button> */}
      <ul className="itemList">
        {/* 리액트에서는 map은 리스트 출력용,filter은 걸러서 출력할때,reduce */}
        {/* map은 배열을 순환해서 결과를 돌려준다. ->map은무조건리턴포함 한줄빼고 */}
        {items.map((item, idx) => {
          return <List imgSrc={item.imgSrc} title={item.title} price={item.price} />;
        })}

        <a href="/" className="link">
          하나더 상품 더보기
        </a>
      </ul>
    </div>
  );
}

export default App;
