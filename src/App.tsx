import React, { useState, useRef } from 'react';
import { Upload, Play, Save, Edit3, AlertTriangle } from 'lucide-react';

function App() {
  const [urls, setUrls] = useState<string[]>([]);
  const [results, setResults] = useState<{ url: string; status: string }[]>([]);
  const [scanning, setScanning] = useState(false);
  const [inputUrls, setInputUrls] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const urlList = content.split('\n').filter(Boolean).map(url => url.trim());
        setUrls(urlList);
        setInputUrls(urlList.join('\n'));
      };
      reader.readAsText(file);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputUrls(event.target.value);
    const urlList = event.target.value.split('\n').filter(Boolean).map(url => url.trim());
    setUrls(urlList);
  };

  const simulateXUITest = async (url: string) => {
    // Simulate a random result
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    const status = Math.random() > 0.5 ? 'Success' : 'Failed';
    return { url, status };
  };

  const startScanning = async () => {
    setScanning(true);
    setResults([]);
    for (const url of urls) {
      const result = await simulateXUITest(url);
      setResults(prev => [...prev, result]);
    }
    setScanning(false);
  };

  const saveResults = () => {
    const content = results.filter(r => r.status === 'Success').map(r => r.url).join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'scan_results.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">URL Scanner</h1>
        
        <div className="mb-6 p-4 bg-yellow-100 rounded-md flex items-start">
          <AlertTriangle className="flex-shrink-0 h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
          <p className="text-sm text-yellow-700">
            Note: This is a simulated version. For actual scanning, a backend service would be required to handle HTTP requests securely.
          </p>
        </div>

        <div className="mb-6">
          <label htmlFor="file-upload" className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer mb-2">
            <Upload className="mr-2 h-5 w-5" />
            Upload File
          </label>
          <input
            id="file-upload"
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            accept=".txt"
          />
          <div className="flex items-center mb-2">
            <Edit3 className="mr-2 h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Or enter URLs manually:</span>
          </div>
          <textarea
            value={inputUrls}
            onChange={handleInputChange}
            className="w-full h-32 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter URLs here, one per line"
          />
        </div>

        <div className="mb-6">
          <button
            onClick={startScanning}
            disabled={scanning || urls.length === 0}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="mr-2 h-5 w-5" />
            {scanning ? 'Scanning...' : 'Start Scanning'}
          </button>
        </div>

        <div className="mb-6 max-h-60 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-2">Results:</h2>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className={`p-2 rounded ${result.status === 'Success' ? 'bg-green-100' : 'bg-red-100'}`}>
                {result.url}: {result.status}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button
            onClick={saveResults}
            disabled={results.length === 0}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="mr-2 h-5 w-5" />
            Save Results
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;