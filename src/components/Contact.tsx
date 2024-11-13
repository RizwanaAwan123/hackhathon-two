export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-4">
            Reach out to me on LinkedIn or GitHub, or send an email.
          </p>
          <div className="space-x-4">
            <a href="https://linkedin.com" className="text-blue-500 underline">
              LinkedIn
            </a>
            <a href="https://github.com" className="text-blue-500 underline">
              GitHub
            </a>
          </div>
        </div>
      </section>
    );
  }
  