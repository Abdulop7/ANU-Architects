import { FadeIn } from '@/components/FadeIn';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
    title: "Contact | Architectural Design, Construction & Luxury Interior Solutions in Multan, Pakistan | ANU Architects",
    description: "Get in touch with ANU Architects, your trusted partner in architectural design, construction, and interior design across Pakistan, proudly based in Multan. Whether you’re planning a luxury home or a real estate project, our expert team is ready to bring your vision to life.",
};


export default function ContactPage() {
    return (
        <div className="bg-[#050505] mt-[140px] min-h-screen pb-[8rem] ">
            <header className="container-custom pt-[60px] lg:pt-[80px] pb-16 border-b border-white/10 relative overflow-hidden">
                <FadeIn>
                    <span className="text-accent text-[0.85rem] font-bold tracking-[0.2em] uppercase mb-6 block">Enquiries</span>
                    <h1 className="font-sans font-black text-6xl md:text-8xl tracking-tighter text-primary leading-[1.1]">
                        Let's start<br />a conversation.
                    </h1>
                </FadeIn>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            </header>

            <section className="container-custom pt-6 lg:pt-10 py-[8rem] relative">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-[4rem] lg:gap-[8rem] items-start">

                    {/* Contact Info - Bento Style Blocks */}
                    <div className="flex flex-col gap-8 pr-0 lg:pr-[4rem]">
                        <FadeIn delay={0.2} y={20}>

                            <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-2xl mb-8 relative group overflow-hidden hover:border-accent/30 transition-colors duration-500">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors duration-500"></div>
                                <h3 className="font-sans text-[0.75rem] font-bold tracking-[0.2em] uppercase text-accent mb-8">Studios</h3>

                                <div>
                                    <h4 className="font-sans font-bold text-2xl text-primary mb-3">Multan</h4>
                                    <p className="text-[1.05rem] leading-[1.6] text-secondary font-medium">
                                        Near Green View Housing Scheme, Multan Public School Road<br />
                                        Multan, 60000, Pakistan<br />
                                        <a href="tel:+81355550123" className="text-primary hover:text-accent transition-colors mt-2 inline-block">+92 (306) 677-7691</a>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-2xl relative group overflow-hidden hover:border-accent/30 transition-colors duration-500">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors duration-500"></div>
                                <h3 className="font-sans text-[0.75rem] font-bold tracking-[0.2em] uppercase text-accent mb-8">Direct Inquiries</h3>

                                <div className="flex flex-col gap-6">
                                    <div>
                                        <span className="text-[0.75rem] uppercase tracking-widest text-secondary block mb-1 font-bold">Press & Media</span>
                                        <a href="mailto:press@studio.arch" className="text-[1.1rem] font-medium text-primary hover:text-accent transition-colors">info.anuarchitects@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                        </FadeIn>
                    </div>

                    {/* Contact Form */}
                    <div className="p-10 lg:p-[5rem] border border-white/10 rounded-2xl relative overflow-hidden bg-[#0a0a0a]">
                        <div className="absolute -bottom-1/2 -right-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
                        <h2 className="font-sans font-black text-4xl tracking-tight text-primary mb-10 relative z-10">Send a Message</h2>
                        <FadeIn delay={0.4} y={20}>
                            <ContactForm />
                        </FadeIn>
                    </div>

                </div>
            </section>
        </div>
    );
}
