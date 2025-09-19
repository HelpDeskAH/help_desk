// Feedback form functionality
document.addEventListener('DOMContentLoaded', function() {
    const starRating = document.getElementById('starRating');
    const ratingInput = document.getElementById('rating');
    const ratingText = document.getElementById('ratingText');
    const feedbackForm = document.getElementById('feedbackForm');
    
    // Star rating functionality
    if (starRating) {
        const stars = starRating.querySelectorAll('.star');
        
        stars.forEach((star, index) => {
            star.addEventListener('click', function() {
                const rating = index + 1;
                ratingInput.value = rating;
                
                // Update star display
                stars.forEach((s, i) => {
                    if (i < rating) {
                        s.classList.add('filled');
                    } else {
                        s.classList.remove('filled');
                    }
                });
                
                // Update rating text
                const ratingTexts = {
                    1: 'Poor',
                    2: 'Fair',
                    3: 'Good',
                    4: 'Very Good',
                    5: 'Excellent'
                };
                ratingText.textContent = ratingTexts[rating];
            });
            
            star.addEventListener('mouseenter', function() {
                const rating = index + 1;
                stars.forEach((s, i) => {
                    if (i < rating) {
                        s.style.color = '#fbbf24';
                    } else {
                        s.style.color = '#d1d5db';
                    }
                });
            });
        });
        
        starRating.addEventListener('mouseleave', function() {
            const currentRating = parseInt(ratingInput.value) || 0;
            stars.forEach((s, i) => {
                if (i < currentRating) {
                    s.style.color = '#fbbf24';
                } else {
                    s.style.color = '#d1d5db';
                }
            });
        });
    }
    
    // Feedback form submission
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validate rating
            if (!data.rating) {
                alert('Please provide a rating before submitting.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your feedback! We appreciate your input and will use it to improve our services.');
            this.reset();
            
            // Reset star rating
            const stars = starRating.querySelectorAll('.star');
            stars.forEach(star => {
                star.classList.remove('filled');
                star.style.color = '#d1d5db';
            });
            ratingInput.value = '';
            ratingText.textContent = 'Click to rate';
        });
    }
});

// Add CSS for star rating
const style = document.createElement('style');
style.textContent = `
    .star-rating {
        display: flex;
        gap: 0.25rem;
        margin-bottom: 0.5rem;
    }
    
    .star {
        font-size: 2rem;
        color: #d1d5db;
        cursor: pointer;
        transition: color 0.2s ease;
        user-select: none;
    }
    
    .star:hover {
        color: #fbbf24;
    }
    
    .star.filled {
        color: #fbbf24;
    }
    
    .rating-text {
        font-size: 0.875rem;
        color: #6b7280;
        font-weight: 500;
    }
    
    .rating-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    
    .checkbox-group {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        font-size: 0.875rem;
        color: #374151;
    }
    
    .checkmark {
        width: 18px;
        height: 18px;
        border: 2px solid #d1d5db;
        border-radius: 0.25rem;
        position: relative;
        transition: all 0.2s ease;
    }
    
    .checkbox-label input[type="checkbox"] {
        display: none;
    }
    
    .checkbox-label input[type="checkbox"]:checked + .checkmark {
        background-color: #3b82f6;
        border-color: #3b82f6;
    }
    
    .checkbox-label input[type="checkbox"]:checked + .checkmark::after {
        content: '✓';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 12px;
        font-weight: bold;
    }
    
    .stat-change.positive {
        color: #10b981;
    }
    
    .stat-change.negative {
        color: #ef4444;
    }
    
    .feedback-item {
        background: white;
        border-radius: 1rem;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        border: 1px solid #f3f4f6;
    }
    
    .feedback-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    
    .feedback-user {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .user-avatar {
        width: 40px;
        height: 40px;
        background: #f3f4f6;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6b7280;
    }
    
    .user-name {
        font-weight: 600;
        color: #111827;
    }
    
    .feedback-date {
        font-size: 0.875rem;
        color: #6b7280;
    }
    
    .feedback-rating {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .stars {
        display: flex;
        gap: 0.125rem;
    }
    
    .stars .star {
        font-size: 1rem;
        color: #d1d5db;
    }
    
    .stars .star.filled {
        color: #fbbf24;
    }
    
    .rating-value {
        font-weight: 600;
        color: #111827;
        font-size: 0.875rem;
    }
    
    .feedback-subject {
        font-size: 1.125rem;
        font-weight: 600;
        color: #111827;
        margin-bottom: 0.5rem;
    }
    
    .feedback-text {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    
    .feedback-category {
        display: inline-block;
        background: #eff6ff;
        color: #1d4ed8;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.75rem;
        font-weight: 500;
    }
    
    .category-stat {
        background: white;
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        border: 1px solid #f3f4f6;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .category-icon {
        width: 48px;
        height: 48px;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    
    .category-icon svg {
        width: 24px;
        height: 24px;
    }
    
    .category-info {
        flex: 1;
    }
    
    .category-name {
        font-size: 1.125rem;
        font-weight: 600;
        color: #111827;
        margin-bottom: 0.5rem;
    }
    
    .category-stats {
        display: flex;
        gap: 1rem;
        font-size: 0.875rem;
    }
    
    .feedback-count {
        color: #6b7280;
    }
    
    .average-rating {
        color: #fbbf24;
        font-weight: 500;
    }
`;
document.head.appendChild(style);