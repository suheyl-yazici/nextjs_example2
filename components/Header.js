import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
            <Link href="/about">
              <a>Hakkında</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          .header {
            background: #b2bec3;
            border-bottom: 1px solid #ccc;
            ul {
                display: flex;
                justify-content: center;
              li {
                a {
                  display: flex;
                  height: 60px;
                  align-items: center;
                  text-decoration: none;
                  padding: 0px 20px;
                }
              }
            }
          }
        `}
      </style>
    </header>
  );
}
