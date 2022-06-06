import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Find your best place</span>
        <span className="headerTitleLg">Rentree</span>
        <br/>
      </div>
      <br/>
      <br/>

      <img
        className="headerImg"
        // src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        src="./images/10.jpg"
        alt=""
      />
    </div>
  );
}
