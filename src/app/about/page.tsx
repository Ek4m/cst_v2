"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, Quote } from "lucide-react";
import "./styles.scss";
export default function CSTAboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Rich text content - this would typically come from a CMS or editor
  const richTextContent = {
    title: "About Caspian Soft Technologies",
    content: `
      <div class="rich-content">
        <h2>Building Tomorrow's Digital Solutions Today</h2>
        
        <p>Since our founding in <strong>2015</strong>, Caspian Soft Technologies has been at the forefront of digital innovation, transforming bold ideas into market-leading solutions. We're not just another development company – we're your strategic technology partner, committed to turning your vision into reality.</p>
        
        <h3>Our Mission</h3>
        <p>To empower businesses and entrepreneurs by providing comprehensive digital solutions that drive growth, innovation, and success in an ever-evolving technological landscape.</p>
        
        <blockquote>
          "We believe that great technology should be accessible, scalable, and transformative. Every project we undertake is an opportunity to create something remarkable."
        </blockquote>
        
        <h3>What Sets Us Apart</h3>
        
        <p>At CST, we combine technical expertise with strategic thinking to deliver solutions that don't just meet your immediate needs – they anticipate future challenges and opportunities.</p>
        
        <ul>
          <li><strong>End-to-End Solutions:</strong> From initial concept validation to post-launch support and scaling</li>
          <li><strong>Proven Track Record:</strong> Over 100+ successful product launches across diverse industries</li>
          <li><strong>Strategic Partnership:</strong> We become an extension of your team, not just a service provider</li>
          <li><strong>Innovation-Driven:</strong> Always leveraging the latest technologies and best practices</li>
        </ul>
        
        <h3>Our Approach</h3>
        
        <p>We follow a <em>human-centered design approach</em> combined with agile development methodologies. This ensures that every solution we create is not only technically sound but also intuitive and user-friendly.</p>
        
        <ol>
          <li><strong>Discovery & Strategy:</strong> Deep dive into your business goals and user needs</li>
          <li><strong>Design & Prototyping:</strong> Create intuitive, engaging user experiences</li>
          <li><strong>Development:</strong> Build robust, scalable solutions using cutting-edge technology</li>
          <li><strong>Launch & Growth:</strong> Deploy, monitor, and continuously optimize for success</li>
        </ol>
        
        <h3>Industries We Serve</h3>
        
        <p>Our diverse portfolio spans multiple industries, each presenting unique challenges that have shaped our expertise:</p>
        
        <p><strong>FinTech & Banking:</strong> Secure, compliant financial applications that revolutionize how people interact with money.</p>
        
        <p><strong>Healthcare & MedTech:</strong> Life-saving applications that improve patient outcomes and streamline healthcare delivery.</p>
        
        <p><strong>E-commerce & Retail:</strong> Engaging shopping experiences that drive conversion and customer loyalty.</p>
        
        <p><strong>Education & EdTech:</strong> Learning platforms that make knowledge accessible and engaging for learners worldwide.</p>
        
        <h3>Our Values</h3>
        
        <p>Every decision we make is guided by our core values:</p>
        
        <p><strong>🎯 Excellence:</strong> We never compromise on quality. Every line of code, every design element, and every user interaction is crafted with precision.</p>
        
        <p><strong>🤝 Partnership:</strong> Your success is our success. We build long-term relationships based on trust, transparency, and shared goals.</p>
        
        <p><strong>🚀 Innovation:</strong> We stay ahead of technology trends to ensure your solutions remain competitive and future-ready.</p>
        
        <p><strong>💡 Impact:</strong> We measure success not just by deliverables, but by the real-world impact our solutions create.</p>
        
        <h3>Looking Forward</h3>
        
        <p>As we continue to grow and evolve, our commitment remains unchanged: to be the technology partner that helps you build not just products, but sustainable, profitable businesses.</p>
        
        <p>Whether you're a startup with a groundbreaking idea, an established company looking to innovate, or an enterprise seeking digital transformation, we're here to make your vision a reality.</p>
        
        <p><strong>Ready to build something amazing together?</strong></p>
      </div>
    `,
  };

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
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <ArrowLeft className="w-6 h-6 text-gray-400 mr-4 hover:text-gray-600 transition-colors cursor-pointer" />
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Home</span>
                <span>/</span>
                <span style={{ color: "#566cb3" }}>About</span>
              </div>
            </div>

            <h1
              className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up`}
            >
              About <span style={{ color: "#ffc82d" }}>Caspian Soft</span>
              <span style={{ color: "#566cb3" }}> Technologies</span>
            </h1>

            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300`}
            >
              Discover our story, values, and the passion that drives us to
              build exceptional digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Rich Text Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Rich Text Content Display */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: richTextContent.content }}
            />
          </div>
        </div>
      </section>

      {/* Decorative Section */}
      <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  i % 2 === 0 ? "bg-yellow-400" : "bg-blue-400"
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />
          <blockquote className="text-2xl font-light italic mb-6 text-gray-200">
            `Innovation distinguishes between a leader and a follower.`
          </blockquote>
          <cite className="text-sm text-gray-400">— Steve Jobs</cite>
        </div>
      </section>

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
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Let`s discuss how we can help transform your ideas into successful
            digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-500">
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group">
              <span className="group-hover:animate-pulse">Get in Touch</span>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
