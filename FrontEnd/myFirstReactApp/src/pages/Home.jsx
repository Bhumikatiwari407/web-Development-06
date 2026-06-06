import { useNavigate } from "react-router-dom";
function Home(){
     return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Welcome To Home Page!!!</h1>
          <p className="text-center">
            we have a wide range of clothings , eootwear and Accessories for you 
            Please check our Products and enjoy shopping with us.
          </p>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary me-2" >
                Check our Products
            </button>
          </div>
         
        </div>
      </div>
    </>
  );
}
export default Home;