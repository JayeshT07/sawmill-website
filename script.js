// scripts.js

function calculatePrice() {
    // Get values from the input fields
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var thickness = parseFloat(document.getElementById('thickness').value);
    var quantity = parseInt(document.getElementById('quantity').value);

    // Validate input values
    if (isNaN(length) || isNaN(width) || isNaN(thickness) || isNaN(quantity) || length <= 0 || width <= 0 || thickness <= 0 || quantity <= 0) {
        alert("Please enter valid dimensions and quantity.");
        return;
    }

    // Price per cubic inch (this is just an example rate, you can modify it based on your pricing structure)
    var pricePerCubicInch = 0.05; // Price per cubic inch of wood

    // Calculate the volume in cubic inches
    var volume = length * width * thickness; // cubic inches

    // Calculate the price for one piece
    var pricePerPiece = volume * pricePerCubicInch;

    // Calculate the total price based on quantity
    var totalPrice = pricePerPiece * quantity;

    // Show the result
    document.getElementById("result").innerText = "Total Price: ₹" + totalPrice.toFixed(2);
    document.getElementById('result').style.display = 'block';
}