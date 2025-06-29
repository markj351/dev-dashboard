
import SystemAnalysis from './Components/SystemAnalysis';
export default function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-2xl font-bold mb-6">DevDash</h1>
        <nav className="space-y-2">
          <a href="#" className="block px-2 py-1 rounded hover:bg-gray-700">Home</a>
          <a href="#" className="block px-2 py-1 rounded hover:bg-gray-700">Tasks</a>
          <a href="#" className="block px-2 py-1 rounded hover:bg-gray-700">Stats</a>
          <a href="#" className="block px-2 py-1 rounded hover:bg-gray-700">Settings</a>
        </nav>
      </aside>

      {/* Main content */} 
      <main className="flex-1 bg-gray-100 p-6">
        <header className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">ToDo</div>
          <div className="bg-white rounded-lg shadow p-4">Github Activity</div>
        <SystemAnalysis />
        </section>
      </main>
    </div>
  );
}

