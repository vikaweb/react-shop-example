function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a target="_blank" href="https://github.com/vikaweb/react-shop-example">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { Header };
