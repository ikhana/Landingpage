import Link from 'next/link';
import MobileMenu from './mobile-menu';
import heroImage from '@/public/images/hero-image.png';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='absolute w-full z-30'>
      <div className='rounded-bl-[100px] max-w-full h-[90vh] mx-auto px-4 sm:px-6 bg-gradient-to-l from-gray-400 via-zinc-600 to-gray-900'>
        <div className='flex items-center justify-between h-20'>
          {/* Site branding */}
          <div className='shrink-0 mr-4'>
            {/* Logo */}
            <Link href='/' className='block' aria-label='Cruip'>
              <svg
                className='w-8 h-8 fill-current text-purple-600 ml-[140px] mt-[30px]'
                viewBox='0 0 32 32'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z' />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex md:grow'>
            {/* Desktop sign in links */}
            <ul className='flex grow justify-end flex-wrap items-center mr-[250px]'>
              <li>
                <Link
                  href='/signup'
                  className='btn-sm text-white bg-[#1E293B] hover:bg-purple-700 ml-3 font-sans rounded-full mt-[30px]'
                >
                  Get your Card
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>

        <div className='flex flex-row xl:absolute 2xl:inset-36'>
          <div className='column flex-auto mt-[40px] h-[100px]'>
            <h1 className='flex items-center text-white text-[52px] w-[600px] leading-tight font-bold font-sans-serif p-2 italic'>
            Unleash Your Business Potential with EasyProProcessing's Cash Discount 
            </h1>
            <p className='flex items-center text-white text-[18px] w-[600px] p-2 font-serif'>
              Our landing page template works on all devices, so you only <br />
              have to set it up once, and get beautiful results forever.
            </p>
            {/* Desktop navigation */}
            <nav className='hidden md:flex md:grow'>
              {/* Desktop sign in links */}
              <ul className='flex grow justify-start flex-wrap items-center mr-[250px]'>
                <li>
                  <Link
                    href='/signup'
                    className='btn-sm text-white bg-[#1E293B] hover:bg-purple-700 ml-3 font-sans rounded-full mt-[30px]'
                  >
                    Get your Card
                  </Link>
                </li>
                <li>
                  <Link
                    href='/signup'
                    className='btn-sm text-white bg-[#5396F7] hover:bg-purple-700 ml-3 font-sans rounded-full mt-[30px]'
                  >
                    Read Documentation
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='flex-auto w-[548px] h-[545px]'>
            <Image src={heroImage} alt='card' />
          </div>
        </div>
      </div>
    </header>
  );
}
