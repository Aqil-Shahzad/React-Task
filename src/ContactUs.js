import { Link, Outlet } from "react-router-dom";

function ContactUs() {
  return (
    <div>
      <h1>Wellcome to our Contact Us page</h1>
      <p>
        This is our About Us page which contain the whole information about us
      </p>
      <p>
       Email: hr@meissasoft@gmail.com
      </p>
      <p>
       Address: Mutafa Town ,Azam Garden, Lahore.
      </p>

      <Link to="facebook">Facebook</Link>
      <br />
      <Link to="instragram">Instragram</Link>
      <Outlet></Outlet>

<br />
<br />
<br />
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}
export default ContactUs;
