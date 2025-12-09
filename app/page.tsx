export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={styles.title}>GET IN TOUCH</h2>

        <form style={styles.form}>
          
          {/* First + Last Name Row */}
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>First Name</label>
              <input type="text" placeholder="First name" style={styles.input} />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Last Name</label>
              <input type="text" placeholder="Last name" style={styles.input} />
            </div>
          </div>

          {/* Email */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="Your email" style={styles.inputFull} />
          </div>

          {/* Website URL */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Website</label>
            <input type="text" placeholder="http://" style={styles.inputFull} />
          </div>

          {/* Message */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Message</label>
            <textarea placeholder="Message" style={styles.textarea}></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.button}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(to right, #5FB36A, #4189CC)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  },
  formBox: {
    background: "#fff",
    padding: "30px",
    borderRadius: "8px",
    width: "420px",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "bold",
    color:" #0b0b0bff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    gap: "10px",
    color: "black"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  },
  label: {
    fontSize: "14px",
    marginBottom: "5px",
    fontWeight: "500",
    color: "#333",
  },
  input: {
    width:"100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    color: "black",
  },
  inputFull: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "5px",
    color: "black",
  },
  textarea: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    height: "100px",
    marginTop: "5px",
    color: "black",
  },
  button: {
    marginTop: "15px",
    padding: "12px",
    background: "#4A90E2",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  }
};
