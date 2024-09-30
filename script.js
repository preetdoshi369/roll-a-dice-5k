document.getElementById("roll-btn").addEventListener("click", function () {
    const dice = document.getElementById("dice");
    const modal = document.getElementById("modal");
    const prizeMessage = document.getElementById("prize-message");

    // Reset and add rolling animation
    dice.classList.add("rolling");

    // Rolling animation (temporary dice numbers)
    let rollingInterval = setInterval(() => {
        const randomRollingNumber = Math.floor(Math.random() * 6) + 1;
        dice.textContent = getDiceFace(randomRollingNumber);
    }, 100);

    // Simulate delay to show the rolling effect (e.g., 2 seconds)
    setTimeout(() => {
        clearInterval(rollingInterval); // Stop the rolling animation

        // Generate final random number between 1 and 6
        const finalNumber = Math.floor(Math.random() * 6) + 1;
        
        // Display final dice number with dice face
        dice.textContent = getDiceFace(finalNumber);

        // Stop rolling animation
        dice.classList.remove("rolling");

        // Display prize message based on the final number
        let prize = "";
        switch (finalNumber) {
            case 1:
                prize = "Plain Gel Polish";
                break;
            case 2:
                prize = "500 Voucher ";
                break;
            case 3:
                prize = "Wash & BlasT";
                break;
            case 4:
                prize = "1 sitting Lazor (Underarm / Upper lip)";
                break;
            case 5:
                prize = "Basic Manicure  ";
                break;
            case 6:
                prize = "Hair Cut";
                break;
        }

        // Set prize message in modal
        prizeMessage.textContent = prize;

        // Display the modal
        modal.style.display = "flex";
    }, 2000); // 2-second rolling time
});

// Close the modal
document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
});

// Helper function to return dice face
function getDiceFace(number) {
    const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    return diceFaces[number - 1];
}
