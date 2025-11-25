function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto contact-card">
        <p className="section-kicker text-center">open channel</p>
        <h2 className="section-heading text-center">Let’s Architect the Next Build</h2>
        <p className="section-subtitle text-center">
          Ready for freelance collabs, research experiments, or speaking about
          futuristic interfaces.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
          <a href="mailto:sanirban2006@gmail.com" className="primary-chip text-center">
            sanirban2006@gmail.com
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="ghost-chip text-center"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
  