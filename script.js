let input = [...document.querySelectorAll('input')];
console.log(input);

input.forEach((element) => {
    element.addEventListener('keyup', () => {
        // Check if the current element is not the last input
        if (input.indexOf(element) + 1 < input.length) {
            // Focus on the next input
            input[input.indexOf(element) + 1].focus();
        }
    });
});
