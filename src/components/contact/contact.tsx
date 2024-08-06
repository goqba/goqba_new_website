"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Laptop2, Mail, Phone, PhoneCall } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";
import KakaoMap from "./kakaoMap";
// import KakaoMap from "./kakaoMap";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto py-20 lg:py-28 flex justify-center items-center"
    >
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-5 items-center gap-5">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="col-span-1 lg:col-span-3 space-y-7 border p-10 rounded-md drop-shadow-md h-full"
        >
          <div className="space-y-4">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-4xl md:text-5xl lg:text-6xl font-semibold"
            >
              Get in <span className="text-[#09B0C0]">Touch</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-gray-500 text-sm dark:text-gray-400 max-w-[500px]"
            >
              To schedule a call with our team, please fill in your contact
              details and let us know what you are interested in
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1700"
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                className="text-black"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emal">Email</Label>
              <Input
                className="text-black"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="text-black"
                id="message"
                placeholder="Type your message here."
              />
            </div>

            <Button
              className="w-full bg-brand hover:bg-brand/70 font-semibold"
              type="submit"
            >
              Submit
            </Button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="flex items-center justify-between"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <PhoneCall className="w-6 h-6" />
              <div className="text-center md:text-left">
                <p className="font-bold uppercase text-sm">Phone</p>
                <span className="text-red-400 text-xs">+82-2-3288-8780</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <Laptop2 className="w-6 h-6" />
              <div className="text-center md:text-left">
                <p className="font-bold uppercase text-sm">Fax</p>
                <span className="text-red-400 text-xs">010-2888-777</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <Mail className="w-6 h-6" />
              <div className="text-center md:text-left">
                <p className="font-bold uppercase text-sm">Email</p>
                <span className="text-red-400 text-xs">goqba@goqba.com</span>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="col-span-1 lg:col-span-2 w-full h-full"
        >
          {/* <KakaoMap /> */}
          {/* <img
            data-aos="fade-left"
            data-aos-duration="1500"
            title="416 Hangang-daero, Jung-gu, Seoul"
            className="w-auto h-full rounded-md"
            src="assets/images/address.png"
            alt="Our location"
          /> */}
          <KakaoMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
