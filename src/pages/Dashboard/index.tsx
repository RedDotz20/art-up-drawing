import NavBar from './components/Navbar';
import CanvasCard from './components/CanvasCard';

export default function Dashboard() {
  //TODO: Fetch List of Canvas Per User

  return (
    <section className="h-screen w-full ">
      <NavBar />
      <div className="px-12 py-8 text-white">
        <p className="pb-4">Recent Canvas</p>
        <div className="flex flex-wrap gap-4 justify-center items-center px-4">
          <CanvasCard />
          {/* Example Only */}
          <CanvasCard />
          <CanvasCard />
        </div>
      </div>
    </section>
  );
}
