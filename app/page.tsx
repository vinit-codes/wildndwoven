import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative py-16 md:py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/newback.png"
            alt="Wild and Woven eco-friendly bags"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-eco-green-800/30"></div>
        </div>

        <div className="container-custom relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Luxury Eco-Friendly Products for Premium Brands
            </h1>
            <p className="text-base sm:text-lg">
              Elevate your brand with our elegant, sustainable bags that combine
              style with environmental responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="btn-primary text-center w-full sm:w-auto"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-center w-full sm:w-auto"
              >
                Request Custom Design
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative h-80 md:h-96 lg:h-[30rem] rounded-lg overflow-hidden">
            {/* This div is intentionally left empty as we're using the background image now */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-eco-green-800">
            Why Choose Our Eco Bags?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-eco-green-50 p-6 md:p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-eco-green-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-eco-green-800">
                Sustainable Materials
              </h3>
              <p className="text-eco-green-700 text-sm md:text-base">
                Our products are eco-friendly materials like jute and canvaas
                that reduce environmental impact and also elevate the status of
                your brand.
              </p>
            </div>

            <div className="bg-eco-brown-50 p-6 md:p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-eco-brown-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-eco-brown-800">
                Custom Designs
              </h3>
              <p className="text-eco-brown-700 text-sm md:text-base">
                Showcase your brand identity with fully customizable designs,
                colors, and sizes that perfectly match your business needs.
              </p>
            </div>

            <div className="bg-eco-blue-50 p-6 md:p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-eco-blue-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-eco-blue-800">
                Wholesale Pricing
              </h3>
              <p className="text-eco-blue-700 text-sm md:text-base">
                Competitive pricing for businesses of all sizes, with volume
                discounts that make sustainable choices accessible for every
                budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-eco-brown-600 text-white">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Go Green with Your Business?
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses making a positive environmental impact
            while elevating their brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-eco-brown-800 px-6 py-3 rounded-md hover:bg-eco-brown-100 transition-colors duration-300 text-center w-full sm:w-auto"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-eco-brown-800 transition-colors duration-300 text-center w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
