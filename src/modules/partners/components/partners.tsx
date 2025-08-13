"use client";
import React, { useState, useEffect } from "react";
import {
  Quote,
  Star,
  MessageCircle,
  X,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

export interface Partner {
  id: number;
  title: string;
  logo: string;
  website?: string;
  industry: string;
  partnershipYear?: number;
  testimonial?: {
    content: string;
    author: string;
    position: string;
    rating?: number;
    projectType?: string;
  };
}

// Mock partners data - this would typically come from a CMS or API
const partnersData: Partner[] = [
  {
    id: 1,
    title: "TechFlow Solutions",
    logo: "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=TechFlow",
    website: "https://techflow.com",
    industry: "Software Development",
    partnershipYear: 2020,
    testimonial: {
      content:
        "Caspian Soft Technologies transformed our digital infrastructure completely. Their expertise in cloud migration helped us reduce costs by 40% while improving performance dramatically. The team's dedication and technical prowess are truly exceptional.",
      author: "Sarah Johnson",
      position: "CTO, TechFlow Solutions",
      rating: 5,
      projectType: "Cloud Migration & Infrastructure",
    },
  },
  {
    id: 2,
    title: "Global Finance Corp",
    logo: "https://via.placeholder.com/120x60/059669/FFFFFF?text=GlobalFin",
    website: "https://globalfinance.com",
    industry: "Financial Services",
    partnershipYear: 2019,
    testimonial: {
      content:
        "Working with CST on our mobile banking app was a game-changer. They delivered a secure, user-friendly solution that our customers love. The app has seen 300% increase in user engagement since launch. Their attention to security and compliance is outstanding.",
      author: "Michael Chen",
      position: "Head of Digital Innovation",
      rating: 5,
      projectType: "Mobile Banking Application",
    },
  },
  {
    id: 3,
    title: "MedCare Healthcare",
    logo: "https://via.placeholder.com/120x60/DC2626/FFFFFF?text=MedCare",
    website: "https://medcare.com",
    industry: "Healthcare",
    partnershipYear: 2021,
  },
  {
    id: 4,
    title: "EduTech Innovations",
    logo: "https://via.placeholder.com/120x60/7C3AED/FFFFFF?text=EduTech",
    website: "https://edutech.com",
    industry: "Education Technology",
    partnershipYear: 2022,
    testimonial: {
      content:
        "The e-learning platform CST built for us revolutionized how we deliver education. The AI-powered personalized learning features have improved student outcomes by 45%. Their understanding of the education sector is remarkable.",
      author: "Dr. Emily Rodriguez",
      position: "Chief Academic Officer",
      rating: 5,
      projectType: "AI-Powered Learning Platform",
    },
  },
  {
    id: 5,
    title: "RetailMax",
    logo: "https://via.placeholder.com/120x60/EA580C/FFFFFF?text=RetailMax",
    website: "https://retailmax.com",
    industry: "Retail & E-commerce",
    partnershipYear: 2020,
    testimonial: {
      content:
        "Our partnership with Caspian Soft has been transformative. The e-commerce platform they developed handles our peak traffic seamlessly and the conversion optimization features increased our sales by 60%. Exceptional work!",
      author: "James Wilson",
      position: "CEO, RetailMax",
      rating: 5,
      projectType: "E-commerce Platform Development",
    },
  },
  {
    id: 6,
    title: "Green Energy Solutions",
    logo: "https://via.placeholder.com/120x60/059669/FFFFFF?text=GreenEnergy",
    website: "https://greenenergy.com",
    industry: "Renewable Energy",
    partnershipYear: 2023,
  },
  {
    id: 7,
    title: "FinanceFlow",
    logo: "https://via.placeholder.com/120x60/1D4ED8/FFFFFF?text=FinFlow",
    website: "https://financeflow.com",
    industry: "FinTech",
    partnershipYear: 2021,
  },
  {
    id: 8,
    title: "LogisticsPro",
    logo: "https://via.placeholder.com/120x60/B45309/FFFFFF?text=LogiPro",
    website: "https://logisticspro.com",
    industry: "Logistics & Supply Chain",
    partnershipYear: 2022,
    testimonial: {
      content:
        "The supply chain management system CST developed for us provides real-time visibility across our entire operation. We've reduced delivery times by 30% and operational costs by 25%. Their solution exceeded our expectations.",
      author: "Anna Thompson",
      position: "Operations Director",
      rating: 4,
      projectType: "Supply Chain Management System",
    },
  },
  {
    id: 9,
    title: "TravelTech",
    logo: "https://via.placeholder.com/120x60/DB2777/FFFFFF?text=TravelTech",
    website: "https://traveltech.com",
    industry: "Travel & Tourism",
    partnershipYear: 2020,
  },
  {
    id: 10,
    title: "AgriSmart",
    logo: "https://via.placeholder.com/120x60/16A34A/FFFFFF?text=AgriSmart",
    website: "https://agrismart.com",
    industry: "Agriculture Technology",
    partnershipYear: 2023,
    testimonial: {
      content:
        "The IoT-based agricultural monitoring system developed by CST has revolutionized our farming operations. We now have precise control over irrigation, fertilization, and crop monitoring. Yield has increased by 35% while reducing resource consumption.",
      author: "Robert Martinez",
      position: "Head of Technology",
      rating: 5,
      projectType: "IoT Agricultural Monitoring System",
    },
  },
];

export default function PartnersList() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePartnerClick = (partner: Partner) => {
    if (partner.testimonial) {
      setSelectedPartner(partner);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPartner(null);
  };

  const partnersWithTestimonials = partnersData.filter((p) => p.testimonial);
  const partnersWithoutTestimonials = partnersData.filter(
    (p) => !p.testimonial
  );

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <>
      {/* Featured Partners with Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Partner Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any partner below to read their success story and
              experience working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {partnersWithTestimonials.map((partner, index) => (
              <div
                key={partner.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 group border border-gray-100 relative ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handlePartnerClick(partner)}
              >
                {/* Testimonial Indicator */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full">
                  <MessageCircle className="w-4 h-4" />
                </div>

                <div className="p-8">
                  {/* Partner Logo */}
                  <div className="flex items-center justify-center mb-6 h-16">
                    <img
                      src={partner.logo}
                      alt={`${partner.title} logo`}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Partner Info */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors">
                    {partner.title}
                  </h3>

                  <p className="text-gray-600 text-center mb-4">
                    {partner.industry}
                  </p>

                  {partner.partnershipYear && (
                    <p className="text-sm text-gray-500 text-center mb-4">
                      Partner since {partner.partnershipYear}
                    </p>
                  )}

                  {/* Testimonial Preview */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center mb-2">
                      {renderStars(partner.testimonial?.rating || 5)}
                    </div>
                    <p className="text-sm text-gray-700 text-center line-clamp-3">
                      {`"`}
                      {partner.testimonial?.content.substring(0, 120)}...{`"`}
                    </p>
                  </div>

                  {/* Click indicator */}
                  <div className="flex items-center justify-center text-blue-600 font-medium group-hover:text-blue-700">
                    <span>Read Full Story</span>
                    <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Extended Partner Network
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Collaborating with innovative companies across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partnersWithoutTestimonials.map((partner, index) => (
              <div
                key={partner.id}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  animationDelay: `${
                    (index + partnersWithTestimonials.length) * 100
                  }ms`,
                }}
              >
                <div className="p-6">
                  {/* Partner Logo */}
                  <div className="flex items-center justify-center mb-4 h-12">
                    <img
                      src={partner.logo}
                      alt={`${partner.title} logo`}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Partner Info */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors">
                    {partner.title}
                  </h3>

                  <p className="text-sm text-gray-600 text-center mb-2">
                    {partner.industry}
                  </p>

                  {partner.partnershipYear && (
                    <p className="text-xs text-gray-500 text-center">
                      Since {partner.partnershipYear}
                    </p>
                  )}

                  {partner.website && (
                    <div className="flex items-center justify-center mt-3">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      {isModalOpen && selectedPartner && selectedPartner.testimonial && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              {/* Partner Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4 h-16">
                  <img
                    src={selectedPartner.logo}
                    alt={`${selectedPartner.title} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedPartner.title}
                </h3>
                <p className="text-gray-600 mb-2">{selectedPartner.industry}</p>
                {selectedPartner.testimonial.projectType && (
                  <p className="text-sm text-blue-600 font-medium">
                    {selectedPartner.testimonial.projectType}
                  </p>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                {renderStars(selectedPartner.testimonial.rating || 5)}
              </div>

              {/* Testimonial Content */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6 relative">
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {selectedPartner.testimonial.content}
                </p>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {selectedPartner.testimonial.author}
                  </p>
                  <p className="text-gray-600">
                    {selectedPartner.testimonial.position}
                  </p>
                </div>
              </div>

              {/* Partnership Info */}
              <div className="text-center">
                {selectedPartner.partnershipYear && (
                  <p className="text-gray-600 mb-4">
                    Partnership established in {selectedPartner.partnershipYear}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
