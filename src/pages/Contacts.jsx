import React from 'react';
// Assuming Card component exists and is imported correctly
import Card from '../components/Card'; 

const dummyContacts = [
    { id: 1, name: "Focus Flow Support", role: "Technical Inquiries", email: "support@focusflow.com", phone: "+1 (555) 123-4567" },
    { id: 2, name: "Project Management", role: "Feature Requests", email: "pm@focusflow.com", phone: "+1 (555) 987-6543" },
    { id: 3, name: "Billing Department", role: "Invoicing", email: "billing@focusflow.com", phone: "+1 (555) 555-0000" },
];

const companyAddress = {
    street: "123 Productivity Lane",
    city: "Nairobi",
    state: "Nairobi County",
    zip: "94107",
    country: "KENYA"
};

function Contacts() {
  return (
    // Responsive padding and minimum height
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen"> 
      <Card 
        // Applying dark mode classes to the Card component
        className="w-full max-w-4xl mx-auto dark:bg-gray-800 dark:border-gray-700" 
        title="Contact Us" 
      >
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Need to get in touch? Below are the key contact points for Focus Flow.
        </p>

        {/* Contact List Section */}
        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-600 pb-2">
            Key Contacts
        </h2>
        <div className="space-y-4">
            {dummyContacts.map(contact => (
                <div 
                    key={contact.id} 
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center transition hover:shadow-lg"
                >
                    <div>
                        <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{contact.name}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{contact.role}</p>
                    </div>
                    <div className="text-sm mt-2 sm:mt-0 text-right space-y-1">
                        <p className="text-gray-600 dark:text-gray-400">📧 {contact.email}</p>
                        <p className="text-gray-600 dark:text-gray-400">📞 {contact.phone}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Address Section */}
        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-600 pb-2">
            Corporate Address
        </h2>
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm w-full sm:w-1/2">
            <address className="not-italic text-gray-700 dark:text-gray-300">
                <p className="font-semibold">Focus Flow Headquarters</p>
                <p>{companyAddress.street}</p>
                <p>{companyAddress.city}, {companyAddress.state} {companyAddress.zip}</p>
                <p>{companyAddress.country}</p>
            </address>
        </div>
      </Card>
    </div>
  );
}

export default Contacts;
