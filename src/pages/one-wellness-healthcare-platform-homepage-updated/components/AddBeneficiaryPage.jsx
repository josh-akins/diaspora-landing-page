import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BeneficiaryForm = ({ index, onRemove, isRemovable }) => {
  return (
    <div className="space-y-6">
      {index > 0 && (
        <div className="border-t border-gray-300 pt-6 mt-8 mb-6">
          <div className="flex justify-end items-center mb-6">
            {/* <h2 className="text-xl font-semibold text-[#0A4B35]">Beneficiary {index + 1}</h2> */}
            {isRemovable && (
              <button
                onClick={() => onRemove(index)}
                className="text-red-500 flex items-center gap-2 hover:text-red-600"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Remove Beneficiary
              </button>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            placeholder="Beneficiary first name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Beneficiary last name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            placeholder="Beneficiary date of birth"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <img src="/images/us-flag.png" alt="US" className="w-10" />
          </div>
          <input
            type="tel"
            placeholder="Beneficiary phone number"
            className="w-full pl-16 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Address
        </label>
        <input
          type="text"
          placeholder="Enter full home address"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State*
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
          >
            <option value="">Enter beneficiary State</option>
            <option value="lagos">Lagos</option>
            <option value="abuja">Abuja</option>
            {/* Add more states as needed */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LGA
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
          >
            <option value="">Enter beneficiary LGA</option>
            {/* Add LGA options based on selected state */}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pre-existing Condition?
          </label>
          <input
            type="text"
            placeholder="If yes, state Condition"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Emergency contact
          </label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

const AddBeneficiaryPage = () => {
  const navigate = useNavigate();
  const [beneficiaryCount, setBeneficiaryCount] = useState(1);
  const [beneficiaries, setBeneficiaries] = useState([0]); // Array of indices

  const addBeneficiary = () => {
    setBeneficiaries([...beneficiaries, beneficiaryCount]);
    setBeneficiaryCount(beneficiaryCount + 1);
  };

  const removeBeneficiary = (index) => {
    setBeneficiaries(beneficiaries.filter(i => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-[#0A4B35] mt-16 mb-8">Add Beneficiary</h1>
        
        <div className=" rounded-2xl py-8 px-0 md:px-8">
          {beneficiaries.map((index) => (
            <BeneficiaryForm
              key={index}
              index={index}
              onRemove={removeBeneficiary}
              isRemovable={beneficiaries.length > 1}
            />
          ))}

          <div className="mt-8">
            <button
              onClick={addBeneficiary}
              className="flex items-center gap-2 text-[#28A745] text-sm font-medium hover:text-[#218838]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Add Beneficiary
            </button>
          </div>

          <div className="mt-8">
            <button
              onClick={() => navigate('/choose-plan')}
              className="w-full bg-[#28A745] text-white py-3 rounded-lg font-medium hover:bg-[#218838] transition-colors"
            >
              Next
            </button>

            <p className="text-sm text-center text-gray-600 mt-4">
              By continuing, you accept our{' '}
              <Link to="/terms" className="text-[#28A745] hover:underline">Terms of use</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-[#28A745] hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBeneficiaryPage; 