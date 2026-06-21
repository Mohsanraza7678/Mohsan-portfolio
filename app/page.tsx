export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black">

  <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">

  <div className="max-w-7xl mx-auto px-4 md:*px-6 py-4 flex justify-between items-center">

    
    <div className="flex items-center gap-3">

  <img
    src="/logo.png.jpeg"
    alt="Mohsan Raza"
    className="w-14 h-14 rounded-full"
  />

  <h2 className="text-black font-bold text-xl">
    Mohsan Raza
  </h2>

</div>

    <div className="flex gap-4 md:gap-10 text-sm md:text-base">

      <a href="#brands" className="text-gray-700 hover:text-black transition">
        Brands
      </a>

      <a href="#services" className="text-gray-700 hover:text-black transition">
        Services
      </a>

      <a href="#contact" className="text-gray-700 hover:text-black transition">
        Contact
      </a>

    </div>

  </div>

</nav>


      {/* Hero Section */}

<section className="max-w-7xl mx-auto px-6 pt-40 pb-24">

  <div className="grid lg:grid-cols-2 gap-16 items-center">

    <div>

    

      <p className="text-gray-500 mb-6 uppercase tracking-wider">
        88K+ AI Audience
      </p>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
        Helping AI startups grow through Twitter campaigns & creator partnerships
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        Built an audience of 88K+ AI enthusiasts and partnered with
        100+ AI startups to drive awareness, product launches and growth.
      </p>

      <div className="flex flex-wrap gap-6 mb-10 text-sm text-gray-500">

        <span>✓ 88K+ Audience</span>

        <span>✓ 100+ Brands</span>

        <span>✓ 50M+ Impressions</span>

      </div>

      <div className="flex flex-col sm:flex-row gap-4">

        <a
          href="#contact"
          className="bg-black text-white px-8 py-4 rounded-full"
        >
          Work With Me
        </a>

        <a
          href="#brands"
          className="border border-gray-300 px-8 py-4 rounded-full"
        >
          View Brands
        </a>

      </div>

    </div>

    <div className="flex flex-col items-center">

      <img
        src="/profile.jpg.jpeg"
        className="w-72 md:w-105 rounded-3xl shadow-xl"
      />

      <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
          My Journey
        </p>

        <p className="text-gray-700 leading-7">
          I started by sharing AI tools, startup insights and growth content
          on Twitter/X. Over time, this grew into partnerships with more than
          100 AI startups, generating over 50M impressions and helping founders
          reach the right audience.
        </p>

      </div>

    </div>

  </div>

</section>

<section className="max-w-7xl mx-auto px-6 py-16">

<div className="grid grid-cols-3 gap-3 md:gap-8 text-center">

<div>
<h2 className="text-3xl md:text-6xl font-bold">88K+</h2>
<p className="text-gray-500 mt-1 text-xs md:text-base">Followers</p>
</div>

<div>
<h2 className="text-3xl md:text-6xl font-bold">100+</h2>
<p className="text-gray-500 mt-1 text-xs md:text-base">AI Brands</p>
</div>

<div>
<h2 className="text-3xl md:text-6xl font-bold">50M+</h2>
<p className="text-gray-500 mt-1 text-xs md:text-base">Impressions</p>
</div>

</div>

</section>


<section className="py-16 border-y border-gray-200">

  <p className="text-center text-gray-500 uppercase tracking-[5px] mb-10">
    Trusted By Leading AI Companies
  </p>

  <div className="grid grid-cols-4 gap-2 max-w-3xl mx-auto">

    <a
      href="https://x.com/HeyGen"
      target="_blank"
      className="text-center logo-hover"
    >
      <img
        src="/heygen.jpg.jpeg"
        className="w-12 md:w-16 h-12 md:h-16 mx-auto object-contain"
      />
      <p className="mt-3 font-semibold">
        HeyGen
      </p>
    </a>

    <a
      href="https://x.com/OrcaRouter"
      target="_blank"
      className="text-center logo-hover"
    >
      <img
        src="/orcarouter.jpg.jpeg"
        className="w-12 md:w-16 h-12 md:h-16 mx-auto object-contain"
      />
      <p className="mt-3 font-semibold">
        OrcaRouter
      </p>
    </a>

    <a
      href="https://x.com/Creatify_AI"
      target="_blank"
      className="text-center logo-hover"
    >
      <img
        src="/creatify.jpg.jpeg"
        className="w-12 md:w-16 h-12 md:h-16 mx-auto object-contain"
      />
      <p className="mt-3 font-semibold">
        Creatify
      </p>
    </a>

    <a
      href="https://x.com/Buzzy_now_AI"
      target="_blank"
      className="text-center logo-hover"
    >
      <img
        src="/buzzy.jpg.jpeg"
        className="w-12 md:w-16 h-12 md:h-16 mx-auto object-contain"
      />
      <p className="mt-3 font-semibold">
        Buzzy
      </p>
    </a>

  </div>

</section>

  {/* Brands Section */}
<section
  id="brands"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <div className="text-center mb-14">

    <h2 className="text-4xl font-bold mb-4">
      Brands I've Worked With
    </h2>

    <p className="text-gray-500">
      Trusted by leading AI startups and SaaS founders.
    </p>

  </div>

  <div className="grid grid-cols-2 gap-6 ">

    <a
      href="https://x.com/HeyGen"
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover bg-white border border-gray-200 rounded-2xl p-8 text-center block"
    >
      <img
        src="/heygen.jpg.jpeg"
        className="h-16 mx-auto mb-4"
      />

      <h3 className="font-semibold">
        HeyGen
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        AI Video Generation
      </p>
    </a>

    <a
      href="https://x.com/OrcaRouter"
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover bg-white border border-gray-200 rounded-2xl p-8 text-center block"
    >
      <img
        src="/orcarouter.jpg.jpeg"
        className="h-16 mx-auto mb-4"
      />

      <h3 className="font-semibold">
        OrcaRouter
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        AI Infrastructure
      </p>
    </a>

    <a
      href="https://x.com/Creatify_AI"
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover bg-white border border-gray-200 rounded-2xl p-8 text-center block"
    >
      <img
        src="/creatify.jpg.jpeg"
        className="h-16 mx-auto mb-4"
      />

      <h3 className="font-semibold">
        Creatify AI
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        AI Ad Creation
      </p>
    </a>

    <a
      href="https://x.com/Buzzy_now_AI"
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover bg-white border border-gray-200 rounded-2xl p-8 text-center block"
    >
      <img
        src="/buzzy.jpg.jpeg"
        className="h-16 mx-auto mb-4"
      />

      <h3 className="font-semibold">
        Buzzy
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        AI App Builder
      </p>
    </a>

  </div>

</section>


<section className="max-w-7xl mx-auto px-6 py-24">

  <h2 className="text-4xl font-bold mb-12">
    Why Brands Work With Me
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
      <h3 className="text-xl font-semibold mb-4">
        AI-Focused Audience
      </h3>

      <p className="text-gray-400">
        Reach founders, builders and AI enthusiasts interested in AI products.
      </p>
    </div>

    <div className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
      <h3 className="text-xl font-semibold mb-4">
        Proven Reach
      </h3>

      <p className="text-gray-400">
        Millions of impressions generated through strategic Twitter/X campaigns.
      </p>
    </div>

    <div className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
      <h3 className="text-xl font-semibold mb-4">
        Launch Experience
      </h3>

      <p className="text-gray-400">
        Product launches, sponsored campaigns and creator partnerships.
      </p>
    </div>

  </div>

</section>



<section
  id="services"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <h2 className="text-4xl font-bold mb-4">
    Services
  </h2>

  <p className="text-gray-400 mb-12 max-w-2xl">
    Helping AI startups grow through strategic Twitter/X promotion,
    launch campaigns and creator partnerships.
  </p>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
      <h3 className="text-xl font-semibold mb-3">
        Long-Term Threads
      </h3>

      <p className="text-gray-400">
        Consistent thread campaigns designed to build awareness and authority.
      </p>
    </div>

    <div className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
      <h3 className="text-xl font-semibold mb-3">
        Sponsored Tweets
      </h3>

      <p className="text-gray-400">
        High-converting sponsored promotions targeted to AI audiences.
      </p>
    </div>

    <div className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
      <h3 className="text-xl font-semibold mb-3">
        Product Launches
      </h3>

      <p className="text-gray-400">
        Launch-day campaigns focused on visibility, engagement and signups.
      </p>
    </div>

    <div className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
      <h3 className="text-xl font-semibold mb-3">
        Creator Partnerships
      </h3>

      <p className="text-gray-400">
        Long-term collaborations between AI brands and engaged audiences.
      </p>
    </div>

  </div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">

  <h2 className="text-4xl font-bold mb-12">
    Who I Work With
  </h2>

  <div className="grid grid-cols-2 gap-4 md:gap-6">

   <details className="card-hover bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer">
  <summary className="font-bold text-lg">
    AI Startups
  </summary>

  <p className="mt-4 text-gray-600">
    Early-stage and growing AI companies looking for visibility,
    users, partnerships and brand awareness.
  </p>
</details>

<details className="card-hover bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer">
  <summary className="font-bold text-lg">
    SaaS Founders
  </summary>

  <p className="mt-4 text-gray-600">
    Software founders building subscription products who need audience growth and product promotion.
  </p>
</details>

<details className="card-hover bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer">
  <summary className="font-bold text-lg">
    AI Agent Companies
  </summary>

  <p className="mt-4 text-gray-600">
    Companies building AI agents for automation, workflows, customer support and productivity.
  </p>
</details>

<details className="card-hover bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer">
  <summary className="font-bold text-lg">
    Developer Tools
  </summary>

  <p className="mt-4 text-gray-600">
    Platforms, APIs and infrastructure products used by developers to build software and AI applications.
  </p>
</details>

<details className="card-hover bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer">
  <summary className="font-bold text-lg">
    B2B AI Products
  </summary>

  <p className="mt-4 text-gray-600">
    Business-to-business AI solutions sold to companies, such as AI sales tools, AI support platforms and enterprise automation software.
  </p>
</details>

  </div>

</section>

<section className="max-w-7xl mx-auto px-6 py-24">

  <h2 className="text-5xl font-bold mb-4">
    What Founders Say
  </h2>

  <p className="text-gray-400 mb-12">
    Feedback from AI founders and startup teams.
  </p>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="card-hover bg-white border border-gray-200 rounded-3xl p-8">

      <div className="text-yellow-400 text-2xl mb-4">
        ★★★★★
      </div>

      <p className="text-gray-700 leading-8">
        Mohsan helped us generate millions of impressions
        and significant visibility during launch week.
        Excellent understanding of AI audiences.
      </p>

      <h4 className="mt-6 font-bold text-black">
        HeyGen Team
      </h4>

    </div>

    <div className="card-hover bg-white border border-gray-200 rounded-3xl p-8">

      <div className="text-yellow-400 text-2xl mb-4">
        ★★★★★
      </div>

      <p className="text-gray-700 leading-8">
        Strong reach, great engagement and professional
        execution. One of the most relevant AI-focused
        creators on Twitter/X.
      </p>

      <h4 className="mt-6 font-bold text-black">
        OrcaRouter Team
      </h4>

    </div>

  </div>

</section>

<section
  id="about"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <h2 className="text-4xl font-bold mb-8">
    About Mohsan Raza
  </h2>

  <div className="max-w-3xl">
    <p className="text-gray-400 text-lg leading-8">
      I help AI startups, SaaS founders and AI agent companies
      reach the right audience through strategic Twitter/X campaigns.

      Over the years, I have partnered with more than 100 AI brands,
      creating high-performing threads, sponsored tweets, launch campaigns
      and creator partnerships that generate visibility, engagement and growth.
    </p>
  </div>
</section>

{/* Featured Campaigns */}
<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="mb-12">

    <h2 className="text-4xl font-bold mb-4">
      Featured Campaigns
    </h2>

    <p className="text-gray-400">
      Sponsored campaigns, AI product launches and high-performing Twitter/X threads.
    </p>

  </div>

  <div className="grid md:grid-cols-2 gap-6">

    <a
      href="https://x.com/i/status/2064400985288802621"
      target="_blank"
      className="card-hover bg-white border border-gray-200 rounded-2xl p-8"
    >
      <div className="text-purple-400 text-sm mb-3">
        THREAD CAMPAIGN
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        AI Growth Thread
      </h3>

      <p className="text-gray-400">
        Educational AI content designed to generate awareness and engagement.
      </p>
    </a>

    <a
      href="https://x.com/i/status/2066536847636144301"
      target="_blank"
      className="card-hover bg-white border border-gray-200 rounded-2xl p-8"
    >
      <div className="text-purple-400 text-sm mb-3">
        PRODUCT LAUNCH
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Launch Promotion
      </h3>

      <p className="text-gray-400">
        Product launch campaign focused on visibility and founder reach.
      </p>
    </a>

    <a
      href="https://x.com/i/status/2064744070627696824"
      target="_blank"
     className="card-hover bg-white border border-gray-200 rounded-2xl p-8"
    >
      <div className="text-purple-400 text-sm mb-3">
        SPONSORED TWEET
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        AI Tool Promotion
      </h3>

      <p className="text-gray-400">
        Sponsored content promoting AI products to an AI-focused audience.
      </p>
    </a>

    <a
      href="https://x.com/i/status/2065113206377603325"
      target="_blank"
     className="card-hover bg-white border border-gray-200 rounded-2xl p-8"
    >
      <div className="text-purple-400 text-sm mb-3">
        CREATOR PARTNERSHIP
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Audience Expansion
      </h3>

      <p className="text-gray-400">
        Partnership campaign designed for awareness and product discovery.
      </p>
    </a>

  </div>

</section>

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="rounded-3xl border border-purple-500/20 bg-linear-to-r from-purple-900/20 to-black p-12 text-center">

    <h2 className="text-6xl font-bold mb-4">
      50M+
    </h2>

    <p className="text-xl text-gray-300">
      Impressions Generated Across AI Campaigns
    </p>

  </div>

</section>





<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="rounded-3xl border border-purple-500/30 bg-linear-to-r from-purple-900/20 to-black p-12">

    <h2 className="text-5xl font-bold mb-6">
      Ready To Grow Your AI Startup?
    </h2>

    <p className="text-white text-lg max-w-2xl mb-10">
      Work with a creator trusted by 100+ AI brands and backed by an engaged audience of founders, builders and AI enthusiasts.
    </p>

    <div className="flex flex-wrap gap-4">

      <a
        href="mailto:partnership1573@gmail.com"
        className="bg-purple-600 text-white px-6 py-3 rounded-xl"
      >
        Email Me
      </a>

      <a
        href="https://x.com/nasmaemad94"
        target="_blank"
        className="border border-gray-700 text-white px-6 py-3 rounded-xl"
      >
        DM On X
      </a>

    </div>

  </div>

</section>

<section className="max-w-7xl mx-auto px-6 py-24">

  <h2 className="text-4xl font-bold mb-12">
    Frequently Asked Questions
  </h2>

  <div className="space-y-6">

    <div className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
      <h3 className="font-bold text-xl mb-3">
        What services do you offer?
      </h3>

      <p className="text-gray-600">
        Sponsored tweets, AI product launches, long-form threads,
        creator partnerships and awareness campaigns.
      </p>
    </div>

    <div className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
      <h3 className="font-bold text-xl mb-3">
        How quickly can a campaign start?
      </h3>

      <p className="text-gray-600">
        Most campaigns can start within a few days after planning and approval.
      </p>
    </div>

    <div className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
      <h3 className="font-bold text-xl mb-3">
        What type of companies do you work with?
      </h3>

      <p className="text-gray-600">
        AI startups, SaaS founders, AI agents, developer tools and B2B AI products.
      </p>
    </div>

  </div>

</section>



{/* Contact Section */}
<section
  id="contact"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <div className="bg-white border border-gray-200 rounded-3xl p-12">

    <div className="mb-10">

      <h2 className="text-4xl font-bold mb-4">
        Let's Work Together
      </h2>

      <p className="text-gray-400 max-w-2xl">
        Looking for sponsored tweets, creator partnerships or AI product launch campaigns?
        Let's discuss your goals.
      </p>

    </div>

    <form
      action="https://formspree.io/f/xykaqgba"
      method="POST"
      className="grid md:grid-cols-2 gap-6"
    >

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="bg-white border border-gray-300 rounded-xl p-4 outline-none text-black placeholder:text-gray-500"
      />

      <input
        type="text"
        name="company"
        placeholder="Company Name"
        className="bg-white border border-gray-300 rounded-xl p-4 outline-none text-black placeholder:text-gray-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="bg-white border border-gray-300 rounded-xl p-4 outline-none text-black placeholder:text-gray-500"
      />

      <input
        type="text"
        name="budget"
        placeholder="Budget"
        className="bg-white border border-gray-300 rounded-xl p-4 outline-none text-black placeholder:text-gray-500"
      />

      <textarea
        name="message"
        rows={6}
        required
        placeholder="Tell me about your project..."
        className="bg-white border border-gray-300 rounded-xl p-4 outline-none text-black placeholder:text-gray-500"
      />

      <input
        type="hidden"
        name="_subject"
        value="New Partnership Inquiry From Mohsan Raza Website"
      />

      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-500 transition rounded-xl py-4 font-semibold md:col-span-2"
      >
        Start Partnership
      </button>

    </form>

    <div className="mt-10 border-t border-[#262630] pt-8">

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <p className="text-gray-500 text-sm">
            EMAIL
          </p>
          <p>
            partnership1573@gmail.com
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            TELEGRAM
          </p>
          <p>
            @Fendii_AI
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            DISCORD
          </p>
          <p>
            evancipher
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            X / TWITTER
          </p>
          <p>
            @nasmaemad94
          </p>
        </div>

      </div>

    </div>

  </div>
</section>



<footer className="border-t border-[#262630] mt-24">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <h3 className="text-3xl font-bold mb-4">
      Mohsan Raza
    </h3>

    <p className="text-gray-400 max-w-2xl mb-8">
      Helping AI startups, SaaS founders and AI companies
      grow through strategic Twitter/X campaigns,
      creator partnerships and launch promotions.
    </p>

    <div className="flex gap-8 mb-8">

      <a href="#about">About</a>
      <a href="#brands">Brands</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>

    </div>

    <div className="flex gap-8 mb-8">

      <a
        href="https://x.com/nasmaemad94"
        target="_blank"
      >
        Twitter/X
      </a>

      <a href=" https://www.linkedin.com/in/mohsan-raza-01551b418"
      target="_blank"
      rel="noopener noreferrer">
        LinkedIn
      </a>

    </div>

    <div className="space-y-2">

  <p className="text-gray-500">
    📍 Pakistan
  </p>

  <p className="text-gray-500">
    📞 +923136727678
  </p>

  <p className="text-gray-500">
    © 2025 Mohsan Raza. All rights reserved.
  </p>

</div>

  </div>

</footer>

<a
  href="#contact"
  className=" hidden md:block fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-500 transition px-6 py-4 rounded-full shadow-xl z-50"
>
  Work With Me
</a>

    </main>
  );
}
