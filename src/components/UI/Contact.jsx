import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

export default function Contact() {
    return (
        <section id="contact" className="card pb-16">
            <div className="container mx-auto px-4">
                <h2 className="text-headingColor font-[700] text-[2.5rem] mb-5">
                    Get in touch
                </h2>

                <div className="md:flex justify-between items-center gap-8">
                    {/* Map */}
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe
                            title="I live here"
                            className="w-full h-full border-0 rounded-xl"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.2332998176!2d78.29857435877244!3d17.44405229989606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a276decedf%3A0x2c12e79e6f9344e2!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1698301708611!5m2!1sen!2sin"
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Form */}
                    <div className="w-full">
                        <form
                            action="https://formspree.io/f/xyyqobnp"
                            method="POST"
                            className="w-full"
                        >
                            <div className="mb-5">
                                <InputText
                                    name="name"
                                    id="name"
                                    className="w-full p-inputtext-sm"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="mb-5">
                                <InputText
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full p-inputtext-sm"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="mb-5">
                                <InputTextarea
                                    name="message"
                                    rows={5}
                                    className="w-full"
                                    placeholder="Subject"
                                    required
                                />
                            </div>

                            <div className="mb-5">
                                <Button
                                    type="submit"
                                    label="Send Message"
                                    icon="pi pi-send"
                                    iconPos="right"
                                    className="w-full bg-[var(--primary-color)] text-white border-none hover:bg-[var(--primary-color)]/90 transition-all duration-300"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
