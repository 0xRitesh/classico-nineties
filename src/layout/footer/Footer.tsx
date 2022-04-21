import './Footer.scss'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p className="copyright-text">&copy; Copyright {year}, Classico Nineties</p>
    </footer>
  );
};

export default Footer;
