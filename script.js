// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('fa-times');
        this.classList.toggle('fa-bars');
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                menuToggle.classList.remove('fa-times');
                menuToggle.classList.add('fa-bars');
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Testimonial slider
    if (document.querySelector('.testimonial-slider')) {
        const testimonials = document.querySelectorAll('.testimonial');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        let currentIndex = 0;

        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            testimonials[index].classList.add('active');
        }

        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        });

        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        });

        // Auto-rotate testimonials every 5 seconds
        setInterval(function() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000);

        // Show first testimonial initially
        showTestimonial(0);
    }

    // Load product gallery items for products.html
    if (document.querySelector('.gallery-grid')) {
        const galleryGrid = document.querySelector('.gallery-grid');
        
        // Sample product data - in a real app, you might fetch this from an API
       // In the script.js file, replace the products array with this expanded version:

const products = [
    // TVs (20 items)
    { title: "Smart LED TV 55\"", image: "images/tv.jpg", category: "TVs" },
    { title: "4K  65\"", image: "images/1 (1).jpg", category: "TVs" },
    { title: "OLED Smart  48\"", image: "images/1 (2).jpg", category: "TVs" },
    { title: "QLED  75\"", image: "images/1 (3).jpg", category: "TVs" },
    { title: "HD Ready 32\"", image: "images/1 (4).jpg", category: "TVs" },
    { title: "Android  43\"", image: "images/1 (5).jpg", category: "TVs" },
    { title: "Curved  55\"", image: "images/1 (6).jpg", category: "TVs" },
    { title: "Smart  with Netflix 50\"", image: "images/1 (7).jpg", category: "TVs" },
    { title: "4K HDR  58\"", image: "images/1 (8).jpg", category: "TVs" },
    { title: "Ultra Slim  40\"", image: "images/1 (9).jpg", category: "TVs" },
    { title: "Gaming 5\"", image: "image/1 (100).jpg", category: "TVs" },
    { title: "Smart h Alexa 55\"", image: "images/1 (11).jpg", category: "TVs" },
    { title: "LED32\" Basic", image: "images/1 (12).jpg", category: "TVs" },
    { title: "4K Smart  70\"", image: "images/1 (13).jpg", category: "TVs" },
    { title: "OLED 4K 55\"", image: "images/1 (14).jpg", category: "TVs" },
    { title: "Smart  with Google Assistant 65\"", image: "images/1 (15).jpg", category: "TVs" },
    { title: "Full HD  43\"", image: "images/1 (16).jpg", category: "TVs" },
    { title: "QLED 8K  75\"", image: "images/1 (17).jpg", category: "TVs" },
    { title: "Smart Twith AirPlay 50\"", image: "images/1 (18).jpg", category: "TVs" },
    { title: "Ultra HD  60\"", image: "images/1 (19).jpg", category: "TVs" },

    // Blenders (15 items)
    { title: "Portable  500W", image: "images/blender.jpg", category: "Blenders" },
    { title: "Professional  1000W", image: "images/1 (20).jpg", category: "Blenders" },
    { title: "Personal  300W", image: "images/1 (21).jpg", category: "Blenders" },
    { title: "Glass Jar  700W", image: "images/1 (22).jpg", category: "Blenders" },
    { title: "Stainless Steel  1200W", image: "images/1 (23).jpg", category: "Blenders" },
    { title: "Mini  250W", image: "images/1 (24).jpg", category: "Blenders" },
    { title: "Commercial 1500W", image: "images/1 (25).jpg", category: "Blenders" },
    { title: "Smart with Timer 800W", image: "images/1 (26).jpg", category: "Blenders" },
    { title: "r with Grinder 900W", image: "images/1 (27).jpg", category: "Blenders" },
    { title: "Travel  350W", image: "images/1 (28).jpg", category: "Blenders" },
    { title: " with Ice Crush 1000W", image: "image/1 (60).jpg", category: "Blenders" },
    { title: " with 4 Jars 750W", image: "images/1 (29).jpg", category: "Blenders" },
    { title: "Quiet Blender 600W", image: "images/1 (30).jpg", category: "Blenders" },
    { title: "r with Digital Display 950W", image: "images/1 (31).jpg", category: "Blenders" },
    { title: "B with Soup Function 850W", image: "images/1 (32).jpg", category: "Blenders" },

    // Phones (15 items)
    { title: "Smartphone X Pro", image: "images/phone.jpg", category: "Phones" },
    { title: "Smartphone Y Lite", image: "images/1 (33).jpg", category: "Phones" },
    { title: "Smartphone Z Ultra", image: "images/1 (34).jpg", category: "Phones" },
    { title: "Smartphone A Max", image: "images/1 (35).jpg", category: "Phones" },
    { title: "Smartphone B Pro", image: "images/1 (36).jpg", category: "Phones" },
    { title: "Smartphone C Lite", image: "images/1 (37).jpg", category: "Phones" },
    { title: "Smartphone D Plus", image: "images/1 (38).jpg", category: "Phones" },
    { title: "Smartphone E Ultra", image: "images/1 (39).jpg", category: "Phones" },
    { title: "Smartphone F Max", image: "image/1 (70).jpg", category: "Phones" },
    { title: "Smartphone G Pro", image: "images/1 (41).jpg", category: "Phones" },
    { title: "Smartphone H Lite", image: "image/1 (90).jpg", category: "Phones" },
    { title: "Smartphone I Plus", image: "images/1 (42).jpg", category: "Phones" },
    { title: "Smartphone J Ultra", image: "images/1 (43).jpg", category: "Phones" },
    { title: "Smartphone K Max", image: "images/1 (44).jpg", category: "Phones" },
    { title: "Smartphone L Pro", image: "images/1 (45).jpg", category: "Phones" },

    // Solar Panels (10 items)
    { title: "Solar Panel 200W", image: "images/solar.jpg", category: "Solar Panels" },
    { title: "Solar Panel Kit 500W", image: "image/1 (100).jpg", category: "Solar Panels" },
    { title: "Solar Panel 100W", image: "image/1 (102).jpg", category: "Solar Panels" },
    { title: "Solar Panel 300W Mono", image: "images/1 (48).jpg", category: "Solar Panels" },
    { title: "Solar Panel Kit 1KW", image: "images/1 (49).jpg", category: "Solar Panels" },
    { title: "Flexible Solar Panel 150W", image: "images/1 (50).jpg", category: "Solar Panels" },
    { title: "Solar Panel 250W Poly", image: "images/1 (2).jpg", category: "Solar Panels" },
    { title: "Solar Panel Kit 2KW", image: "image/1 (52).jpg", category: "Solar Panels" },
    { title: "Portable Solar Panel 50W", image: "images/1 (46).jpg", category: "Solar Panels" },
    { title: "Solar Panel 400W Mono", image: "images/1 (47).jpg", category: "Solar Panels" },

    // Audio (10 items)
    { title: "Home Theater System", image: "image/1 (53).jpg", category: "Audio" },
    { title: "Wireless Headphones", image: "image/1 (54).jpg", category: "Audio" },
    { title: "Bluetooth Speaker", image: "image/1 (55).jpg", category: "Audio" },
    { title: "Soundbar with Subwoofer", image: "image/1 (56).jpg", category: "Audio" },
    { title: "Earbuds Pro", image: "image/1 (57).jpg", category: "Audio" },
    { title: "Portable PA System", image: "image/1 (58).jpg", category: "Audio" },
    { title: "DJ Controller", image: "image/1 (59).jpg", category: "Audio" },
    { title: "Karaoke Machine", image: "image/1 (60).jpg", category: "Audio" },
    { title: "Noise Cancelling Headphones", image: "image/1 (61).jpg", category: "Audio" },
    { title: "Surround Sound System", image: "image/1 (62).jpg", category: "Audio" },

    // Computers (15 items)
    { title: "Laptop Ultra 15\"", image: "image/1 (63).jpg", category: "Computers" },
    { title: "Tablet Pro 10\"", image: "image/1 (64).jpg", category: "Computers" },
    { title: "Gaming Laptop 17\"", image: "image/1 (65).jpg", category: "Computers" },
    { title: "Ultrabook 14\"", image: "image/1 (66).jpg", category: "Computers" },
    { title: "Chromebook 11\"", image: "image/1 (67).jpg", category: "Computers" },
    { title: "2-in-1 Laptop 13\"", image: "image/1 (68).jpg", category: "Computers" },
    { title: "Workstation Laptop 15\"", image: "image/1 (69).jpg", category: "Computers" },
    { title: "Tablet with Keyboard 12\"", image: "image/1 (70).jpg", category: "Computers" },
    { title: "Budget Laptop 15\"", image: "image/1 (71).jpg", category: "Computers" },
    { title: "Premium Laptop 16\"", image: "image/1 (72).jpg", category: "Computers" },
    { title: "Student Laptop 14\"", image: "image/1 (73).jpg", category: "Computers" },
    { title: "Business Laptop 13\"", image: "image/1 (74).jpg", category: "Computers" },
    { title: "Gaming Tablet 11\"", image: "image/1 (75).jpg", category: "Computers" },
    { title: "Convertible Laptop 15\"", image: "image/1 (76).jpg", category: "Computers" },
    { title: "Rugged Tablet 10\"", image: "image/1 (77).jpg", category: "Computers" },

    // Home Appliances (15 items)
    { title: "Microwave Oven 20L", image: "image/1 (78).jpg", category: "Home Appliances" },
    { title: "Air Fryer 5L", image: "image/1 (79).jpg", category: "Home Appliances" },
    { title: "Electric Kettle 1.7L", image: "image/1 (80).jpg", category: "Home Appliances" },
    { title: "Rice Cooker 10-cup", image: "image/1 (81).jpg", category: "Home Appliances" },
    { title: "Toaster 4-slice", image: "image/1 (82).jpg", category: "Home Appliances" },
    { title: "Food Processor 1000W", image: "image/1 (83).jpg", category: "Home Appliances" },
    { title: "Slow Cooker 6L", image: "image/1 (84).jpg", category: "Home Appliances" },
    { title: "Juicer 800W", image: "image/1 (85).jpg", category: "Home Appliances" },
    { title: "Coffee Maker 12-cup", image: "image/1 (86).jpg", category: "Home Appliances" },
    { title: "Sandwich Maker", image: "image/1 (87).jpg", category: "Home Appliances" },
    { title: "Electric Grill", image: "image/1 (88).jpg", category: "Home Appliances" },
    { title: "Steam Iron", image: "image/1 (89).jpg", category: "Home Appliances" },
    { title: "Vacuum Cleaner", image: "image/1 (90).jpg", category: "Home Appliances" },
    { title: "Stand Mixer", image: "image/1 (91).jpg", category: "Home Appliances" },
    { title: "Electric Oven 30L", image: "image/1 (92).jpg", category: "Home Appliances" }
];

        // Generate gallery items
        products.forEach(product => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div class="gallery-overlay">
                    <h3>${product.title}</h3>
                    <p>${product.category}</p>
                </div>
            `;
            galleryItem.addEventListener('click', function() {
                window.open(`https://wa.me/256753498304?text=I%20want%20to%20know%20more%20about%20${encodeURIComponent(product.title)}`, '_blank');
            });
            galleryGrid.appendChild(galleryItem);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});