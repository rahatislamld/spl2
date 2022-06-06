



import Hostelpost from "../hostelpost/Hostelpost";
import "./hostels.css";

export default function Hostels({posts}) {
  return (
    <div className="posts">
       {posts.map((p) => (
        <Hostelpost post={p}/>
      ))}
     
    </div>
  );
}
