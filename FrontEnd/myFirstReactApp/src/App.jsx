import Header from "./components/header";
import Footer from "./components/footer";
function App() {
  return (
    <>
    <Header/>
      <div id="abcd">MY FIRST REACT APP</div>
      <p className="bg-success">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
        quibusdam molestiae, praesentium accusantium ea consequuntur expedita
        reiciendis aliquam dignissimos eaque temporibus hic error numquam vitae
        culpa asperiores dolorum assumenda. Aut.
      </p>
      <button>click here</button>
      <Footer/>
    </>
  );
}

export default App;
