import { Link } from "react-router-dom";
function Page404() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}
export default Page404;
