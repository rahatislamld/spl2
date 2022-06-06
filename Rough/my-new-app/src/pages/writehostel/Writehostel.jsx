
import { useContext, useState } from "react";
import "./writehostel.css";
import axios from "axios";
import { Context } from "../../context/Context";
import ReactPlayer from 'react-player'

export default function Writehostel() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [area, setArea] = useState("");
  const [amount, setAmount] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState(null);
  const[file1,setFile1] = useState(null);
  const[video,setVideo] = useState(null);
  const { user } = useContext(Context);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHostel = {
      username: user.username,
      title,
      desc,
      address,
      floor,
      room,
      area,
      amount,
      contact,
    };
    if (file) {
      const data =new FormData();
      const filename = file.name;
            
            
            data.append("name", filename);
            data.append("file", file);
            
           
            newHostel.photo = filename;
            if(file1)
            {
      const filename1 = file1.name;
      data.append("name", filename1);
            data.append("file1", file1);
            newHostel.photo1 = filename1;
            }
      
            if(video)
            {
              const videoname = video.name;
               data.append("name", videoname);
            data.append("video", video);
            newHostel.video = videoname;
            }
            
            
      
            
      
            
            try {
              await axios.post("/upload", data);
            } catch (err) {}
          }
          try {
            const res = await axios.post("/hostels", newHostel);
            window.location.replace("/hostel/" + res.data._id);
          } catch (err) {}
        };

  
  
 

  return (

    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          
            <i className="writeIcon fas fa-plus"> </i>
            
            <button type="button" class="btn btn-secondary">Input images</button>
<br></br>
            <br></br>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            
            onChange={(e) => setFile(e.target.files[0])} 
           
          />
</div>

{file1 && (
        <img className="writeImg" src={URL.createObjectURL(file1)} alt="" />
      )}
        <div className="writeFormGroup">
          <label htmlFor="fileInput1">
          
            <i className="writeIcon fas fa-plus"> </i>
            
            <button type="button" class="btn btn-secondary">Input images 2</button>
<br></br>
            <br></br>
          </label>
          <input
            type="file"
            id="fileInput1"
            style={{ display: "none" }}
            
            onChange={(e) => setFile1(e.target.files[0])} 
           
          />
</div>

{video && (
        <ReactPlayer url={URL.createObjectURL(video)} width="100%" height="100%" controls={true} />
      )}
        <div className="writeFormGroup">
          <label htmlFor="fileInput2">
          
            <i className="writeIcon fas fa-plus"> </i>
            
            <button type="button" class="btn btn-secondary">Upload Video</button>
<br></br>
            <br></br>
          </label>
          <input
            type="file"
            id="fileInput2"
            style={{ display: "none" }}
            
            onChange={(e) => setVideo(e.target.files[0])} 
           
          />
</div>

<div className="writeFormGroup">

<div className="writeFormGroup">
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Address</span>
  </div>
          <input
            type="text"
            // placeholder="Address"
            class="form-control"
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
          </div>
</div>
{/* <label class="input-group-text" for="inputGroupSelect01">Category</label>
  <select 
   type="text"
   placeholder="Title"
   className="writeInput"
   autoFocus={true}
   onChange={e=>setTitle(e.target.value)}
  class="form-select" aria-label=".form-select-lg example">
  <option >Select Post Category</option>
  <option value="Rent">Rent</option>
  <option value="Sell House">Sell House</option>
  <option value="Hostel Rent">Hostel Rent</option>
</select> */}
<br></br>
  
  </div>
        
        <div className="writeFormGroup">
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Category</span>
  </div>
          <input
            type="text"
            // placeholder="Address"
            class="form-control"
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            autoFocus={true}
            onChange={e=>setAddress(e.target.value)}
          />
          </div>
</div>

<div className="writeFormGroup">
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Floor Number</span>
  </div>
          <input
            type="text"
            // placeholder="Address"
            class="form-control"
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            autoFocus={true}
             onChange={e=>setFloor(e.target.value)}
          />
          
          </div>

          <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Room Quantity</span>
  </div>
          <input
            type="text"
            // placeholder="Address"
            class="form-control"
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            autoFocus={true}
             onChange={e=>setRoom(e.target.value)}
          />
          </div>
          
</div>

<div className="writeFormGroup">
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Area Measurement</span>
  </div>
          <input
            type="text"
            // placeholder="Address"
            class="form-control"
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            autoFocus={true}
             onChange={e=>setArea(e.target.value)}
          />
          </div>
</div>

<div className="writeFormGroup">
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Asking Amount</span>
  </div>
          <input
            type="text"
            // placeholder="Address"
            class="form-control"
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            autoFocus={true}
            onChange={e=>setAmount(e.target.value)}
          />
          </div>
</div>

<div className="writeFormGroup">
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Contact Number</span>
  </div>
          <input
            type="text"
            // placeholder="Address"
            class="form-control"
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            autoFocus={true}
             onChange={e=>setContact(e.target.value)}
          />
          </div>
</div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Enter Description"
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>

        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

// import { useContext, useState } from "react";
// import "./write.css";
// import axios from "axios";
// import { Context } from "../../context/Context";

// export default function Write() {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [file, setFile] = useState(null);
//   const { user } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newHouse = {
//       username: user.username,
//       title,
//       desc,
//     };
//     if (file) {
//       const data =new FormData();
//       const filename = Date.now() + file.name;
//       data.append("name", filename);
//       data.append("file", file);
//       newHouse.photo = filename;
//       try {
//         await axios.post("/upload", data);
//       } catch (err) {}
//     }
//     try {
//       const res = await axios.post("/houses", newHouse);
//       window.location.replace("/post/" + res.data._id);
//     } catch (err) {}
//   };
//   return (
//     <div className="write">
//       {file && (
//         <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
//       )}
//       <form className="writeForm" onSubmit={handleSubmit}>
//         <div className="writeFormGroup">
//           <label htmlFor="fileInput">
//             <i className="writeIcon fas fa-plus"></i>
//           </label>
//           <input
//             type="file"
//             id="fileInput"
//             style={{ display: "none" }}
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <input
//             type="text"
//             placeholder="Title"
//             className="writeInput"
//             autoFocus={true}
//             onChange={e=>setTitle(e.target.value)}
//           />
//         </div>
//         <div className="writeFormGroup">
//           <textarea
//             placeholder="Tell your story..."
//             type="text"
//             className="writeInput writeText"
//             onChange={e=>setDesc(e.target.value)}
//           ></textarea>
//         </div>
//         <button className="writeSubmit" type="submit">
//           Publish
//         </button>
//       </form>
//     </div>
//   );
// }