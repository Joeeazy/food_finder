export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row bg-slate-50 text-black font-semibold justify-center py-20">
      {/* div one */}
      <div className="md:w-4/5 mx-auto">
        <footer className="footer xl:p-10 py-20 text-center text-xl px-10 mt-20">
          <nav className="mb-10 md:mb-0">
            <h6 className="footer-title text-green font-semibold">Services</h6>
            <a className="link link-hover">Home Chefs</a>
            <a className="link link-hover">Foods</a>
            <a className="link link-hover">Delivery</a>
            <a className="link link-hover">Orders</a>
          </nav>
          <nav className="mb-10 md:mb-0">
            <h6 className="footer-title text-green font-semibold">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Locations</a>
            <a className="link link-hover">Address</a>
          </nav>
          <nav className="mb-10 md:mb-0">
            <h6 className="footer-title text-green font-semibold">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title text-green font-semibold mb-4">
              Newsletter for New & Available Foods
            </h6>
            <fieldset className="form-control w-80 mx-auto">
              <label className="label">
                <span className="label-text text-black font-semibold">
                  Enter your email address
                </span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input bg-gradient-to-r from-green to-lime-300 placeholder-white"
                />
                <button className="button bg-green rounded-md px-8 py-3 text-white flex items-center">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    </div>
  );
}
