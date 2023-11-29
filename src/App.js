import { useState, useEffect } from "react";

//Events: add/remove event listener
// observer pattern: subject/unscriber
//Closure
//Timers: setInterval, setTimeout, clearInterval, clearTimeout
//useState
//mounted/unmounted
//callApi
export function App() {
  //Xử lý Side effects
  // 1. useEffect(callback)
  //    - gọi callback sau khi component re-render
  //    - gọi callback sau khi component thêm vào DOM. Có nghĩa là khi có element trong DOM thì callback mới được gọi
  // 2. useEffect(callback, [])
  //    - Chỉ gọi 1 lần component được mounted
  // 3. useEffect(callback, [dependencies])
  //    - Chỉ gọi callback khi dependencies thay đổi. Sử dụng toán tử === để so sánh giá trị cũ và giá trị mới của dependencies
  /*
  callback: call api, update dom, add/remove event listener (scroll, resize, click, keydown, keyup, keypress)
   */
  //----------------------------
  //1,2,3: useEffect luôn dược gọi SAU khi component được mounted
  const [title, setTitle] = useState("useEffect(callback)");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  useEffect(() => {
    document.title = title;
    fetch("https://jsonplaceholder.typicod e.com/posts")
      .then((rs) => {
        rs.json();
      })
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  return (
    <div className="App" style={{ padding: 32 }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}

export default App;
