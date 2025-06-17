import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <section className="max-container padding-y text-center">
        <h2 className="text-3xl font-montserrat font-bold text-coral-red mb-4">Access Denied</h2>
        <p className="text-lg text-slate-gray">You must be signed in to view your profile.</p>
      </section>
    );
  }

  return (
    <section className="max-container padding-y">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl mx-auto border border-slate-200">
        <h2 className="text-3xl font-montserrat font-bold mb-6 text-coral-red">Your Profile</h2>
        
        <div className="space-y-4 text-lg text-slate-gray font-montserrat">
          <div>
            <span className="font-semibold text-black">Username:</span> {user.email.split('@')[0] || 'N/A'}
          </div>
          <div>
            <span className="font-semibold text-black">Email:</span> {user.email || 'N/A'}
          </div>
        </div>

        {user.email === 'admin@neki.com' && (
          <div className="mt-8 text-center">
            <Link
              to="/admin"
              className="inline-block bg-coral-red text-white font-montserrat px-6 py-3 rounded-lg shadow hover:bg-red-600 transition"
            >
              Go to Admin Panel
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
