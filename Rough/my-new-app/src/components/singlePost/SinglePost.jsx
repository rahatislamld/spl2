import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
import ReactPlayer from 'react-player'

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [area, setArea] = useState("");
  const [amount, setAmount] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [name, setName] = useState("");
  


  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setAddress(res.data.address);
      setAmount(res.data.amount);
      setArea(res.data.area);
      setFloor(res.data.floor);
      setRoom(res.data.room);
      setContact(res.data.contact);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        address,
        floor,
        room,
        area,
        amount,
        contact,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className="singlePost">
       
      <div className="singlePostWrapper">
       
        <div>
           {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
          
        {post.photo1 && (
          <img src={PF + post.photo1} alt="" className="singlePostImg" />
          // <ReactPlayer url={post.photo1} width="100%" height="100%" controls={true} />
        )}
        </div>
        {post.video && (
          
           <ReactPlayer url={PF + post.video} width="100%" height="100%" controls={true} />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        ) : (
          // <div>
          // <p className="singlePostDesc">
          //   <button type="button" class="btn btn-secondary">Address</button>
          //   {"      "+address}</p>
          //   </div>
          <div>
          <div class="card-header">
    Category
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      {/* <p>
            {"      "+address}</p> */}<p>
            Rent</p>
      {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
    </blockquote>
  </div>
  </div>
        )}



{updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
          />
        ) : (
          <div>
          <div class="card-header">
    Floor Number
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>
            {"      "+floor}</p>
      {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
    </blockquote>
  </div>
  </div>
        )}

{updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        ) : (
          <div>
          <div class="card-header">
    Room Quantity
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>
            {"      "+room}</p>
      {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
    </blockquote>
  </div>
  </div>
        )}

{updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        ) : (
          <div>
          <div class="card-header">
    Area Measurement
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>
            {"      "+area}</p>
      {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
    </blockquote>
  </div>
  </div>
        )}



{updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        ) : (
          <div>
          <div class="card-header">
    Asking amount
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>
            {"      "+amount}</p>
      {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
    </blockquote>
  </div>
  </div>
        )}

{updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        ) : (
          <div>
          <div class="card-header">
    Contact Number
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>
            {"      "+contact}</p>
      {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
    </blockquote>
  </div>
  </div>
        )}

        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc"><button type="button" class="btn btn-dark">Description</button>{"  "+desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>

      <div>
      <Link
        onClick={(e) => (!user.username || !post._id ? e.preventDefault() : null)}
        to={`/chat?name=${user.username}&room=${post._id}`}
      >
        <button type="submit">Chat</button>__
      </Link>
    </div>
      

      <div class="card my-4">
          <label>Comment   </label>
          <input placeholder="Leave a comment"></input>
        </div>
    </div>
  );
}
// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
// import "./singlePost.css";

// export default function SinglePost() {
//   const location = useLocation();
//   const path = location.pathname.split("/")[2];
//   const [post, setPost] = useState({});
//   const PF = "http://localhost:5000/images/";
//   const { user } = useContext(Context);
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [updateMode, setUpdateMode] = useState(false);

//   useEffect(() => {
//     const getPost = async () => {
//       const res = await axios.get("/posts/" + path);
//       setPost(res.data);
//       setTitle(res.data.title);
//       setDesc(res.data.desc);
//     };
//     getPost();
//   }, [path]);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/posts/${post._id}`, {
//         data: { username: user.username },
//       });
//       window.location.replace("/");
//     } catch (err) {}
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`/posts/${post._id}`, {
//         username: user.username,
//         title,
//         desc,
//       });
//       setUpdateMode(false)
//     } catch (err) {}
//   };

//   return (
//     <div className="singlePost">
//       <div className="singlePostWrapper">
//         {post.photo && (
//           <img src={PF + post.photo} alt="" className="singlePostImg" />
//         )}
//         {updateMode ? (
//           <input
//             type="text"
//             value={title}
//             className="singlePostTitleInput"
//             autoFocus
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         ) : (
//           <h1 className="singlePostTitle">
//             {title}
//             {post.username === user?.username && (
//               <div className="singlePostEdit">
//                 <i
//                   className="singlePostIcon far fa-edit"
//                   onClick={() => setUpdateMode(true)}
//                 ></i>
//                 <i
//                   className="singlePostIcon far fa-trash-alt"
//                   onClick={handleDelete}
//                 ></i>
//               </div>
//             )}
//           </h1>
//         )}
//         <div className="singlePostInfo">
//           <span className="singlePostAuthor">
//             Author:
//             <Link to={`/?user=${post.username}`} className="link">
//               <b> {post.username}</b>
//             </Link>
//           </span>
//           <span className="singlePostDate">
//             {new Date(post.createdAt).toDateString()}
//           </span>
//         </div>
//         {updateMode ? (
//           <textarea
//             className="singlePostDescInput"
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//           />
//         ) : (
//           <p className="singlePostDesc">{desc}</p>
//         )}
//         {updateMode && (
//           <button className="singlePostButton" onClick={handleUpdate}>
//             Update
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }