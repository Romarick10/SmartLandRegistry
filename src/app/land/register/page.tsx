'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  MapPin, 
  PlusCircle, 
  ArrowLeft, 
  Ruler, 
  FileText, 
  Users, 
  Globe,
  Upload,
  X,
  CheckCircle,
  AlertCircle,
  Clock,
  Shield,
  LandPlot,
  Home,
  Building,
  Sprout,
  Compass,
  Layers,
  ChevronDown,
  Info,
  Camera,
  Link as LinkIcon
} from 'lucide-react';
import Link from 'next/link';

export default function LandRegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form data
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    propertyName: '',
    propertyType: 'residential',
    area: '',
    areaUnit: 'm²',
    price: '',
    currency: 'XAF',
    
    // Step 2: Location Details
    region: '',
    city: '',
    address: '',
    coordinates: '',
    boundaries: '',
    
    // Step 3: Owner Information
    ownerName: '',
    ownerType: 'individual',
    idType: 'national_id',
    idNumber: '',
    email: '',
    phone: '',
    
    // Step 4: Documents
    documents: [] as string[],
    surveyReport: false,
    ownershipProof: false,
    taxClearance: false,
    photos: [] as string[],
    
    // Step 5: Review
    termsAccepted: false,
    privacyAccepted: false
  });

  // Cameroon regions
  const regions = [
    'Adamawa', 'Centre', 'East', 'Far North', 'Littoral',
    'North', 'Northwest', 'South', 'Southwest', 'West'
  ];

  // Property types
  const propertyTypes = [
    { value: 'residential', label: 'Residential', icon: Home, color: 'text-blue-400' },
    { value: 'commercial', label: 'Commercial', icon: Building, color: 'text-purple-400' },
    { value: 'agricultural', label: 'Agricultural', icon: Sprout, color: 'text-emerald-400' },
    { value: 'industrial', label: 'Industrial', icon: Building, color: 'text-amber-400' },
    { value: 'mixed', label: 'Mixed Use', icon: Layers, color: 'text-cyan-400' },
    { value: 'vacant', label: 'Vacant Land', icon: LandPlot, color: 'text-slate-400' },
  ];

  // Handle form changes
  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle document upload
  const handleFileUpload = (type: 'documents' | 'photos') => {
    // In a real app, this would handle file uploads
    const newFile = `document_${Date.now()}.pdf`;
    setFormData(prev => ({
      ...prev,
      [type]: [...prev[type], newFile]
    }));
  };

  // Remove document
  const removeFile = (type: 'documents' | 'photos', index: number) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  // Submit form
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    
    // Redirect to success page
    router.push('/land/register/success');
  };

  // Render step 1: Basic Information
  const renderStep1 = () => (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Property Details</h2>
        <p className="text-slate-400">Enter basic information about the land property</p>
      </div>

      <div className="space-y-6">
        {/* Property Name */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Property Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.propertyName}
            onChange={(e) => handleChange('propertyName', e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition"
            placeholder="e.g., Residential Plot in Yaoundé"
            required
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-3">
            Property Type <span className="text-red-400">*</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {propertyTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => handleChange('propertyType', type.value)}
                className={`p-4 rounded-lg border transition-all ${
                  formData.propertyType === type.value
                    ? 'bg-emerald-500/20 border-emerald-500/50'
                    : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'
                }`}
              >
                <type.icon className={`h-6 w-6 mx-auto mb-2 ${type.color}`} />
                <div className="text-sm font-medium text-white">{type.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Area & Price */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Area <span className="text-red-400">*</span>
            </label>
            <div className="flex">
              <input
                type="number"
                value={formData.area}
                onChange={(e) => handleChange('area', e.target.value)}
                className="flex-1 bg-slate-900/50 border border-slate-700 rounded-l-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                placeholder="500"
                required
              />
              <select
                value={formData.areaUnit}
                onChange={(e) => handleChange('areaUnit', e.target.value)}
                className="bg-slate-800 border border-slate-700 border-l-0 rounded-r-lg px-3 text-white"
              >
                <option value="m²">m²</option>
                <option value="hectare">hectare</option>
                <option value="acre">acre</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Estimated Value
            </label>
            <div className="flex">
              <input
                type="number"
                value={formData.price}
                onChange={(e) => handleChange('price', e.target.value)}
                className="flex-1 bg-slate-900/50 border border-slate-700 rounded-l-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                placeholder="15,000,000"
              />
              <select
                value={formData.currency}
                onChange={(e) => handleChange('currency', e.target.value)}
                className="bg-slate-800 border border-slate-700 border-l-0 rounded-r-lg px-3 text-white"
              >
                <option value="XAF">XAF</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Render step 2: Location Details
  const renderStep2 = () => (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Location Details</h2>
        <p className="text-slate-400">Specify the exact location of the property</p>
      </div>

      <div className="space-y-6">
        {/* Region & City */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Region <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
              <select
                value={formData.region}
                onChange={(e) => handleChange('region', e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-emerald-500"
                required
              >
                <option value="">Select Region</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              City/Town <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition"
              placeholder="e.g., Yaoundé"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Full Address
          </label>
          <textarea
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition h-24"
            placeholder="Street address, landmarks, etc."
          />
        </div>

        {/* Coordinates & Boundaries */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              GPS Coordinates
            </label>
            <div className="relative">
              <Compass className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                value={formData.coordinates}
                onChange={(e) => handleChange('coordinates', e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                placeholder="e.g., 3.8480° N, 11.5021° E"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Optional. Will be auto-generated from GIS map if not provided.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Boundary Description
            </label>
            <textarea
              value={formData.boundaries}
              onChange={(e) => handleChange('boundaries', e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition h-24"
              placeholder="Describe property boundaries with neighbors"
            />
          </div>
        </div>

        {/* GIS Map Integration */}
        <div className="bg-slate-900/30 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-blue-400" />
              <h3 className="font-medium text-white">GIS Map Integration</h3>
            </div>
            <Link
              href="/land/map?mode=draw"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Open Map
            </Link>
          </div>
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg h-48 flex items-center justify-center">
            <div className="text-center">
              <Globe className="h-12 w-12 text-slate-600 mx-auto mb-3" />
              <div className="text-sm text-slate-500">Draw boundaries on interactive GIS map</div>
              <div className="text-xs text-slate-600 mt-1">Recommended for accurate registration</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Render step 3: Owner Information
  const renderStep3 = () => (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Owner Information</h2>
        <p className="text-slate-400">Provide details of the property owner</p>
      </div>

      <div className="space-y-6">
        {/* Owner Type */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-3">
            Owner Type <span className="text-red-400">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleChange('ownerType', 'individual')}
              className={`p-4 rounded-lg border transition-all ${
                formData.ownerType === 'individual'
                  ? 'bg-emerald-500/20 border-emerald-500/50'
                  : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'
              }`}
            >
              <Users className="h-6 w-6 mx-auto mb-2 text-blue-400" />
              <div className="text-sm font-medium text-white">Individual</div>
            </button>
            <button
              type="button"
              onClick={() => handleChange('ownerType', 'organization')}
              className={`p-4 rounded-lg border transition-all ${
                formData.ownerType === 'organization'
                  ? 'bg-emerald-500/20 border-emerald-500/50'
                  : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'
              }`}
            >
              <Building className="h-6 w-6 mx-auto mb-2 text-purple-400" />
              <div className="text-sm font-medium text-white">Organization</div>
            </button>
          </div>
        </div>

        {/* Owner Name */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            {formData.ownerType === 'individual' ? 'Full Name' : 'Organization Name'} <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.ownerName}
            onChange={(e) => handleChange('ownerName', e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition"
            placeholder={formData.ownerType === 'individual' ? "John Doe" : "Company Name Ltd"}
            required
          />
        </div>

        {/* ID Type & Number */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Identification Type <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
              <select
                value={formData.idType}
                onChange={(e) => handleChange('idType', e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-emerald-500"
                required
              >
                <option value="national_id">National ID</option>
                <option value="passport">Passport</option>
                <option value="driver_license">Driver's License</option>
                <option value="business_registration">Business Registration</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              ID Number <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.idNumber}
              onChange={(e) => handleChange('idNumber', e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition"
              placeholder="1234567890"
              required
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition"
              placeholder="owner@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition"
              placeholder="+237 XXX XXX XXX"
              required
            />
          </div>
        </div>
      </div>
    </>
  );

  // Render step 4: Documents
  const renderStep4 = () => (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Required Documents</h2>
        <p className="text-slate-400">Upload supporting documents for verification</p>
      </div>

      <div className="space-y-6">
        {/* Document Checklist */}
        <div className="bg-slate-900/30 border border-slate-700 rounded-xl p-5">
          <h3 className="font-medium text-white mb-4">Mandatory Documents</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                  formData.surveyReport ? 'bg-emerald-500 border-emerald-500' : 'border-slate-600'
                }`}>
                  {formData.surveyReport && <CheckCircle className="h-3 w-3 text-white" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Survey Report</div>
                  <div className="text-xs text-slate-400">Certified land survey document</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleFileUpload('documents')}
                className="text-xs text-blue-400 hover:text-blue-300"
              >
                <Upload className="h-4 w-4 inline mr-1" />
                Upload
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                  formData.ownershipProof ? 'bg-emerald-500 border-emerald-500' : 'border-slate-600'
                }`}>
                  {formData.ownershipProof && <CheckCircle className="h-3 w-3 text-white" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Proof of Ownership</div>
                  <div className="text-xs text-slate-400">Deed, inheritance, or purchase documents</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleFileUpload('documents')}
                className="text-xs text-blue-400 hover:text-blue-300"
              >
                <Upload className="h-4 w-4 inline mr-1" />
                Upload
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                  formData.taxClearance ? 'bg-emerald-500 border-emerald-500' : 'border-slate-600'
                }`}>
                  {formData.taxClearance && <CheckCircle className="h-3 w-3 text-white" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Tax Clearance Certificate</div>
                  <div className="text-xs text-slate-400">Valid tax clearance document</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleFileUpload('documents')}
                className="text-xs text-blue-400 hover:text-blue-300"
              >
                <Upload className="h-4 w-4 inline mr-1" />
                Upload
              </button>
            </div>
          </div>
        </div>

        {/* Uploaded Documents */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-3">
            Uploaded Documents ({formData.documents.length})
          </label>
          <div className="space-y-2">
            {formData.documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg border border-slate-700">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-white">{doc}</div>
                    <div className="text-xs text-slate-500">PDF • 2.4 MB</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile('documents', index)}
                  className="text-slate-500 hover:text-red-400"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            
            {formData.documents.length === 0 && (
              <div className="text-center py-8 border-2 border-dashed border-slate-700 rounded-lg">
                <Upload className="h-10 w-10 text-slate-600 mx-auto mb-3" />
                <div className="text-sm text-slate-500">No documents uploaded yet</div>
                <div className="text-xs text-slate-600 mt-1">Upload at least 3 required documents</div>
              </div>
            )}
          </div>
        </div>

        {/* Property Photos */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-3">
            Property Photos (Optional)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {formData.photos.map((photo, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square bg-slate-900/50 rounded-lg border border-slate-700 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-slate-600" />
                </div>
                <button
                  type="button"
                  onClick={() => removeFile('photos', index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => handleFileUpload('photos')}
              className="aspect-square bg-slate-900/30 rounded-lg border-2 border-dashed border-slate-700 flex flex-col items-center justify-center hover:border-emerald-500/50 transition"
            >
              <Camera className="h-6 w-6 text-slate-500 mb-2" />
              <span className="text-xs text-slate-500">Add Photo</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );

  // Render step 5: Review & Submit
  const renderStep5 = () => (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Review & Submit</h2>
        <p className="text-slate-400">Review all information before submitting for registration</p>
      </div>

      <div className="space-y-8">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/30 border border-slate-700 rounded-xl p-5">
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-5 w-5 text-blue-400" />
              <h3 className="font-medium text-white">Property Summary</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Name:</span>
                <span className="text-sm text-white">{formData.propertyName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Type:</span>
                <span className="text-sm text-white">
                  {propertyTypes.find(t => t.value === formData.propertyType)?.label}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Area:</span>
                <span className="text-sm text-white">{formData.area} {formData.areaUnit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Location:</span>
                <span className="text-sm text-white">{formData.city}, {formData.region}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/30 border border-slate-700 rounded-xl p-5">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-5 w-5 text-purple-400" />
              <h3 className="font-medium text-white">Owner Summary</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Name:</span>
                <span className="text-sm text-white">{formData.ownerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Type:</span>
                <span className="text-sm text-white capitalize">{formData.ownerType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">ID Number:</span>
                <span className="text-sm text-white">{formData.idNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Contact:</span>
                <span className="text-sm text-white">{formData.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Summary */}
        <div className="bg-slate-900/30 border border-slate-700 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-emerald-400" />
              <h3 className="font-medium text-white">Documents Summary</h3>
            </div>
            <span className="text-sm text-slate-400">{formData.documents.length} files uploaded</span>
          </div>
          
          <div className="space-y-3">
            <div className={`flex items-center space-x-3 p-3 rounded-lg ${
              formData.surveyReport ? 'bg-emerald-500/10' : 'bg-slate-900/50'
            }`}>
              <div className={`p-1 rounded ${formData.surveyReport ? 'bg-emerald-500/20' : 'bg-slate-800'}`}>
                {formData.surveyReport ? (
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-amber-400" />
                )}
              </div>
              <span className="text-sm">Survey Report</span>
            </div>
            
            <div className={`flex items-center space-x-3 p-3 rounded-lg ${
              formData.ownershipProof ? 'bg-emerald-500/10' : 'bg-slate-900/50'
            }`}>
              <div className={`p-1 rounded ${formData.ownershipProof ? 'bg-emerald-500/20' : 'bg-slate-800'}`}>
                {formData.ownershipProof ? (
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-amber-400" />
                )}
              </div>
              <span className="text-sm">Proof of Ownership</span>
            </div>
            
            <div className={`flex items-center space-x-3 p-3 rounded-lg ${
              formData.taxClearance ? 'bg-emerald-500/10' : 'bg-slate-900/50'
            }`}>
              <div className={`p-1 rounded ${formData.taxClearance ? 'bg-emerald-500/20' : 'bg-slate-800'}`}>
                {formData.taxClearance ? (
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-amber-400" />
                )}
              </div>
              <span className="text-sm">Tax Clearance Certificate</span>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-slate-900/30 border border-slate-700 rounded-xl p-5">
          <div className="flex items-start space-x-3 mb-4">
            <Shield className="h-5 w-5 text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-medium text-white mb-2">Terms & Conditions</h3>
              <p className="text-sm text-slate-400">
                By submitting this registration, you agree to the Terms of Service and confirm that all information provided is accurate.
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <button
                type="button"
                onClick={() => handleChange('termsAccepted', !formData.termsAccepted)}
                className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center ${
                  formData.termsAccepted
                    ? 'bg-emerald-500 border-emerald-500'
                    : 'bg-slate-900/50 border-slate-600'
                }`}
              >
                {formData.termsAccepted && <CheckCircle className="h-3 w-3 text-white" />}
              </button>
              <span className="text-sm text-slate-300">
                I agree to the <Link href="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link>
              </span>
            </div>
            
            <div className="flex items-start space-x-2">
              <button
                type="button"
                onClick={() => handleChange('privacyAccepted', !formData.privacyAccepted)}
                className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center ${
                  formData.privacyAccepted
                    ? 'bg-emerald-500 border-emerald-500'
                    : 'bg-slate-900/50 border-slate-600'
                }`}
              >
                {formData.privacyAccepted && <CheckCircle className="h-3 w-3 text-white" />}
              </button>
              <span className="text-sm text-slate-300">
                I acknowledge that this information will be stored on the blockchain
              </span>
            </div>
          </div>
        </div>

        {/* Submission Info */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
          <div className="flex items-start space-x-3">
            <Info className="h-5 w-5 text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-medium text-white mb-2">What happens next?</h3>
              <ul className="text-sm text-slate-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>Registration will be reviewed within 5-7 working days</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span>Once approved, property will be recorded on blockchain</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-purple-400" />
                  <span>Digital title certificate will be issued</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link
                href="/land"
                className="p-2 hover:bg-slate-800/50 rounded-lg transition"
              >
                <ArrowLeft className="h-5 w-5 text-slate-400" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Register New Property</h1>
                <p className="text-sm text-slate-400">Complete the 5-step registration process</p>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="text-xs text-slate-500 bg-slate-800/30 px-3 py-1 rounded-full">
                Step {step} of 5
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {[1, 2, 3, 4, 5].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === stepNumber 
                    ? 'bg-emerald-500 text-white' 
                    : step > stepNumber 
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-slate-800 text-slate-500'
                }`}>
                  {step > stepNumber ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    stepNumber
                  )}
                </div>
                <div className="ml-2 text-sm hidden sm:block">
                  <div className={`font-medium ${
                    step === stepNumber ? 'text-white' : 'text-slate-500'
                  }`}>
                    {stepNumber === 1 && 'Basic Info'}
                    {stepNumber === 2 && 'Location'}
                    {stepNumber === 3 && 'Owner'}
                    {stepNumber === 4 && 'Documents'}
                    {stepNumber === 5 && 'Review'}
                  </div>
                </div>
                {stepNumber < 5 && (
                  <div className={`h-0.5 w-8 mx-2 ${
                    step > stepNumber ? 'bg-emerald-500' : 'bg-slate-800'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8">
          {/* Render current step */}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
          {step === 5 && renderStep5()}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-700">
            <button
              type="button"
              onClick={() => step > 1 && setStep(step - 1)}
              className={`px-6 py-3 rounded-lg border transition ${
                step > 1
                  ? 'bg-slate-900/30 hover:bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
                  : 'opacity-50 cursor-not-allowed border-slate-800 text-slate-600'
              }`}
              disabled={step === 1}
            >
              <ArrowLeft className="h-4 w-4 inline mr-2" />
              Previous
            </button>
            
            <div className="text-sm text-slate-500 hidden md:block">
              {step < 5 ? `Step ${step} of 5` : 'Ready to submit'}
            </div>
            
            <button
              type="button"
              onClick={() => {
                if (step < 5) {
                  setStep(step + 1);
                } else {
                  handleSubmit();
                }
              }}
              disabled={step === 5 && (!formData.termsAccepted || !formData.privacyAccepted)}
              className={`px-6 py-3 rounded-lg transition flex items-center ${
                step === 5
                  ? 'bg-gradient-to-r from-emerald-600 to-cyan-400 hover:from-emerald-700 hover:to-cyan-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Processing...
                </>
              ) : step === 5 ? (
                <>
                  <Shield className="h-4 w-4 inline mr-2" />
                  Submit Registration
                </>
              ) : (
                <>
                  Next Step
                  <ChevronDown className="h-4 w-4 inline ml-2 transform rotate-270" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-slate-500">
            <Info className="h-4 w-4" />
            <span>Need help? </span>
            <Link href="/support" className="text-blue-400 hover:text-blue-300">
              Contact support
            </Link>
            <span> or call +237 XXX XXX XXX</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 mt-8 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <div>
              Smart Land Registry • Ministry of Lands & Survey Cameroon
            </div>
            <div className="mt-2 md:mt-0">
              <span className="text-emerald-400">Registration in progress</span> • 
              <Link href="/land" className="ml-2 text-blue-400 hover:text-blue-300">
                <MapPin className="h-3 w-3 inline mr-1" /> Back to Properties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}