import React, { useState } from 'react';
import { Sparkles, Upload, FileText, Download, Copy, Zap, Clock, CheckCircle } from 'lucide-react';

const AutoSummary = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState('');
  const [summaryType, setSummaryType] = useState('comprehensive');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setSummary('');
    }
  };

  const generateSummary = async () => {
    if (!uploadedFile) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockSummary = `
# Research Paper Summary

## Main Findings
This paper presents groundbreaking research in machine learning applications for healthcare diagnostics. The authors developed a novel deep learning architecture that achieves 94.7% accuracy in medical image classification, significantly outperforming existing methods.

## Key Contributions
1. **Novel Architecture**: Introduction of a hybrid CNN-Transformer model optimized for medical imaging
2. **Large Dataset**: Creation of a comprehensive dataset with 150,000 annotated medical images
3. **Clinical Validation**: Successful validation in real-world clinical settings across 5 hospitals
4. **Performance Gains**: 12% improvement over current state-of-the-art methods

## Methodology
- **Data Collection**: Multi-center study involving 5 hospitals
- **Model Training**: Transfer learning approach using pre-trained models
- **Validation**: 5-fold cross-validation with independent test set
- **Metrics**: Accuracy, sensitivity, specificity, and F1-score

## Clinical Implications
The proposed method shows significant promise for:
- Early disease detection
- Reduced diagnostic errors
- Improved patient outcomes
- Cost-effective screening programs

## Limitations
- Limited to specific types of medical images
- Requires substantial computational resources
- Need for larger validation studies
- Potential bias in training data

## Future Research Directions
1. Extension to additional imaging modalities
2. Multi-modal integration (imaging + clinical data)
3. Real-time inference optimization
4. Prospective clinical trials

## Conclusion
This research represents a significant advancement in AI-powered medical diagnostics, with strong potential for clinical implementation and patient benefit.
      `;
      
      setSummary(mockSummary);
      setIsProcessing(false);
    }, 3000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
  };

  const downloadSummary = () => {
    const blob = new Blob([summary], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'paper-summary.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center">
          <Sparkles className="h-8 w-8 text-orange-600" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">Auto Summary Generator</h2>
            <p className="text-gray-600">AI-powered paper summarization tool</p>
          </div>
        </div>
      </div>

      {/* UX Flow Steps */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">How it works</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              uploadedFile ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
            }`}>
              {uploadedFile ? <CheckCircle className="h-5 w-5" /> : <Upload className="h-5 w-5" />}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Upload Paper</p>
              <p className="text-xs text-gray-500">PDF, DOC, or TXT</p>
            </div>
          </div>
          
          <div className="flex-1 h-px bg-gray-200 mx-4"></div>
          
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isProcessing ? 'bg-orange-100 text-orange-600' : summary ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
            }`}>
              {isProcessing ? <Clock className="h-5 w-5 animate-spin" /> : summary ? <CheckCircle className="h-5 w-5" /> : <Zap className="h-5 w-5" />}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">AI Processing</p>
              <p className="text-xs text-gray-500">Advanced analysis</p>
            </div>
          </div>
          
          <div className="flex-1 h-px bg-gray-200 mx-4"></div>
          
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              summary ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
            }`}>
              <FileText className="h-5 w-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Get Summary</p>
              <p className="text-xs text-gray-500">Structured insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Research Paper</h3>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Summary Type</label>
          <select
            value={summaryType}
            onChange={(e) => setSummaryType(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="comprehensive">Comprehensive Summary</option>
            <option value="executive">Executive Summary</option>
            <option value="methodology">Methodology Focus</option>
            <option value="results">Results & Findings</option>
            <option value="abstract">Extended Abstract</option>
          </select>
        </div>

        {!uploadedFile ? (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-orange-400 transition-colors">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <div>
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="text-lg font-medium text-gray-900">Upload a research paper</span>
                <p className="text-gray-500 mt-1">PDF, DOC, DOCX, or TXT up to 10MB</p>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                />
                <div className="mt-4">
                  <span className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                    Choose File
                  </span>
                </div>
              </label>
            </div>
          </div>
        ) : (
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-orange-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{uploadedFile.name}</p>
                  <p className="text-xs text-gray-500">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setUploadedFile(null)}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Remove
                </button>
                <button
                  onClick={generateSummary}
                  disabled={isProcessing}
                  className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {isProcessing ? (
                    <>
                      <Clock className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Summary
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Processing Indicator */}
      {isProcessing && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-orange-600 animate-spin" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-orange-900">AI Processing in Progress</h3>
              <p className="text-orange-700">Analyzing your research paper and generating insights...</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="bg-orange-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
            <p className="text-sm text-orange-700 mt-2">This usually takes 30-60 seconds</p>
          </div>
        </div>
      )}

      {/* Summary Results */}
      {summary && !isProcessing && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Generated Summary</h3>
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className="flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </button>
              <button
                onClick={downloadSummary}
                className="flex items-center px-3 py-2 text-sm bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                <Download className="h-4 w-4 mr-1" />
                Download
              </button>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 max-h-96 overflow-y-auto">
            <div className="prose prose-sm max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-gray-800">
                {summary}
              </pre>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <p className="ml-2 text-sm text-green-800">
                Summary generated successfully! You can now copy, download, or share this summary.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoSummary;