export function ProjectsSection() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 transition-all">
      <ul className="flex">
        <li>Tudo</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Flutter</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-200 p-4 rounded-lg">Project 1</div>
        <div className="bg-gray-200 p-4 rounded-lg">Project 2</div>
        <div className="bg-gray-200 p-4 rounded-lg">Project 3</div>
        <div className="bg-gray-200 p-4 rounded-lg">Project 4</div>
        <div className="bg-gray-200 p-4 rounded-lg">Project 5</div>
        <div className="bg-gray-200 p-4 rounded-lg">Project 6</div>
      </div>
    </div>
  );
}
