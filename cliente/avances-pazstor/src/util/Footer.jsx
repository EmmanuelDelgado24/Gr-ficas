const Footer = () => {
  return (
    <>
      <br/><br/>
      <footer className="w-full bg-teal-900 py-6">
        <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <section className="sm:flex sm:items-center sm:justify-between">
            <a
              href=""
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://www.pazstor.com.mx/logo-pazstor-big.png"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                PAZSTOR
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
            </ul>
          </section>
          <hr className="my-6 sm:mx-auto border-gray-100 lg:my-8" />
          <span className="block text-sm sm:text-center text-gray-100">
            © 2025{" "}
            <a href="" className="hover:underline">
              PAZSTOR™
            </a>
            . All Rights Reserved.
          </span>
        </section>
      </footer>
    </>
  );
};

export default Footer;
