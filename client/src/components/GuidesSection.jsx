

const GuidesSection = () => {
  return (
    <div className="bg-white-400 w-[50%] p-6 shadow-md rounded-lg flex justify-center text-center">
       {/* Resume Writing Guides Section */}
       <div className="w-1/3">
        <h3 className="text-purple-600 font-semibold text-lg flex items-center">
          📖 Resume Writing Guides
        </h3>
        <ul className="mt-2 space-y-2 text-gray-700">
          <li><strong>Writing a Resume</strong> - A complete guide on resume writing.</li>
          <li><strong>Resume Summary</strong> - How to write a quick resume summary.</li>
          <li><strong>Choosing a Resume Format</strong> - Best format for your use case.</li>
          <li><strong>Fitting Experience on One Page</strong> - Tricks to fit experience.</li>
        </ul>
      </div>
    </div>
  )
}

export default GuidesSection
