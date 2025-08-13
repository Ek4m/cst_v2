"use client";
import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Rocket,
  Code,
  TrendingUp,
  Star,
  Quote,
} from "lucide-react";

export default function CSTHomepage() {
  const stats = [
    { number: "100+", label: "Product Launches" },
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "95%", label: "Success Rate" },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Product Development",
      description:
        "End-to-end development from idea validation to scalable web and mobile applications.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Strategy & Validation",
      description:
        "Transform innovative ideas into market-ready solutions with our proven validation process.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth & Marketing",
      description:
        "Comprehensive marketing strategies to ensure successful product launch and sustained growth.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Partnership",
      description:
        "We become your technology partner, working alongside your team to achieve your vision.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "CST transformed our startup idea into a market-leading product. Their all-in-one approach saved us months of development time.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateApp",
      content:
        "The team at Caspian Soft Technologies delivered beyond our expectations. From strategy to launch, they were true partners.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, GrowthCorp",
      content:
        "Professional, reliable, and innovative. CST helped us scale our platform to handle millions of users seamlessly.",
      rating: 5,
    },
  ];

  return (
    <>
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-yellow-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  We Build
                  <span style={{ color: "#ffc82d" }} className="block">
                    Market-Ready
                  </span>
                  <span style={{ color: "#566cb3" }}>Businesses</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your innovative ideas into impactful,
                  revenue-generating solutions. From strategy to launch, we are
                  your complete digital product partner.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#566cb3" }}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                  style={{ borderColor: "#ffc82d", color: "#566cb3" }}
                >
                  View Our Work
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-yellow-400 border-2 border-white"
                    ></div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Trusted by 500+ companies
                  </p>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-2xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform -rotate-1">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div
                          className="text-3xl font-bold"
                          style={{ color: "#566cb3" }}
                        >
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span style={{ color: "#ffc82d" }}>All-in-One</span> Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We integrate strategy, development, and marketing for a seamless
              journey from idea to market success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4" style={{ color: "#566cb3" }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                <span style={{ color: "#566cb3" }}>Leaders</span> in Digital
                Innovation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since 2015, we have empowered founders, startups, and
                enterprises to transform their innovative ideas into impactful,
                revenue-generating solutions. With over 100 successful product
                launches and a decade of experience, we have established
                ourselves as leaders in digital innovation.
              </p>

              <div className="space-y-4">
                {[
                  "End-to-end product development expertise",
                  "Proven track record with 100+ launches",
                  "Strategic partnership approach",
                  "Focus on real-world impact and results",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#ffc82d" }}
                    />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-2xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8">
                <blockquote className="text-lg text-gray-700 italic">
                  {`"`}We are not just engineers. We are thinkers, makers, and
                  partners committed to building the right product, the right
                  way.{`"`}
                </blockquote>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-500">Founded in 2015</div>
                  <div className="text-lg font-semibold text-gray-900">
                    Caspian Soft Technologies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span style={{ color: "#ffc82d" }}>Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600">
              Do not just take our word for it - hear from our satisfied
              partners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r"
          style={{
            background: "linear-gradient(135deg, #566cb3 0%, #ffc82d 100%)",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Let{"'"}s transform your innovative idea into a market-ready
            solution. Start your journey with Caspian Soft Technologies today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
