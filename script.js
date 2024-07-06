// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Ebook modal
    var ebookModal = document.getElementById('ebook-modal');
    var ebookBtn = document.getElementById('ebook-button');
    var ebookSpan = ebookModal.querySelector('.close');

    ebookBtn.onclick = function() {
        ebookModal.style.display = "block";
    }

    ebookSpan.onclick = function() {
        ebookModal.style.display = "none";
    }

    // Resource modal
    var resourceModal = document.getElementById('resource-modal');
    var resourceButtons = document.querySelectorAll('.resource-button');
    var resourceSpan = resourceModal.querySelector('.close');

    resourceButtons.forEach(function(button) {
        button.onclick = function() {
            var resourceType = this.getAttribute('data-resource');
            loadResourceContent(resourceType);
            resourceModal.style.display = "block";
        }
    });

    resourceSpan.onclick = function() {
        resourceModal.style.display = "none";
    }

    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target == ebookModal) {
            ebookModal.style.display = "none";
        }
        if (event.target == resourceModal) {
            resourceModal.style.display = "none";
        }
    }

    function loadResourceContent(resourceType) {
        var modalTitle = document.getElementById('modal-title');
        var modalContent = document.getElementById('modal-content');

        // Set title and content based on resource type
        switch(resourceType) {
            case 'marketing':
                modalTitle.textContent = 'Marketing Templates';
                modalContent.innerHTML = '<p>Here are our marketing templates:</p><ul><li>Social Media Kit</li><li>Flyer Templates</li><li>Email Newsletter Templates</li></ul>';
                break;
            case 'planning':
                modalTitle.textContent = 'Project Planning Tools';
                modalContent.innerHTML = '<p>Access our project planning tools:</p><ul><li>Project Timeline Template</li><li>Budget Planner</li><li>Volunteer Scheduler</li></ul>';
                break;
            case 'ebooks':
                modalTitle.textContent = 'Educational Ebooks';
                modalContent.innerHTML = '<p>Download our educational ebooks:</p><ul><li>Street Cat Care Basics</li><li>TNR Best Practices</li><li>Fundraising for Cat Welfare</li></ul>';
                break;
        }
    }

    // Placeholder for Stripe integration
    // You'll need to replace 'your_publishable_key' with your actual Stripe publishable key
    // var stripe = Stripe('your_publishable_key');
    var buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var productId = this.getAttribute('data-product-id');
            console.log('Buy button clicked for product: ' + productId);
            // Here you would typically make a call to your server to create a Stripe Checkout session
            // Then use Stripe.js to redirect to the Checkout page
        });
    });
});
