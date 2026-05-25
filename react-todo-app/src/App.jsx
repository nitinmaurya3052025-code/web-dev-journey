function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Nitin" />
      <Welcome name="Rahul" />
      <Welcome name="Piyush" />
    </div>
  );
}

export default App;
