"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Code,
  Globe,
  Smartphone,
  Database,
  Shield,
  Zap,
  ChevronRight,
  Quote,
  LucideIcon,
} from "lucide-react";

import "../about/styles.scss"

interface IService {
  id: number;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  content: string;
  category: string;
}
// Mock services data - this would typically come from a CMS or API
const servicesData: IService[] = [
  {
    id: 1,
    title: "Web Development",
    icon: Globe,
    shortDescription: "Custom web applications built with modern technologies",
    category: "Development",
    content: `
      <div class="rich-content">
        <h2>Professional Web Development Services</h2>
        
        <p>At Caspian Soft Technologies, we create <strong>cutting-edge web applications</strong> that deliver exceptional user experiences and drive business growth. Our web development services combine the latest technologies with proven methodologies to build scalable, secure, and high-performing solutions.</p>
        
        <h3>Our Web Development Stack</h3>
        
        <p>We leverage modern technologies to ensure your web application is future-ready:</p>
        
        <ul>
          <li><strong>Frontend:</strong> React.js, Next.js, Vue.js, Angular with responsive design</li>
          <li><strong>Backend:</strong> Node.js, Python (Django/Flask), PHP (Laravel), .NET Core</li>
          <li><strong>Databases:</strong> PostgreSQL, MongoDB, MySQL, Redis for caching</li>
          <li><strong>Cloud Services:</strong> AWS, Google Cloud, Azure deployment and hosting</li>
        </ul>
        
        <blockquote>
          "A great website is not just about looking good – it's about delivering results. Every pixel, every interaction, and every line of code should serve your business objectives."
        </blockquote>
        
        <h3>What We Deliver</h3>
        
        <p><strong>🚀 Progressive Web Apps (PWAs):</strong> Fast, reliable web applications that work offline and provide native app-like experiences.</p>
        
        <p><strong>🔧 Custom Web Applications:</strong> Tailored solutions built specifically for your business processes and requirements.</p>
        
        <p><strong>🛒 E-commerce Platforms:</strong> Comprehensive online stores with payment integration, inventory management, and analytics.</p>
        
        <p><strong>📱 Responsive Design:</strong> Websites that look and perform perfectly across all devices and screen sizes.</p>
        
        <h3>Our Development Process</h3>
        
        <ol>
          <li><strong>Requirements Analysis:</strong> Understanding your business goals and technical requirements</li>
          <li><strong>Architecture Planning:</strong> Designing scalable system architecture and technology stack</li>
          <li><strong>UI/UX Design:</strong> Creating intuitive and engaging user interfaces</li>
          <li><strong>Development:</strong> Agile development with regular updates and feedback loops</li>
          <li><strong>Testing & QA:</strong> Comprehensive testing across devices, browsers, and performance scenarios</li>
          <li><strong>Deployment:</strong> Smooth launch with monitoring and support systems in place</li>
        </ol>
        
        <p><strong>Ready to build your next web application?</strong> Let's discuss how we can bring your vision to life with modern web technologies.</p>
      </div>
    `,
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: Smartphone,
    shortDescription:
      "Native and cross-platform mobile solutions for iOS and Android",
    category: "Development",
    content: `
      <div class="rich-content">
        <h2>Mobile App Development Excellence</h2>
        
        <p>Transform your ideas into powerful mobile applications that engage users and drive business success. Our mobile development team specializes in creating <em>high-performance native and cross-platform applications</em> for both iOS and Android platforms.</p>
        
        <h3>Development Approaches</h3>
        
        <p>We offer flexible development approaches based on your specific needs and budget:</p>
        
        <p><strong>🍎 Native iOS Development:</strong> Swift and Objective-C applications that leverage the full power of iOS ecosystem, providing optimal performance and native user experience.</p>
        
        <p><strong>🤖 Native Android Development:</strong> Kotlin and Java applications that integrate seamlessly with Android features and Google services.</p>
        
        <p><strong>🔄 Cross-Platform Solutions:</strong> React Native and Flutter applications that run on both platforms while maintaining near-native performance.</p>
        
        <blockquote>
          "Mobile apps are not just scaled-down websites – they're entirely different experiences that should leverage the unique capabilities of mobile devices."
        </blockquote>
        
        <h3>Key Features We Implement</h3>
        
        <ul>
          <li><strong>User Authentication:</strong> Secure login systems with biometric authentication</li>
          <li><strong>Push Notifications:</strong> Engaging user communication and retention strategies</li>
          <li><strong>Offline Functionality:</strong> Apps that work even without internet connectivity</li>
          <li><strong>Payment Integration:</strong> Secure payment gateways and in-app purchases</li>
          <li><strong>Real-time Features:</strong> Live chat, notifications, and data synchronization</li>
          <li><strong>Analytics Integration:</strong> Comprehensive user behavior tracking and insights</li>
        </ul>
        
        <h3>Industries We Serve</h3>
        
        <p><strong>FinTech:</strong> Secure banking apps, digital wallets, and investment platforms.</p>
        
        <p><strong>Healthcare:</strong> Patient management systems, telemedicine apps, and health tracking solutions.</p>
        
        <p><strong>E-commerce:</strong> Shopping apps with advanced search, recommendations, and checkout flows.</p>
        
        <p><strong>Social & Entertainment:</strong> Social networking, media streaming, and gaming applications.</p>
        
        <p>Ready to launch your mobile app? Let's create an application that your users will love and use every day.</p>
      </div>
    `,
  },
  {
    id: 3,
    title: "Cloud Solutions",
    icon: Database,
    shortDescription: "Scalable cloud infrastructure and migration services",
    category: "Infrastructure",
    content: `
      <div class="rich-content">
        <h2>Enterprise Cloud Solutions</h2>
        
        <p>Accelerate your digital transformation with our comprehensive cloud solutions. We help businesses <strong>migrate, optimize, and scale</strong> their infrastructure using leading cloud platforms like AWS, Google Cloud, and Microsoft Azure.</p>
        
        <h3>Cloud Services Portfolio</h3>
        
        <p>Our cloud expertise spans across multiple service areas:</p>
        
        <p><strong>☁️ Cloud Migration:</strong> Seamless migration of your existing applications and data to the cloud with minimal downtime and maximum security.</p>
        
        <p><strong>🏗️ Cloud Architecture:</strong> Design and implementation of scalable, fault-tolerant cloud architectures that grow with your business.</p>
        
        <p><strong>🔄 DevOps & CI/CD:</strong> Automated deployment pipelines, continuous integration, and infrastructure as code practices.</p>
        
        <p><strong>📊 Data Analytics:</strong> Big data processing, data warehousing, and business intelligence solutions in the cloud.</p>
        
        <blockquote>
          "The cloud is not just about cost savings – it's about enabling innovation, scalability, and agility that transforms how businesses operate."
        </blockquote>
        
        <h3>Cloud Platforms We Work With</h3>
        
        <ul>
          <li><strong>Amazon Web Services (AWS):</strong> EC2, S3, Lambda, RDS, and comprehensive AWS ecosystem</li>
          <li><strong>Google Cloud Platform:</strong> Compute Engine, Cloud Storage, BigQuery, and AI/ML services</li>
          <li><strong>Microsoft Azure:</strong> Virtual Machines, Azure Functions, Cosmos DB, and Office 365 integration</li>
          <li><strong>Multi-Cloud Strategies:</strong> Hybrid and multi-cloud architectures for maximum flexibility</li>
        </ul>
        
        <h3>Benefits of Our Cloud Solutions</h3>
        
        <ol>
          <li><strong>Cost Optimization:</strong> Reduce infrastructure costs by up to 40% through optimized resource allocation</li>
          <li><strong>Scalability:</strong> Automatically scale resources based on demand without manual intervention</li>
          <li><strong>Security:</strong> Enterprise-grade security with compliance certifications and best practices</li>
          <li><strong>Disaster Recovery:</strong> Robust backup and recovery solutions with minimal RTO and RPO</li>
          <li><strong>Global Reach:</strong> Deploy applications globally with low latency and high availability</li>
        </ol>
        
        <h3>Our Cloud Migration Process</h3>
        
        <p><strong>Assessment Phase:</strong> Comprehensive analysis of your current infrastructure, applications, and requirements.</p>
        
        <p><strong>Planning Phase:</strong> Detailed migration strategy, timeline, and risk mitigation plans.</p>
        
        <p><strong>Migration Phase:</strong> Phased migration approach with thorough testing and validation.</p>
        
        <p><strong>Optimization Phase:</strong> Post-migration optimization for performance, cost, and security.</p>
        
        <p>Ready to harness the power of the cloud? Let's discuss how cloud solutions can transform your business operations.</p>
      </div>
    `,
  },
  {
    id: 4,
    title: "Cybersecurity Solutions",
    icon: Shield,
    shortDescription:
      "Comprehensive security assessments and protection strategies",
    category: "Security",
    content: `
      <div class="rich-content">
        <h2>Advanced Cybersecurity Solutions</h2>
        
        <p>Protect your digital assets with our comprehensive cybersecurity services. In today's threat landscape, <strong>proactive security</strong> is not optional – it's essential for business survival and growth.</p>
        
        <h3>Security Services Overview</h3>
        
        <p>Our cybersecurity practice covers all aspects of digital security:</p>
        
        <p><strong>🔒 Security Assessments:</strong> Comprehensive vulnerability assessments, penetration testing, and security audits to identify potential risks.</p>
        
        <p><strong>🛡️ Security Implementation:</strong> Deployment of security controls, firewalls, intrusion detection systems, and endpoint protection.</p>
        
        <p><strong>📋 Compliance Management:</strong> Ensuring compliance with GDPR, HIPAA, SOX, PCI-DSS, and other regulatory requirements.</p>
        
        <p><strong>🚨 Incident Response:</strong> 24/7 monitoring, threat detection, and rapid incident response capabilities.</p>
        
        <blockquote>
          "Cybersecurity is not about building walls – it's about creating an intelligent defense system that adapts to evolving threats while enabling business growth."
        </blockquote>
        
        <h3>Our Security Framework</h3>
        
        <ul>
          <li><strong>Identity & Access Management:</strong> Multi-factor authentication, single sign-on, and privileged access management</li>
          <li><strong>Network Security:</strong> Firewall configuration, VPN setup, and network segmentation</li>
          <li><strong>Data Protection:</strong> Encryption at rest and in transit, data loss prevention, and backup security</li>
          <li><strong>Application Security:</strong> Secure coding practices, OWASP compliance, and application firewalls</li>
          <li><strong>Cloud Security:</strong> Cloud-specific security controls and configuration management</li>
          <li><strong>Employee Training:</strong> Security awareness programs and phishing simulation exercises</li>
        </ul>
        
        <h3>Industry-Specific Security</h3>
        
        <p><strong>Financial Services:</strong> PCI-DSS compliance, fraud detection, and secure payment processing.</p>
        
        <p><strong>Healthcare:</strong> HIPAA compliance, patient data protection, and medical device security.</p>
        
        <p><strong>E-commerce:</strong> Customer data protection, secure checkout processes, and fraud prevention.</p>
        
        <p><strong>Government:</strong> High-security clearance projects, data classification, and compliance frameworks.</p>
        
        <h3>Security Metrics & Reporting</h3>
        
        <ol>
          <li><strong>Risk Assessment Reports:</strong> Detailed analysis of security posture and recommendations</li>
          <li><strong>Compliance Dashboards:</strong> Real-time compliance status and remediation tracking</li>
          <li><strong>Incident Reports:</strong> Detailed analysis of security incidents and lessons learned</li>
          <li><strong>Security KPIs:</strong> Key performance indicators for security program effectiveness</li>
        </ol>
        
        <p><strong>Don't wait for a security breach to prioritize cybersecurity.</strong> Contact us today to assess your security posture and implement robust protection measures.</p>
      </div>
    `,
  },
  {
    id: 5,
    title: "AI & Machine Learning",
    icon: Zap,
    shortDescription: "Intelligent automation and data-driven insights",
    category: "Innovation",
    content: `
      <div class="rich-content">
        <h2>AI & Machine Learning Solutions</h2>
        
        <p>Unlock the power of artificial intelligence to transform your business operations. Our AI and machine learning services help organizations <em>automate processes, gain insights, and create intelligent applications</em> that adapt and learn from data.</p>
        
        <h3>AI Capabilities We Offer</h3>
        
        <p>Our AI expertise spans multiple domains and technologies:</p>
        
        <p><strong>🤖 Machine Learning Models:</strong> Custom ML models for prediction, classification, clustering, and recommendation systems.</p>
        
        <p><strong>🧠 Deep Learning:</strong> Neural networks for image recognition, natural language processing, and complex pattern detection.</p>
        
        <p><strong>💬 Natural Language Processing:</strong> Chatbots, sentiment analysis, text summarization, and language translation services.</p>
        
        <p><strong>👁️ Computer Vision:</strong> Image and video analysis, object detection, facial recognition, and quality inspection systems.</p>
        
        <blockquote>
          "AI is not about replacing humans – it's about augmenting human capabilities and enabling businesses to make smarter decisions faster."
        </blockquote>
        
        <h3>Industry Applications</h3>
        
        <ul>
          <li><strong>Retail & E-commerce:</strong> Personalized recommendations, dynamic pricing, inventory optimization</li>
          <li><strong>Finance:</strong> Fraud detection, algorithmic trading, credit scoring, risk assessment</li>
          <li><strong>Healthcare:</strong> Medical image analysis, drug discovery, patient monitoring, diagnostic assistance</li>
          <li><strong>Manufacturing:</strong> Predictive maintenance, quality control, supply chain optimization</li>
          <li><strong>Marketing:</strong> Customer segmentation, campaign optimization, content personalization</li>
        </ul>
        
        <h3>Our AI Development Process</h3>
        
        <ol>
          <li><strong>Problem Definition:</strong> Understanding business challenges and identifying AI opportunities</li>
          <li><strong>Data Assessment:</strong> Evaluating data quality, quantity, and accessibility for model training</li>
          <li><strong>Model Development:</strong> Building and training custom AI models using appropriate algorithms</li>
          <li><strong>Validation & Testing:</strong> Rigorous testing to ensure model accuracy and reliability</li>
          <li><strong>Deployment:</strong> Integration into existing systems with scalable infrastructure</li>
          <li><strong>Monitoring:</strong> Continuous monitoring and model improvement based on performance metrics</li>
        </ol>
        
        <h3>Technologies We Use</h3>
        
        <p><strong>Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn, Keras, and Hugging Face Transformers.</p>
        
        <p><strong>Cloud AI Services:</strong> AWS SageMaker, Google AI Platform, Azure Machine Learning, and IBM Watson.</p>
        
        <p><strong>Programming Languages:</strong> Python, R, Julia, and specialized libraries for data science and ML.</p>
        
        <h3>Expected Outcomes</h3>
        
        <p><strong>📈 Increased Efficiency:</strong> Automate repetitive tasks and streamline business processes.</p>
        
        <p><strong>🎯 Better Decision Making:</strong> Data-driven insights that support strategic business decisions.</p>
        
        <p><strong>💰 Cost Reduction:</strong> Optimize operations and reduce manual intervention requirements.</p>
        
        <p><strong>🚀 Competitive Advantage:</strong> Stay ahead with innovative AI-powered features and services.</p>
        
        <p>Ready to harness the power of AI? Let's explore how artificial intelligence can revolutionize your business operations.</p>
      </div>
    `,
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: Code,
    shortDescription: "User-centered design that converts and delights",
    category: "Design",
    content: `
      <div class="rich-content">
        <h2>UI/UX Design Excellence</h2>
        
        <p>Create exceptional user experiences that drive engagement and conversions. Our design team combines <strong>aesthetic excellence with functional usability</strong> to deliver interfaces that users love and businesses profit from.</p>
        
        <h3>Our Design Philosophy</h3>
        
        <p>We believe great design is invisible – it should feel intuitive, solve problems effortlessly, and create emotional connections with users.</p>
        
        <blockquote>
          "Design is not just what it looks like and feels like. Design is how it works. Every interaction should feel natural and purposeful."
        </blockquote>
        
        <h3>Design Services</h3>
        
        <p><strong>🎨 User Interface Design:</strong> Beautiful, modern interfaces that reflect your brand and engage your audience.</p>
        
        <p><strong>📱 User Experience Design:</strong> Intuitive user journeys that guide users toward desired actions and outcomes.</p>
        
        <p><strong>🔍 User Research:</strong> In-depth research to understand your users' needs, behaviors, and pain points.</p>
        
        <p><strong>🏗️ Information Architecture:</strong> Logical organization of content and features for optimal user flow.</p>
        
        <p><strong>🖼️ Prototyping:</strong> Interactive prototypes that bring ideas to life and validate concepts early.</p>
        
        <h3>Our Design Process</h3>
        
        <ul>
          <li><strong>Discovery:</strong> Understanding business goals, user needs, and competitive landscape</li>
          <li><strong>Research:</strong> User interviews, surveys, and usability testing for insights</li>
          <li><strong>Ideation:</strong> Brainstorming solutions and creating initial concept sketches</li>
          <li><strong>Wireframing:</strong> Low-fidelity layouts focusing on structure and functionality</li>
          <li><strong>Visual Design:</strong> High-fidelity mockups with colors, typography, and imagery</li>
          <li><strong>Prototyping:</strong> Interactive prototypes for testing and validation</li>
          <li><strong>Testing:</strong> Usability testing and iteration based on user feedback</li>
        </ul>
        
        <h3>Design Specializations</h3>
        
        <ol>
          <li><strong>Web Applications:</strong> Responsive designs that work seamlessly across all devices</li>
          <li><strong>Mobile Apps:</strong> Native iOS and Android design patterns and guidelines</li>
          <li><strong>E-commerce:</strong> Conversion-optimized shopping experiences and checkout flows</li>
          <li><strong>SaaS Platforms:</strong> Complex dashboard designs that simplify data visualization</li>
          <li><strong>Brand Identity:</strong> Logo design, brand guidelines, and visual identity systems</li>
        </ol>
        
        <h3>Tools & Technologies</h3>
        
        <p><strong>Design Tools:</strong> Figma, Adobe Creative Suite, Sketch, and InVision for comprehensive design workflows.</p>
        
        <p><strong>Prototyping:</strong> Principle, Framer, and Marvel for interactive prototypes and animations.</p>
        
        <p><strong>Research Tools:</strong> Hotjar, UserTesting, and Google Analytics for user behavior insights.</p>
        
        <h3>Measurable Results</h3>
        
        <p><strong>🎯 Increased Conversions:</strong> Our designs typically improve conversion rates by 25-40%.</p>
        
        <p><strong>📈 Better Engagement:</strong> Enhanced user engagement and reduced bounce rates.</p>
        
        <p><strong>😊 User Satisfaction:</strong> Higher user satisfaction scores and positive feedback.</p>
        
        <p><strong>⚡ Faster Time-to-Market:</strong> Validated designs reduce development time and iterations.</p>
        
        <p>Ready to create designs that users love? Let's craft an experience that sets your product apart from the competition.</p>
      </div>
    `,
  },
];

export default function CSTServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<IService>();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleServiceClick = (service: IService) => {
    setSelectedService(service);
  };

  const handleBackToServices = () => {
    setSelectedService(undefined);
  };

  if (selectedService) {
    return (
      <ServiceDetailView
        service={selectedService}
        onBack={handleBackToServices}
        isVisible={isVisible}
      />
    );
  }

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
                <span style={{ color: "#566cb3" }}>Services</span>
              </div>
            </div>

            <h1
              className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up`}
            >
              Our <span style={{ color: "#ffc82d" }}>Services</span>
            </h1>

            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300`}
            >
              Comprehensive digital solutions to transform your business and
              drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 group border border-gray-100 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="p-8">
                    {/* Service Icon */}
                    <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Service Category */}
                    <div className="text-sm font-medium text-gray-500 mb-2">
                      {service.category}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Learn More Button */}
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Let`s discuss which services can best help you achieve your business
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-500">
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group">
              <span className="group-hover:animate-pulse">Contact Us</span>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// Service Detail Component
function ServiceDetailView({
  service,
  onBack,
  isVisible,
}: {
  service: IService;
  onBack: () => void;
  isVisible: boolean;
}) {
  const IconComponent = service.icon;

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
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Back Navigation */}
            <div className="flex items-center mb-8">
              <button
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Services</span>
              </button>
            </div>

            {/* Service Header */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <IconComponent className="w-10 h-10" />
                </div>
              </div>

              <div className="text-sm font-medium text-gray-500 mb-2">
                {service.category}
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                {service.title}
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Content Section */}
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
              dangerouslySetInnerHTML={{ __html: service.content }}
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
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
          <h2 className="text-3xl font-bold mb-6">
            Interested in {service.title}?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let`s discuss how our {service.title.toLowerCase()} services can
            help your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
