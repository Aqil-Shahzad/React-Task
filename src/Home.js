import { useNavigate } from "react-router-dom";
function Home() {
  const navigate=useNavigate();
  return (
    <div>
      <h1>Wellcome to our Home page</h1>
      <p>
        This is our home page which contain the whole information our website
      </p>
      <p>
        In non-single page applications, when you click on a link in the
        browser, a request is sent to the server before the HTML page gets
        rendered. In React, the page contents are created from our components.
        So what React Router does is intercept the request being sent to the
        server and then injects the contents dynamically from the components we
        have created. This is the general idea behind SPAs which allows content
        to be rendered faster without the page being refreshed. When you create
        a new project, you'll always see an index.html file in the public
        folder. All the code you write in your App component which acts as the
        root component gets rendered to this HTML file. This means that there is
        only one HTML file where your code will be rendered to.
      </p>

      <button onClick={()=>navigate("/about")}>Go to About</button><br></br>
      <button onClick={()=>navigate("/Contactus")}>Go to Contact</button>
    </div>
  );
}
export default Home;
