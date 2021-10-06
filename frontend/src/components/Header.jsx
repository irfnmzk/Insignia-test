export default function Header({ title }) {
  return (
    <header className="py-10 border-b border-cool-gray-200 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-blue-700 sm:text-3xl sm:leading-9 sm:truncate">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
