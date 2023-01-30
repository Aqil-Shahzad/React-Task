import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <h1>Wellcome to our About Us page</h1>
      <p>
        This is our About Us page which contain the whole information about us
      </p>
      <p>
        You need to understand how pages are rendered in a React app before
        diving into routing. This section is aimed at beginners – you can to
        skip it if you already understand what a SPA is and how it relates to
        React.
      </p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}
export default About;
