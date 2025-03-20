import React, { useState } from 'react';
import axios from 'axios';

const OtpVerification = ({ onVerified }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/sendOtp', { email });
      setError('');
    } catch (err) {
      setError('Failed to send OTP');
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/verifyOtp', { email, otp });
      onVerified(); // Notify parent component that OTP is verified
      setError('');
    } catch (err) {
      setError('Invalid OTP');
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendOtp} disabled={loading}>
        Send OTP
      </button>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOtp} disabled={loading}>
        Verify OTP
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default OtpVerification;
