/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */

const HomePageView = () => {
  // Inline styles for the background and typography
  const styles = {
    container: {
      backgroundImage:
        "url('https://media.cntraveler.com/photos/59a45e22cd44216d03660ff4/master/w_2580%2Cc_limit/Northwestern-University-GettyImages-500330160.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "white",
      fontFamily: "'Merriweather', serif", // A modern serif font
      fontSize: "64px",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)", // Subtle shadow for readability
      textAlign: "center",
      margin: 0,
    },
  };

  // Render the HomePageView component
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Welcome to the Campus Management System</h1>
    </div>
  );
};

export default HomePageView;
