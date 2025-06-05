import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <header className='flex flex-row items-start justify-between w-full mb-8'>
          <div className="flex flex-row items-center justify-center">
            <Image
              src={"/doc-morph-logo.svg"}
              alt="DocMorph Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-4xl font-bold ml-4">DocMorph</h1>
          </div>

          <div className='flex flex-row items-center justify-center'>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="text-gray-600 hover:underline">Features</a>
                </li>
                <li>
                  <a href="/about" className="text-gray-600 hover:underline">Pricing</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:underline">FAQ</a>
                </li>
              </ul>
            </nav>
            <div className='flex flex-row items-center justify-center ml-8'>
              <button className='ml-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>
                Login
              </button>
              <button className='ml-4 px-4 py-2 bg-white-600 text-black rounded transition-colors border border-gray-300 hover:bg-gray-100'>
                Sign Up
              </button>
            </div>

          </div>
        </header>

        <main className='flex flex-col space-y-5 items-center'>
          <div className='flex flex-row items-center justify-center'>
            <h1 className='text-6xl font-bold'>
              Convert Any File 
              <span className='text-blue-500'> Quicly & Securely</span>  
            </h1>
          </div>
          <p className='text-gray-400 text-xl text-center max-w-2xl'>
            The fastest, most secure way to convert your files online. No downloads required, no quality loss.
          </p>

          <div className='flex flex-col items-center bg-gray-50 border-dashed border-gray-300 border rounded-lg p-8 max-w-2xl space-y-2'>
              <h2 className='text-2xl font-semibold'>Convert Your Files</h2>
              <p className='text-gray-400 mb-4'>
                Drag and drop your files here, or click to browse your device.
              </p>
              <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>
                Upload your files
                <input type="file" className='border border-gray-400 p-2 rounded w-full'  />
              </button>
              <p className='text-gray-400 mb-4'>
                  Supported formats: PDF, DOCX, TXT, JPG, PNG, and more.
              </p>

          </div>

        </main>
    </div>
  );
}
