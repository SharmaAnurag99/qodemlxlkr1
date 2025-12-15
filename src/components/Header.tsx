import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container nav">
        <div className="logo">
          <div className="logo-mark">Q</div>
          QodeML Labs
        </div>

        <nav className="nav-links">
          <Link href="#services">Services</Link>
          <Link href="#work">Work</Link>
          <Link href="#process">Process</Link>
          <Link href="#industries">Industries</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <div className="nav-right">
          <button className="btn btn-outline">Download SOW</button>
          <button className="btn btn-peach">Book Strategy Call</button>
        </div>
      </div>
    </header>
  );
}
