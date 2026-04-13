import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-6 w-full">
        <Outlet />
      </main>
      <footer className="border-t border-amber-200/60 py-6 text-center text-sm text-stone-500">
        Course content original. Inspired by the structure of <em>Chess Fundamentals</em> (1921) by J. R. Capablanca.
      </footer>
    </div>
  );
}
