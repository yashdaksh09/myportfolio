const Footer = () => {
  return (
    <footer className="footer-section">
        <hr className="border-gray-800 my-8" />
        <div className="rights">
          <p className="">
            © {new Date().getFullYear()} YD Portfolio.  All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made By @Yash Daksh
          </p>
      </div>
    </footer>
  );
};

export default Footer;
