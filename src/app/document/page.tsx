
'use client';

import { useState, useEffect } from 'react';
import { FileText, Upload, Trash2, CheckCircle } from 'lucide-react';

const DocumentPage = () => {
  const [documents, setDocuments] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setDocuments((prevDocuments) => [...prevDocuments, ...newFiles]);
    }
  };

  const removeFile = (fileName: string) => {
    setDocuments((prevDocuments) => prevDocuments.filter((file) => file.name !== fileName));
  };

  const handleUpload = async () => {
    if (documents.length === 0) {
      alert('Please select files to upload.');
      return;
    }

    setUploading(true);
    setUploadSuccess(false);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setUploading(false);
    setUploadSuccess(true);
    setDocuments([]);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 3000);
  };
  
  useEffect(() => {
    if (uploading) {
      // Cleanup function
      return () => {
        setUploading(false);
      };
    }
  }, [uploading]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Document Management</h1>
          <p className="text-lg text-slate-400">Securely upload and manage your land-related documents.</p>
        </header>

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900/50 border border-slate-700 rounded-2xl shadow-2xl shadow-blue-500/10">
            <div className="p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Upload className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Upload New Documents</h2>
              </div>

              <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center cursor-pointer hover:border-blue-500 transition">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <FileText className="mx-auto h-12 w-12 text-slate-500" />
                  <p className="mt-2 text-sm text-slate-400">
                    <span className="font-semibold text-blue-400">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-slate-500 mt-1">PDF, PNG, JPG up to 10MB</p>
                </label>
              </div>
            </div>

            {documents.length > 0 && (
              <div className="p-6 md:p-8 border-t border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-4">Selected Files:</h3>
                <ul className="space-y-3">
                  {documents.map((file, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700"
                    >
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-slate-400" />
                        <span className="text-sm font-medium text-slate-300">{file.name}</span>
                        <span className="text-xs text-slate-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(file.name)}
                        className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-full transition"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-6 md:p-8">
              <button
                onClick={handleUpload}
                disabled={uploading || documents.length === 0}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {uploading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-3"></div>
                    <span>Uploading...</span>
                  </>
                ) : (
                  'Upload Documents'
                )}
              </button>
            </div>
          </div>

          {uploadSuccess && (
            <div className="mt-8 flex items-center justify-center space-x-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <p className="text-sm font-medium text-green-400">Documents uploaded successfully!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
