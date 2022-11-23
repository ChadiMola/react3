import PropTypes from "prop-types"; // ES6
function profile(props) {
  let { fullName, bio, profession } = props;
  let style = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "200px",
    backgroundColor: "white",
    padding: "10px 10px",
    borderRadius: "5px",
  }; 
  const handleClick = e => {
    e.preventDefault();
    alert(fullName);
  };
  return (
    <div style={style} onClick={handleClick}>
      {props.children}
      <h2 style={{ textAlign: "center", color: "#282c34" }}>{fullName}</h2>
      <h3>{profession}</h3>
      <p>{bio}</p>
    </div>
  );
}
profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
};
profile.defaultProps = {
  children: <img src="/avatar.png" alt="mypic"></img>,
  fullName: "foulen fleni",
  profession: "job title",
  bio: "bio",
};
export default profile;
