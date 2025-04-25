import React from 'react';

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-white">
        <nav className="flex justify-between items-center p-6 shadow">
          <h1 className="text-xl font-bold text-blue-800">Eternal<span className="text-gray-700">PEASE</span></h1>
          <ul className="hidden md:flex gap-6 text-sm text-gray-700">
            <li>Home</li>
            <li>About</li>
            <li>Packages</li>
            <li>Contact Us</li>
          </ul>
          <div className="flex gap-2">
            <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50">Login</button>
            <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Sign Up</button>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
          {/* Placeholder for balloon image */}
          <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-xl flex items-center justify-center mb-6 md:mb-0">
            <span className="text-gray-500">[Balloon Image Placeholder]</span>
          </div>
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-3xl font-semibold mb-2">Compassionate Funeral Services for Your Loved Ones</h2>
            <p className="text-gray-600 mb-4">Honoring Lives, Cherishing Memories</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
              <button className="bg-gray-200 text-blue-600 px-4 py-2 rounded">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-center py-10">
        <h3 className="text-lg text-blue-600 mb-2">⚭</h3>
        <h2 className="text-2xl font-serif font-semibold mb-2">Welcome to Infinity Memorial Chapels and Funeral Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto px-4">
          Honoring Memories, Supporting Families. Since 2006, we’ve provided compassionate and personalized funeral services, ensuring every farewell is meaningful and dignified.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded">Learn More</button>
      </section>

      {/* AI Services */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-center text-xl font-bold mb-2">Innovative Services for a Seamless Farewell</h2>
        <p className="text-center text-gray-600 mb-6 text-sm">AI-powered tools to simplify funeral planning</p>
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto px-4">
          <div className="bg-white p-6 rounded shadow text-center">
            <h4 className="font-semibold mb-2">AI-Powered Inquiry</h4>
            <p className="text-sm text-gray-600">Get AI-assisted guidance for services, pricing, and availability.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h4 className="font-semibold mb-2">AI Theme Recommender</h4>
            <p className="text-sm text-gray-600">Find the perfect theme that reflects your loved one&apos;s journey.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h4 className="font-semibold mb-2">Automated Reminder</h4>
            <p className="text-sm text-gray-600">Stay notified about arrangements and document deadlines.</p>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-10 px-4 text-center bg-white">
        <h2 className="text-2xl font-bold mb-4">Packages</h2>
        <p className="text-gray-600 mb-6">Explore various packages to suit your family&apos;s needs</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-blue-200 p-6 rounded shadow">[Package A Placeholder]</div>
          <div className="bg-blue-200 p-6 rounded shadow">[Package B Placeholder]</div>
          <div className="bg-blue-200 p-6 rounded shadow">[Package C Placeholder]</div>
          <div className="bg-blue-200 p-6 rounded shadow">[Package D Placeholder]</div>
        </div>
      </section>

      {/* Personalized Themes */}
      <section className="py-10 bg-gray-100 px-4 text-center">
        <h2 className="text-xl font-bold mb-2">Personalized Themes, Effortlessly Chosen</h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-4">Let our AI Theme Recommender help you pick the most fitting theme for your farewell tribute.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Swipe to Talk</button>
        <div className="flex justify-center mt-4">
          <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-500">[Bot Placeholder]</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-4 text-white bg-blue-800">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Full Name" className="p-2 rounded text-black" />
              <input type="email" placeholder="Email" className="p-2 rounded text-black" />
              <textarea placeholder="Message" className="p-2 rounded text-black" />
              <button type="submit" className="bg-white text-blue-800 font-semibold py-2 px-4 rounded">Contact Us</button>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-2"><strong>Contact:</strong> InfinityChap@gmail.com</p>
            <p><strong>Based in:</strong> Tuguegarao City, Cagayan</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-xs p-4 text-center">
        <p>EternalPEASE &copy; {new Date().getFullYear()} | Terms | Services | Support</p>
      </footer>
    </div>
  );
};

export default HomePage;
