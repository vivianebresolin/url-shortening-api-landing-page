import Button from "../Button";
import Link from "../Link";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <nav className="flex justify-around mt-10">
      <div className="flex gap-x-10 items-center">
        <img src={logo}/>
        <div className="flex gap-x-8">
          <Link>Features</Link>
          <Link>Pricing</Link>
          <Link>Resources</Link>
        </div>
      </div>
      <div className="flex gap-x-8 items-center">
        <Link>Login</Link>
        <Button rounded text='Sign Up'/>
      </div>
    </nav>
  );
}