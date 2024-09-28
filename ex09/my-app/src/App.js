import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const [products, setProducts] = useState([]);

  async function onLoad(){
    let response = await fetch("http://localhost:8080/products");
    let responseBody = await response.json();
    console.log("onLoad", responseBody);
    setProducts(responseBody);
  }

  // 해당 페이지가 열릴 때, 한번 실행이 됨. (초기화 메서드)
  // 빈배열(어떤 값)이 변경될 때? 다시 그림을 그릴거야?
  useEffect(()=>{
    onLoad();
  }, []);

  return (
    <div>
      <h1>상품목록페이지</h1>
      <hr/>
      <div>
        {products.map((product)=> <Card product={product}/>)}
      </div>
    </div>
  );
}

export default App;
