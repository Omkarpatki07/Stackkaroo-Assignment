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
    padding: 20
  } as React.CSSProperties,

  formBox: {
    background: "#fff",
    padding: 30,
    borderRadius: 8,
    width: 420,
    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
  } as React.CSSProperties,

  title: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "#0b0b0b"
  } as React.CSSProperties,

  form: {
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,

  row: {
    display: "flex",
    gap: 10,
  } as React.CSSProperties,

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  } as React.CSSProperties,

  label: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 500,
    color: "#333"
  } as React.CSSProperties,

  input: {
    padding: 12,
    border: "1px solid #ccc",
    borderRadius: 5,
    color: "black",
    width: "100%"
  } as React.CSSProperties,

  inputFull: {
    padding: 12,
    border: "1px solid #ccc",
    borderRadius: 5,
    marginTop: 5,
    color: "black"
  } as React.CSSProperties,

  textarea: {
    padding: 12,
    border: "1px solid #ccc",
    borderRadius: 5,
    height: 100,
    marginTop: 5,
    color: "black",
    resize: "none"
  } as React.CSSProperties,

  button: {
    marginTop: 15,
    padding: 12,
    background: "#4A90E2",
    color: "white",
    border: "none",
    borderRadius: 5,
    fontWeight: "bold",
    cursor: "pointer"
  } as React.CSSProperties,
};
