import React from "react";
import {
  Users,
  Award,
  Globe,
  Heart,
  Package,
  Shield,
  Star,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
              Crafting Scents of{" "}
              <span className="text-amber-200">Elegance</span> Since 2005
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-10 leading-relaxed">
              Where artistry meets aroma, creating unforgettable fragrance
              experiences that tell your unique story.
            </p>
            <button className="group bg-white text-amber-900 px-8 py-4 rounded-full font-semibold hover:bg-amber-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center mx-auto gap-2">
              Discover Our Story
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-200 rounded-3xl -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="3OTOR Perfume Creation"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 rounded-3xl -z-10"></div>
              </div>
            </div>

            <div>
              <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
                Our Heritage
              </span>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                A Legacy of{" "}
                <span className="text-amber-700">Perfume Excellence</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in the heart of Morocco, 3OTOR began as a small
                family-owned perfumery with a simple vision: to bring the
                world's finest fragrances to discerning customers who appreciate
                true craftsmanship.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Today, with over 100 stores across Morocco, we've grown into a
                premier destination for luxury scents while staying true to our
                roots—personalized service, expert knowledge, and an unwavering
                commitment to quality.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                  <div className="text-amber-700 mb-3">
                    <Award className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">
                    18+ Years
                  </h3>
                  <p className="text-gray-600">Of fragrance expertise</p>
                </div>
                <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                  <div className="text-rose-700 mb-3">
                    <Users className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">
                    100+ Stores
                  </h3>
                  <p className="text-gray-600">Across Morocco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              The <span className="text-amber-700">3OTOR Difference</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We believe every scent tells a story. Our approach combines
              traditional craftsmanship with modern innovation to create
              fragrances that resonate with your personality and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Passion for Quality",
                description:
                  "Every fragrance is meticulously crafted using the finest ingredients sourced from around the world.",
                color: "text-rose-600",
                bg: "bg-rose-50",
                border: "border-rose-100",
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Global Sourcing",
                description:
                  "We travel the world to discover unique scents and ingredients for our exclusive collections.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                border: "border-emerald-100",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Trust & Transparency",
                description:
                  "We provide detailed information about every fragrance, ensuring you make informed choices.",
                color: "text-blue-600",
                bg: "bg-blue-50",
                border: "border-blue-100",
              },
              {
                icon: <Package className="w-12 h-12" />,
                title: "Personalized Service",
                description:
                  "Our expert consultants help you find the perfect scent that matches your personality.",
                color: "text-amber-600",
                bg: "bg-amber-50",
                border: "border-amber-100",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`${value.bg} ${value.border} p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
              >
                <div className={`${value.color} mb-6`}>{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Craft
            </span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              The Art of{" "}
              <span className="text-amber-700">Fragrance Creation</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-200 to-rose-200"></div>

            {/* Timeline Items */}
            <div className="relative space-y-32">
              {/* Vertical Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 -translate-x-1/2"></div>

              {[
                {
                  step: "01",
                  title: "Sourcing Ingredients",
                  description:
                    "We source the finest raw materials from around the world—from Moroccan roses to Indonesian sandalwood.",
                  image:
                    "/assets/images/1.jpeg",
                },
                {
                  step: "02",
                  title: "Expert Blending",
                  description:
                    "Our master perfumers blend ingredients with precision, creating harmonious and long-lasting fragrances.",
                  image:
                    "/assets/images/2.jpeg",
                },
                {
                  step: "03",
                  title: "Quality Testing",
                  description:
                    "Every batch undergoes rigorous testing to ensure consistent quality and perfect scent development.",
                  image:
                    "/assets/images/3.jpeg",
                },
                {
                  step: "04",
                  title: "Packaging & Delivery",
                  description:
                    "Elegant packaging protects your fragrance until it reaches your hands, ready to create memories.",
                  image:
                    "/assets/images/4.jpeg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-16 ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Circle */}
                  <div className="absolute lg:static -top-12 left-1/2 -translate-x-1/2 lg:translate-x-0 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-amber-700 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl z-20">
                    {item.step}
                  </div>

                  {/* Text */}
                  <div
                    className={`lg:w-5/12 mt-16 mr-8 ml-8 lg:mt-0 px-4 lg:px-12 ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="lg:w-5/12 px-4 lg:px-12">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-2xl shadow-xl h-72 w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Meet Our Experts
            </span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Master <span className="text-amber-700">Perfumers</span> Behind
              the Scents
            </h2>
            <p className="text-gray-600 text-lg">
              Our team of expert perfumers brings decades of experience and
              passion to every fragrance we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Benali",
                role: "Master Perfumer",
                experience: "25+ years",
                image:
                  "/assets/images/seller1.jpeg",
                specialty: "Oriental Scents",
              },
              {
                name: "Sophie Martin",
                role: "Fragrance Director",
                experience: "18 years",
                image:
                  "/assets/images/seller3.jpeg",
                specialty: "Floral Notes",
              },
              {
                name: "Karim Alami",
                role: "Sourcing Specialist",
                experience: "15 years",
                image:
                  "/assets/images/seller2.jpeg",
                specialty: "Rare Ingredients",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <span>{member.experience} experience</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Specialty: </span>
                    <span className="font-medium text-gray-700">
                      {member.specialty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
