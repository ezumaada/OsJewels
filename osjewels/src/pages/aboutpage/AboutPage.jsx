import React from "react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Kurt Johnson",
      role: "Jewelry Designer",
      email: "Kurt.j@example.com",
      phone: "+1 (234) 567-890",
      img: "/image/team2.jpeg",
    },
    {
      name: "Michael Smith",
      role: "Sales Manager",
      email: "michael.s@example.com",
      phone: "+1 (987) 654-321",
      img: "/image/team2.jpeg",
    },
    {
      name: "Emily Davis",
      role: "Customer Support",
      email: "emily.d@example.com",
      phone: "+1 (456) 789-012",
      img: "/image/team1.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <img
          src="/path-to-hero-image.jpg"
          alt="About Us"
          className="w-full h-[400px] object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            About Us
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            Crafting Timeless Elegance, One Piece at a Time
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              At Oster Jewelers, we believe in crafting timeless jewelry that
              tells a story. Every piece in our collection is a blend of
              elegance, craftsmanship, and quality. With decades of experience
              in the industry, we are committed to delivering unmatched
              artistry and exceptional customer service.
            </p>
          </div>
          <div className="animate-fade-right">
            <img
              src="/path-to-about-image.jpg"
              alt="Our Story"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="bg-gray-100 py-12 px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Meet Our Team
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center">{member.name}</h3>
              <p className="text-center text-gray-600">{member.role}</p>
              <div className="mt-4 text-center text-gray-600">
                <p>Email: {member.email}</p>
                <p>Phone: {member.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
