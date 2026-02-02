'use client';
import { Check } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState, Suspense } from 'react';

const MessageSentContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(5);

  // Check if user came from successful email submission
  const fromEmail = searchParams.get('from');

  useEffect(() => {
    // If accessed directly (not from email submission), redirect immediately
    if (fromEmail !== 'contact') {
      router.replace('/contact-us');
      return;
    }

    // Start countdown
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/contact-us');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router, fromEmail]);

  // Show nothing if redirecting due to direct access
  if (fromEmail !== 'contact') {
    return null;
  }

  return (
    <div>
      <header
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(62, 0, 101, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[127px] min-h-screen flex items-center justify-center relative md:pt-[138px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <div className="w-full max-w-[800px] relative z-10 mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-12 h-12 text-green-600" strokeWidth={3} />
              </div>
            </div>

            <h1 className="font-medium tracking-[-4%] leading-[120%] text-3xl md:text-4xl lg:text-[46px] text-[#1F2937] mb-4">
              Message Sent Successfully!
            </h1>

            <p className="text-[#6E7381] text-base md:text-lg mb-8">
              Thank you for reaching out. We've received your message and will respond within 24 hours.
            </p>

            <div className="bg-[#F4F5F6] rounded-2xl p-6 mb-6">
              <p className="text-[#3E0065] font-medium text-lg">
                Redirecting you back in <span className="text-3xl font-semibold">{countdown}</span> second{countdown !== 1 ? 's' : ''}...
              </p>
            </div>

            <button
              onClick={() => router.push('/contact-us')}
              className="font-semibold text-lg bg-primary rounded-[40px] py-[14px] px-8 text-white hover:opacity-90 transition-opacity"
            >
              Return Now
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

const MessageSent = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl">Loading...</p>
          </div>
        </div>
      }
    >
      <MessageSentContent />
    </Suspense>
  );
};

export default MessageSent;
