

export default function ContactMap() {
  return (
    <section className="relative w-full h-[80vh] lg:h-screen overflow-hidden rounded-2xl shadow-2xl">
      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.611905758518!2d71.49830899999999!3d30.248141899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b35e601584c4b%3A0xf50bae70e807137e!2sANU%20Architects%20(Aakif%20%26%20Usama%20Architects)!5e0!3m2!1sen!2s!4v1755771265677!5m2!1sen!2s"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        className="absolute inset-0 w-full h-full border-0 rounded-2xl grayscale hover:grayscale-0 transition duration-500"
      ></iframe>

    </section>
  )
}
