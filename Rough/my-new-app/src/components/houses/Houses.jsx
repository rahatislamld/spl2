import Housepost from "../housepost/Housepost";

import "./houses.css";

export default function Houses({posts}) {
  return (
    <div className="posts">
       {posts.map((p) => (
        <Housepost post={p}/>
      ))}
     
    </div>
  );
}
