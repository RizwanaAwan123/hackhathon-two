export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-200 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="mb-4">A brief description of this project.</p>
              <a href="#" className="text-blue-500 underline">
                View Project
              </a>
            </div>
            {/* Add more project cards here */}
          </div>
        </div>
      </section>
    );
  }
  