const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavours and presentation",
    image: "images/services/icon1.png",
  },
  {
    id: 2,
    title: "Fast Delivery",
    des: "We deliver your order promptly to your door",
    image: "images/services/icon2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using our online ordering",
    image: "images/services/icon3.png",
  },
  {
    id: 4,
    title: "Gift cards",
    des: "Give the gift of exceptional dining with Foodi Gift Cards",
    image: "images/services/icon4.png",
  },
];

export default function Services() {
  return (
    <div className="section-container bg-slate-50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* text */}
        <div className="md:w-1/2">
          <div className="text- md:w-4/5">
            <p className="subtitle">Our Story and Services</p>
            <h2 className="title">Our Culinary Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              Rooting in passion, we curate unforgettable dining experience and
              other exceptional services, blending culinary artistry with warm
              hospitality
            </p>
            <button className="button bg-green py-3 px-8 rounded-full text-white">
              Explore
            </button>
          </div>
        </div>
        {/* service images */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-300 hover:border"
              >
                <img src={service.image} alt="" className="mx-auto" />
                <h5 className="pt-3 font-semibold">{service.title}</h5>
                <p className="text-[#908095]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
