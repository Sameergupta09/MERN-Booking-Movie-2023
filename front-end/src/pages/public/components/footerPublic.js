import {memo} from 'react';

function FooterPublic() {
    return ( 
        <footer className="bg-black text-blue-gray-300 border-t border-blue-gray-400 text-center text-sm lg:text-[15px] lg:text-center">
        <div className="container px-6 pt-[100px]">
          <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5"> User information </h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" >
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-zinc-400">Help</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" >
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-zinc-400">About us</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" >
                    Books Tickets
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    News
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Events
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-zinc-400">Social Networks</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-gray-700 text-center p-4">
          © 2022 Copyright -&ensp;
          <a  href="https://tailwind-elements.com/">
             Pul React
          </a>
        </div>
      </footer>
    );
}

export default memo(FooterPublic);