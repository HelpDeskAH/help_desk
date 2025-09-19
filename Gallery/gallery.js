// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Gallery view functionality
    const viewBtns = document.querySelectorAll('.gallery-view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const galleryItem = this.closest('.gallery-item');
            const img = galleryItem.querySelector('img');
            const title = galleryItem.querySelector('.gallery-title').textContent;
            const description = galleryItem.querySelector('.gallery-description').textContent;
            
            // Create modal for full-size image view
            showImageModal(img.src, title, description);
        });
    });
});

function showImageModal(src, title, description) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <button class="image-modal-close">&times;</button>
            <img src="${src}" alt="${title}" class="image-modal-img">
            <div class="image-modal-info">
                <h3 class="image-modal-title">${title}</h3>
                <p class="image-modal-description">${description}</p>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    const modalContent = modal.querySelector('.image-modal-content');
    modalContent.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        background: white;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    `;
    
    const closeBtn = modal.querySelector('.image-modal-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1001;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    const img = modal.querySelector('.image-modal-img');
    img.style.cssText = `
        width: 100%;
        height: auto;
        max-height: 70vh;
        object-fit: contain;
    `;
    
    const info = modal.querySelector('.image-modal-info');
    info.style.cssText = `
        padding: 1.5rem;
        text-align: center;
    `;
    
    // Add to document
    document.body.appendChild(modal);
    
    // Close functionality
    function closeModal() {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}