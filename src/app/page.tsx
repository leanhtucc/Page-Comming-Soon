"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Github, Instagram } from "lucide-react";

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate time difference
    const calculateTimeLeft = () => {
      // Target date: March 26, 2025
      const targetDate = new Date("2025-03-26T00:00:00");
      const now = new Date();

      // Get time difference in milliseconds
      const difference = targetDate.getTime() - now.getTime();

      // Return 0 if the target date has passed
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      // Calculate days, hours, minutes, and seconds
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    // Update time every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen bg-emerald-900 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-5"></div>
        <div className="absolute -top-32 -left-40 w-96 h-96 bg-green-400 rounded-full mix-blend-overlay opacity-10 filter blur-3xl"></div>
        <div className="absolute top-2/3 -right-20 w-96 h-96 bg-green-400 rounded-full mix-blend-overlay opacity-10 filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto flex h-screen flex-col items-center justify-center px-4">
        {/* Logo and Brand Name */}
        <div className="mb-8">
          <div className="flex items-center justify-center ">
            <div className="mr-3 relative">
              <div className="absolute -inset-1 rounded-full bg-green-400/20 blur-md"></div>
              <img
                src="/logo192.png"
                alt="Logo"
                className="w-20 h-20 object-contain rounded-2xl"
              />
            </div>
            <h2 className="text-4xl font-bold">
              <span className="text-green-400">TRAO</span>{" "}
              <span className="text-green-400">ĐỒ</span>{" "}
              <span className="text-green-400">CŨ</span>
            </h2>
          </div>
        </div>

        {/* Coming Soon Text */}
        <h1 className="mb-4 text-8xl font-bold tracking-tight">
          <span className="text-green-400">COMING</span>{" "}
          <span className="text-white">SOON</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-15 text-[20px] italic font-light text-white/90 max-w-2xl text-center">
          Trao Đồ Cũ tự hào là nền tảng kết nối cộng đồng trao đổi đồ dễ dàng,
          nhanh chóng và hiệu quả.
        </p>

        {/* Countdown Timer */}
        <div className="mb-10 grid grid-cols-4 gap-6 text-center">
          {[
            { value: timeLeft.days, label: "Ngày" },
            { value: timeLeft.hours, label: "Giờ" },
            { value: timeLeft.minutes, label: "Phút" },
            { value: timeLeft.seconds, label: "Giây" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="absolute -inset-1 rounded-xl bg-green-400/20 opacity-70 blur-sm"></div>
                <span className="relative flex items-center justify-center rounded-xl border border-green-400/30 bg-emerald-800 backdrop-blur-md px-8 py-8 w-30 h-30 text-6xl font-bold text-white shadow-lg">
                  {item.value.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="text-sm font-medium uppercase tracking-wider text-green-400">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Email Signup */}
        <div className="mb-10 w-full max-w-lg relative">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-70 blur-sm"></div>
          <div className="relative flex w-full overflow-hidden rounded-full bg-emerald-800 backdrop-blur-md p-1.5">
            <Input
              type="email"
              placeholder="Nhập địa chỉ Email của bạn..."
              className="flex-1 h-12 bg-emerald-800 border-0 text-white text-base placeholder:text-green-300/50 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button className="h-12 px-6 bg-green-400 text-emerald-900 text-base font-medium transition-all duration-300 border-0 rounded-full hover:bg-green-300 cursor-pointer">
              <a href="#">Gửi thông báo</a>
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 mb-8">
          {[
            {
              icon: Facebook,
              href: "https://www.facebook.com/profile.php?id=61573947424629",
            },
            { icon: Twitter, href: "#" },
            { icon: Github, href: "#" },
            { icon: Instagram, href: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="rounded-full border border-green-400/30 bg-emerald-800 p-3 text-green-400 transition-all hover:border-green-400/60 hover:text-green-300 hover:shadow-lg hover:shadow-green-400/20"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center absolute bottom-4">
          <p className="text-gray-400 text-xl">
            Trải nghiệm ngay{" "}
            <a href="https://beta.traodocu.vn/" className="text-green-400">
              beta.traodocu.vn
            </a>{" "}
            để trao tặng và trao đổi đồ của bạn.
          </p>
        </div>
      </div>
    </div>
  );
}
