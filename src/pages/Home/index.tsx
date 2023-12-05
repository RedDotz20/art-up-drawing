import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../Home/components/LoginButton';
import { SignupButton } from '../Home/components/SignUpButton';

import heroSectionImg from '../../assets/hero-section-bg.jpeg';
import heroSectionIcon from '../../assets/hero-section-icon.svg';
import productFeatureIcon1 from '../../assets/product-feature-icon-1.svg';
import productFeatureIcon2 from '../../assets/product-feature-icon-2.svg';
import landingPageEndIcon from '../../assets/landing-page-end-icon.svg';
import LoadingState from '../../components/LoadingState';

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home', { replace: true });
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (!isAuthenticated) {
    return (
      <main>
        <section
          className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
          style={{ backgroundImage: `url(${heroSectionImg})` }}
        >
          <div className="flex justify-center items-center gap-8 mx-16 max-sm:flex-wrap">
            <div className="flex gap-4 flex-col">
              <div className="text-white font-black tracking-wider">
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl stroke-gray-950 mb-2">
                  Welcome to ArtUp
                </h1>
                <p className="font-medium text-small md:text-sm lg:text-md xl:text-xl">
                  Give your visions a visual startup.
                </p>
              </div>
              <div className="flex gap-4">
                <SignupButton />
                <LoginButton />
              </div>
            </div>
            <img
              src={heroSectionIcon}
              alt="heroSectionIcon"
              width={500}
            />
          </div>
        </section>
        <section className="h-screen bg-white flex items-center justify-center gap-16">
          <div className="flex  justify-center items-center mx-16 gap-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-[#1a9cc6] text-6xl overflow-wrap-break-word w-[600px] text-right">
                Seamless Creativity, Effortless Mastery
              </h1>
              <p className="overflow-wrap-break-word w-[600px] text-right text-4xl">
                ArtUp's user-friendly interface puts you in control
              </p>
            </div>

            <img
              src={productFeatureIcon1}
              alt="productFeatureIcon1"
              width={400}
            />
          </div>
        </section>
        <section className="h-screen bg-[#76afbf] flex items-center justify-center gap-16">
          <img
            src={productFeatureIcon2}
            alt="productFeatureIcon2"
            width={400}
          />

          <div className="flex flex-col gap-12">
            <h1 className="text-white text-6xl font-semibold overflow-wrap-break-word w-[600px] text-left">
              Craft your Artistic Legacy
            </h1>
            <p className="text-[#1163b8] overflow-wrap-break-word w-[400px] text-left text-4xl">
              Start your portfolio, one canvas at a time with ArtUp
            </p>
          </div>
        </section>
        <section className="h-screen bg-[#1163b8] flex flex-col items-center justify-center gap-16">
          <img
            src={landingPageEndIcon}
            alt="landingPageEndIcon"
            width={400}
          />
          <h1 className="font-semibold text-4xl text-white">
            Create Your ArtUp Artwork Today!
          </h1>
        </section>
      </main>
    );
  }
}
