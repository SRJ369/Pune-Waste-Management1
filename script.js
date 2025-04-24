document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const date = document.getElementById('date').value;
    
    // Get selected waste types
    const wasteTypes = [];
    document.querySelectorAll('input[name="waste"]:checked').forEach((item) => {
        wasteTypes.push(item.value);
    });
    
    // Create WhatsApp message
    const message = `*New Pickup Booking:*%0A%0A` +
                    `Name: ${name}%0A` +
                    `Phone: ${phone}%0A` +
                    `Address: ${address}%0A` +
                    `Waste Types: ${wasteTypes.join(', ')}%0A` +
                    `Preferred Date: ${date}`;
    
    // Redirect to WhatsApp (REPLACE WITH YOUR NUMBER)
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    
    // Show confirmation
    alert('Booking request sent! Our team will contact you shortly on WhatsApp.');
    this.reset();
});
