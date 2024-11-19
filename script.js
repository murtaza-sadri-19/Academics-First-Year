document.addEventListener('DOMContentLoaded', () => {
    const contributeButton = document.getElementById('contribute-button');
    contributeButton.addEventListener('click', () => {
        const userContribution = prompt("Please enter your contribution:");
        if (userContribution) {
            alert("Thank you for your contribution!");
            // Here you can add code to save the contribution
        }
    });
});