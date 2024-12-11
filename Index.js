document.querySelectorAll('.Question').forEach(question => {
    question.addEventListener('click', () => {
        // Toggle answer visibility
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        
        // Toggle plus/minus icon visibility
        const plusIcon = question.querySelector('.plus');
        const minusIcon = question.querySelector('.minus');
        plusIcon.style.display = plusIcon.style.display === 'none' ? 'block' : 'none';
        minusIcon.style.display = minusIcon.style.display === 'none' ? 'block' : 'none';
    });
    
});
