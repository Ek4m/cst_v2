"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

// Define the form values interface
interface FormValues {
  // Step 1 - Basic Information
  name: string;
  email: string;
  company: string;
  phone: string;

  // Step 2 - Idea Details
  ideaTitle: string;
  ideaDescription: string;
  targetAudience: string;
  businessGoals: string;
}

export default function CustomerIdeaForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    company: "",
    phone: "",
    ideaTitle: "",
    ideaDescription: "",
    targetAudience: "",
    businessGoals: "",
  });

  // Validation schemas for each step
  const Step1ValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    company: Yup.string().required("Company name is required"),
    phone: Yup.string()
      .matches(/^[0-9\-\+\(\)\s]+$/, "Invalid phone number")
      .required("Phone number is required"),
  });

  const Step2ValidationSchema = Yup.object({
    ideaTitle: Yup.string().required("Idea title is required"),
    ideaDescription: Yup.string()
      .min(50, "Description should be at least 50 characters")
      .required("Idea description is required"),
    targetAudience: Yup.string().required("Target audience is required"),
    businessGoals: Yup.string().required("Business goals are required"),
  });

  // Handle form submission for each step
  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setFormData({ ...formData, ...values });

    if (step < 4) {
      setStep(step + 1);
    }

    setSubmitting(false);
  };

  // Go back to previous step
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Reset form and go to step 1
  const handleReset = () => {
    setStep(1);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      ideaTitle: "",
      ideaDescription: "",
      targetAudience: "",
      businessGoals: "",
    });
  };

  return (
    <div className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-yellow-50"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Share Your <span style={{ color: "#ffc82d" }}>Innovative</span>{" "}
            <span style={{ color: "#566cb3" }}>Idea</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let us help transform your concept into a market-ready solution.
            Fill out the form below to get started.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 h-1 transform -translate-y-1/2 bg-gray-200 w-full"></div>
          <div className="relative flex justify-between w-full mt-6">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                    step >= stepNumber
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {stepNumber}
                </div>
                <div className="text-xs mt-2 text-gray-600">
                  {stepNumber === 1 && "Basic Info"}
                  {stepNumber === 2 && "Idea Details"}
                  {stepNumber === 3 && "Review"}
                  {stepNumber === 4 && "Confirmation"}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          {step === 1 && (
            <Formik
              initialValues={formData}
              validationSchema={Step1ValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Tell us about yourself
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name && touched.name
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="John Doe"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email && touched.email
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="john@example.com"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Name *
                      </label>
                      <Field
                        type="text"
                        name="company"
                        id="company"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.company && touched.company
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Your Company"
                      />
                      <ErrorMessage
                        name="company"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number *
                      </label>
                      <Field
                        type="text"
                        name="phone"
                        id="phone"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.phone && touched.phone
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="+1 (555) 123-4567"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ backgroundColor: "#566cb3" }}
                    >
                      Next Step
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}

          {step === 2 && (
            <Formik
              initialValues={formData}
              validationSchema={Step2ValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Tell us about your idea
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="ideaTitle"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Idea Title *
                      </label>
                      <Field
                        type="text"
                        name="ideaTitle"
                        id="ideaTitle"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.ideaTitle && touched.ideaTitle
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="A brief title for your idea"
                      />
                      <ErrorMessage
                        name="ideaTitle"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="ideaDescription"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Idea Description *
                      </label>
                      <Field
                        as="textarea"
                        name="ideaDescription"
                        id="ideaDescription"
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.ideaDescription && touched.ideaDescription
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Describe your idea in detail. What problem does it solve? What makes it unique?"
                      />
                      <ErrorMessage
                        name="ideaDescription"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="targetAudience"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Target Audience *
                      </label>
                      <Field
                        type="text"
                        name="targetAudience"
                        id="targetAudience"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.targetAudience && touched.targetAudience
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Who is your product or service for?"
                      />
                      <ErrorMessage
                        name="targetAudience"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="businessGoals"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Business Goals *
                      </label>
                      <Field
                        as="textarea"
                        name="businessGoals"
                        id="businessGoals"
                        rows={3}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.businessGoals && touched.businessGoals
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="What are your business objectives with this idea?"
                      />
                      <ErrorMessage
                        name="businessGoals"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 border-2 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ borderColor: "#ffc82d", color: "#566cb3" }}
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Previous
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ backgroundColor: "#566cb3" }}
                    >
                      Review Information
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Review Your Information
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="text-base font-medium">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>
                      <p className="text-base font-medium">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Company</p>
                      <p className="text-base font-medium">
                        {formData.company}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-base font-medium">{formData.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Idea Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Idea Title</p>
                      <p className="text-base font-medium">
                        {formData.ideaTitle}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Description</p>
                      <p className="text-base">{formData.ideaDescription}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Target Audience</p>
                      <p className="text-base">{formData.targetAudience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Business Goals</p>
                      <p className="text-base">{formData.businessGoals}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 border-2 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ borderColor: "#ffc82d", color: "#566cb3" }}
                >
                  <ArrowLeft className="w-5 h-5" />
                  Edit Information
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#566cb3" }}
                >
                  Submit
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8 space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900">
                Submission Successful!
              </h2>

              <p className="text-lg text-gray-600 max-w-md mx-auto">
                Thank you for sharing your idea with us. Our team will review
                your submission and contact you within 2 business days.
              </p>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300"
                  style={{ backgroundColor: "#566cb3" }}
                >
                  Submit Another Idea
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
