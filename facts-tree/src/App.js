import "./style.css";

function App() {
  const appTitle = "Fact Tree";

  return (
    <>
    {/* HEADER */}
      <header className="header">
        <div className="logo">
            <img src="logo.png" alt="Facts Tree" />
            <h1>{appTitle}</h1>
        </div>
          <button className="btn btn-large btn-open">Share a Fact</button>
      </header>

      <NewFactForm />

      <main class="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}


function CategoryFilter() {
  return <aside>Category Filter</aside>;
}

function FactList() {
  return <section className="">Facts List</section>;
}

export default App;
