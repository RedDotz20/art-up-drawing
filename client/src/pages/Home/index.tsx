import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { LoginButton } from '../Home/components/LoginButton';
import { SignupButton } from '../Home/components/SignUpButton';
import heroSectionImg from '../../assets/hero-section-bg.jpeg';
import heroSectionIcon from '../../assets/hero-section-icon.svg';

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return <div>Loading ...</div>;
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
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl stroke-gray-950 mb-2">Welcome to ArtUp</h1>
                <p className="font-medium text-small md:text-sm lg:text-md xl:text-xl">
                  Give your visions a visual startup.
                </p>
              </div>
              <div className="flex gap-4">
                <SignupButton />
                <LoginButton />
              </div>
            </div>

            <img src={heroSectionIcon} alt="heroSectionIcon" width={500} />
          </div>
        </section>
      </main>
    );
  }
}
