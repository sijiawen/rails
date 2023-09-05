import './App.css'
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedContact, setSelectedContact] = useState('');
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const handlePayClick = () => {
    setCurrentPage('contacts');
  };

  const handleContactClick = (contactName) => {
    setSelectedContact(contactName);
    setCurrentPage('payment');
  };

  const handlePaymentSubmit = () => {
    // You can implement your own submission logic here
    // For now, we'll simulate a delay to show the ✅ emoji
    setTimeout(() => {
      setPaymentSubmitted(true);
    }, 2000);
  };

  const handleReturnHome = () => {
    setCurrentPage('home');
    setSelectedContact('');
    setPaymentAmount(0);
    setPaymentSubmitted(false);
  };

  return (
    <div className="App" style={{
      backgroundColor: '#0074D3', height: '100vh', display: "flex",
      alignItems: "center", justifyContent: "center"
    }}>
      <div className="centered-white-rectangle">
        {currentPage === 'home' && (
          <button className="pay-button" onClick={handlePayClick}>
            Pay
          </button>
        )}
        {currentPage === 'contacts' && (
          <div className="contact-list">
            <div className="contacts-title">Contacts</div>
            <div className="contact-card" onClick={() => handleContactClick("Anusha's Grandma")}>
              <span role="img" aria-label="Grandma">👵</span> Anusha's Grandma
            </div>
          </div>
        )}
        {currentPage === 'payment' && (
          <div className="payment-container">
            <div className="payment-header">{selectedContact}</div>
            <div className="payment-amount">
              <div className="payment-text">$</div>
              <input
                type="number"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
              />
            </div>
            <button
              className="submit-button"
              onClick={handlePaymentSubmit}
              disabled={paymentSubmitted}
            >
              {paymentSubmitted ? '✅' : 'Submit'}
            </button>
            {paymentSubmitted && (
              <button className="return-home-button" onClick={handleReturnHome}>
                Return Home
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
