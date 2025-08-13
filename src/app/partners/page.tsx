import PartnersList from "@/modules/partners/components/partners";
import { ArrowLeft } from "lucide-react";
import React from "react";

const CSTPartnersPage = () => {
  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-yellow-50 py-16">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-blue-400/10 rounded-full animate-float animation-delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/10 rounded-full animate-float animation-delay-300"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 opacity-100 translate-y-0`}
          >
            <div className="flex items-center justify-center mb-6">
              <ArrowLeft className="w-6 h-6 text-gray-400 mr-4 hover:text-gray-600 transition-colors cursor-pointer" />
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Home</span>
                <span>/</span>
                <span style={{ color: "#566cb3" }}>Partners</span>
              </div>
            </div>

            <h1
              className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up`}
            >
              Our <span style={{ color: "#ffc82d" }}>Trusted</span>
              <span style={{ color: "#566cb3" }}> Partners</span>
            </h1>

            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300`}
            >
              Building successful partnerships with industry leaders across
              various sectors
            </p>
          </div>
        </div>
      </section>
      <PartnersList />
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r animate-gradient-x"
          style={{
            background: "linear-gradient(135deg, #566cb3 0%, #ffc82d 100%)",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Join our growing network of successful partners and transform your
            business with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-500">
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group">
              <span className="group-hover:animate-pulse">
                Start Partnership
              </span>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CSTPartnersPage;
