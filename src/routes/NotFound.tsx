import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl font-bold mb-2">404</h1>
      <p className="text-stone-600 mb-4">That page doesn't exist.</p>
      <Link to="/" className="text-amber-700 hover:underline">Back to the course</Link>
    </div>
  );
}
