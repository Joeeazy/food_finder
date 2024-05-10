import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div className="section-container bg-slate-50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* left */}
        <div className="md:w-1/2">
          <img
            src="/images/testimonials/testimonials.png"
            alt="Testimonial banner"
          />
        </div>
        <div className="md:w-1/2">
          <div className="text- md:w-4/5">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">
              What Our Customers{" "}
              <span className="bg-gradient-to-r from-green to bg-emerald-500  text-transparent bg-clip-text">
                Say About Us
              </span>
            </h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              "I had the pleasure of dining at Foodi last night, and I'm stil
              raving about the experience!! The attention to detail in
              presentation and service was impeccable"{" "}
            </blockquote>

            {/* avatar testimonials */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group  -space-x-6 rtl:space-x-reverse">
                <div className=" border-transparent">
                  <div className="w-12">
                    <img src="images/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="border-transparent">
                  <div className="w-12">
                    <img src="images/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="border-transparent">
                  <div className="w-12">
                    <img src="images/testimonials/testimonial3.png" />
                  </div>
                </div>
                <div className="border-transparent avatar placeholder">
                  <div className="w-12 bg-slate-100  text-green">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="text-black text-lg font-semibold">
                  Customer Feedbacks
                </h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  <span className="text-gray-500 font-medium">4.9</span>{" "}
                  <span className="text-gray-500 ">(20.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
