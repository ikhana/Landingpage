import Image from 'next/image';

import FeatImage01 from '@/public/images/features-03-image-01.png';
import FeatImage02 from '@/public/images/features-03-image-02.png';
import FeatImage03 from '@/public/images/features-03-image-03.png';

export default function Zigzag() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-800'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <div className='inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4'>
              Solutions to Traditional Processing Problems
            </div>
            <h1 className='h2 mb-4'>The Problem with Traditional Processing</h1>
            <p className='text-xl text-gray-400'>
              In the traditional model of credit card processing, businesses are
              often burdened with hefty fees that eat into their profits. These
              fees can range anywhere from 3% to 5% or even more. For a small
              business, this can amount to thousands of dollars each year.
              Moreover, these fees are often hidden, making it difficult for
              businesses to accurately predict their expenses and plan their
              budgets.
            </p>
          </div>

          {/* Items */}
          <div className='grid gap-20'>
            {/* 1st item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt='Features 01'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <div className='font-architects-daughter text-xl text-purple-600 mb-2'>
                    More speed. Less spend
                  </div>
                  <h3 className='h3 mb-3'>The SMPL Solution</h3>
                  <p className='text-xl text-gray-400 mb-4'>
                    At SMPL, we've turned the traditional model on its head.
                    We've done away with the percentage-based fees and
                    introduced a revolutionary concept - 0% processing. With
                    SMPL, what you earn is what you keep. This means that when
                    you make $100 in sales, you keep $100. No deductions, no
                    surprises. This simple yet powerful concept can be the
                    difference between just surviving and truly thriving in
                    today's competitive business landscape.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt='Features 02'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-left'
              >
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <div className='font-architects-daughter text-xl text-purple-600 mb-2'>
                    No Contract. Less spend
                  </div>
                  <h3 className='h3 mb-3'>No Contract</h3>
                  <p className='text-xl text-gray-400 mb-4'>
                    Contracts can often feel like shackles, binding you to a
                    service even when it no longer serves your needs. At SMPL,
                    we believe in the freedom of choice. We're confident in the
                    value we provide, and we believe that our services should
                    stand on their own merits. That's why we don't bind you with
                    contracts. You're free to use our services for as long as
                    they benefit you. And if you ever decide to move on, you can
                    do so without any penalties or cancellation fees.
                  </p>
                  {/* <ul className='text-lg text-gray-400 -mb-2'>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className='flex items-center'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt='Features 03'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <div className='font-architects-daughter text-xl text-purple-600 mb-2'>
                    No Hidden Fee. Less spend
                  </div>
                  <h3 className='h3 mb-3'>No Hidden Fee</h3>
                  <p className='text-xl text-gray-400 mb-4'>
                    Hidden fees are one of the biggest pain points in the
                    payment processing industry. They add uncertainty to your
                    expenses and can cause your processing costs to balloon
                    unexpectedly. At SMPL, we uphold transparency in our
                    pricing. What you see is what you get. No hidden fees, no
                    nasty surprises. We believe that businesses should be able
                    to plan their budgets with confidence, and we're committed
                    to making that a reality.
                  </p>
                  {/* <ul className='text-lg text-gray-400 -mb-2'>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className='flex items-center'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            {/* 4th item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt='Features 02'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-left'
              >
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <div className='font-architects-daughter text-xl text-purple-600 mb-2'>
                    Same Day Funding. More Speed
                  </div>
                  <h3 className='h3 mb-3'>Same Day Funding</h3>
                  <p className='text-xl text-gray-400 mb-4'>
                    Cash flow is the lifeblood of any business. A delay in
                    accessing your funds can disrupt your operations and even
                    put your business at risk. That's why we offer same-day
                    funding. With SMPL, you don't have to wait for days to get
                    your funds. As soon as a transaction is processed, the funds
                    are transferred to your account. This ensures that you
                    always have the cash flow you need to run your business
                    smoothly.
                  </p>
                  {/* <ul className='text-lg text-gray-400 -mb-2'>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className='flex items-center'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            {/* 5th item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt='Features 03'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <div className='font-architects-daughter text-xl text-purple-600 mb-2'>
                    Unlimited Transactions. Less spend
                  </div>
                  <h3 className='h3 mb-3'>Unlimited Transactions</h3>
                  <p className='text-xl text-gray-400 mb-4'>
                    In the world of business, growth often means more
                    transactions. But with most payment processors, more
                    transactions mean more fees. At SMPL, we don't believe in
                    penalizing success. That's why we offer unlimited
                    transactions. Whether you're processing a hundred
                    transactions or a thousand, you pay the same flat rate. This
                    gives you the freedom to grow your business without worrying
                    about escalating processing costs.
                  </p>
                  {/* <ul className='text-lg text-gray-400 -mb-2'>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className='flex items-center'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
