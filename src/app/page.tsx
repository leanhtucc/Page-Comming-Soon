"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Github, Instagram } from "lucide-react"

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
          seconds: 0
        };
      }

      // Calculate days, hours, minutes, and seconds
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-emerald-900 overflow-hidden relative">
      {/* Improved background with better gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900 to-emerald-800"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/subtle-pattern.png')] bg-repeat opacity-5"></div>
        <div className="absolute -top-32 -left-40 w-64 h-64 md:w-96 md:h-96 bg-green-400 rounded-full mix-blend-overlay opacity-10 filter blur-3xl"></div>
        <div className="absolute top-2/3 -right-20 w-64 h-64 md:w-96 md:h-96 bg-green-400 rounded-full mix-blend-overlay opacity-10 filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-700/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-8 md:py-12">
        {/* Logo and Brand Name - improved styling */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-center">
            <div className="mr-2 md:mr-3 relative">
              <div className="absolute -inset-1 rounded-full bg-green-400/30 blur-md"></div>
              <div className="relative rounded-full p-1 bg-emerald-800/80 backdrop-blur-sm border border-green-400/30">
                <img src="/logo192.png" alt="Logo" className="w-8 h-8 md:w-16 md:h-16 object-contain" />
              </div>
            </div>
            <h2 className="text-xl md:text-3xl font-bold tracking-wide ml-2">
              <span className="text-green-400">TRAO</span> <span className="text-green-400">ĐỒ</span> <span className="text-green-400">CŨ</span>
            </h2>
          </div>
        </div>

        {/* Coming Soon Text - refined typography */}
        <h1 className="mb-3 md:mb-4 text-4xl md:text-7xl font-bold tracking-tight text-center">
          <span className="text-green-400 drop-shadow-md">COMING</span> <span className="text-white drop-shadow-md">SOON</span>
        </h1>

        {/* Subtitle - improved text styling */}
        <p className="mb-6 md:mb-10 text-sm md:text-xl font-light text-white/90 max-w-xl text-center leading-relaxed px-2">
          Trao Đồ Cũ tự hào là nền tảng kết nối cộng đồng trao đổi đồ dễ dàng, nhanh chóng và hiệu quả.
        </p>

        {/* Countdown Timer - refined design */}
        <div className="mb-6 md:mb-10 flex gap-2 sm:gap-3 md:gap-6 text-center">
          {[
            { value: timeLeft.days, label: "DAYS" },
            { value: timeLeft.hours, label: "HRS" },
            { value: timeLeft.minutes, label: "MIN" },
            { value: timeLeft.seconds, label: "SEC" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-1 md:mb-2">
                <div className="absolute -inset-1 rounded-lg md:rounded-xl bg-green-400/30 opacity-70 blur-sm"></div>
                <div className="relative flex items-center justify-center rounded-lg md:rounded-xl border border-green-400/30 bg-emerald-800/80 backdrop-blur-md w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24">
                  <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-green-400">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Email Signup - refined styling */}
        <form onSubmit={handleSubmit} className="mb-6 md:mb-10 w-full max-w-md relative">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-70 blur-sm"></div>
          <div className="relative flex w-full overflow-hidden rounded-full bg-emerald-800/70 backdrop-blur-md p-1">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 h-9 sm:h-10 md:h-12 bg-transparent border-0 text-white text-xs sm:text-sm md:text-base placeholder:text-green-300/50 focus-visible:ring-0 focus-visible:ring-offset-0"
              disabled={isSubmitting}
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-9 sm:h-10 md:h-12 px-3 sm:px-4 md:px-6 bg-green-400 text-emerald-900 text-xs sm:text-sm md:text-base font-medium transition-all duration-300 border-0 rounded-full hover:bg-green-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Notify me"}
            </Button>
          </div>
          {isSubmitted && (
            <div className="mt-2 text-center text-green-400 text-xs sm:text-sm">
              Thank you! You&apos;ll be notified when we launch.
            </div>
          )}
        </form>

        {/* Social Links - refined design */}
        <div className="flex gap-3 sm:gap-4 md:gap-5 mb-6 md:mb-8">
          {[
            { icon: Facebook, href: "#", label: "Facebook" },
            { icon: Twitter, href: "#", label: "Twitter" },
            { icon: Github, href: "#", label: "Github" },
            { icon: Instagram, href: "#", label: "Instagram" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-full bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative rounded-full border border-green-400/30 bg-emerald-800/80 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 text-green-400 transition-all duration-300 hover:border-green-400/60 hover:text-green-300 hover:shadow-lg hover:shadow-green-400/20 group-hover:scale-110">
                <social.icon size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer - refined styling */}
        <div className="text-center w-full pt-2 pb-4">
          <p className="text-gray-400 text-xs sm:text-sm md:text-base px-2 tracking-wide">
            JOIN US AT <a href="#" className="text-green-400 transition-colors duration-300 hover:text-green-300 hover:underline">traodocu.vn</a> TO EXCHANGE OR DONATE YOUR ITEMS
          </p>
        </div>
      </div>
    </div>
  )
}
