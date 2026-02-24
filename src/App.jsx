import './App.css'

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to My Website</h1>
      <p>This is my personal homepage.</p>

      <div style={{ marginTop: "30px" }}>
        <a href="https://survey-tau-one.vercel.app" target="_blank">
          <button style={{ margin: "10px" }}>Survey Management</button>
        </a>

        <a href="https://2024zuel-report.vercel.app"  target="_blank">
          <button style={{ margin: "10px" }}>ZUEL Report</button>
        </a>
      </div>
    </div>
  );
}

export default App;
