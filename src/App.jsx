import './App.css'

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to My Website</h1>
      <p>This is my personal homepage.</p>

      <div style={{ marginTop: "30px" }}>
        <a href="/project1">
          <button style={{ margin: "10px" }}>Project 1</button>
        </a>

        <a href="/project2">
          <button style={{ margin: "10px" }}>Project 2</button>
        </a>
      </div>
    </div>
  );
}

export default App;
