function HomeTopBar() {
  const style = {
    div: {
      width: "100%",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
    },
    h1: {
      height: "53px",
      width: "100%",
      fontSize: "24px",
      margin: "0 10px",
      paddingTop: "14px",
      boxSizing: "border-box",
      fontWeight: "bold",
      color: "black",
    },
  };
  return (
    <div style={style.div}>
      <h1 style={style.h1}>Home</h1>
    </div>
  );
}

export default HomeTopBar;
