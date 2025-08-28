    document.addEventListener('DOMContentLoaded', function() {
        // --- DATA ---
        const carModels = [
            { id: 1, name: 'GAC GN8 PHEV', 
            images: [

             'images/GAC GN8 PHEV (7).jpg',
             'images/GAC GN8 PHEV (6).jpg',
             'images/GAC GN8 PHEV (5).jpg',
             'images/GAC GN8 PHEV (3).jpg',
             'images/GAC GN8 PHEV (2).jpg',
             'images/GAC GN8 PHEV (9).jpg',
             'images/GAC GN8 PHEV (1).jpg',
             
              ],
              type: 'MPV', price: 'unavailable', engine: '2.0L PHEV', description: 'A luxurious and spacious plug-in hybrid MPV, offering premium comfort and outstanding fuel efficiency for the modern executive.', tags: ['MPV', 'Popular', 'New Arrival'] },
            { id: 2, name: 'GAC S9',
             images: [

             'images/Image_2025-08-28_131911_606.jpg',
             'images/Image_2025-08-28_132008_326.jpg',
             'images/Image_2025-08-28_132013_135.jpg',
                 'images/Image_2025-08-28_132001_838.jpg',
                 'images/Image_2025-08-28_132016_613.jpg',
                 'images/Image_2025-08-28_131958_518.jpg',
                 'images/Image_2025-08-28_131953_807.jpg',

               ],
               type: 'SUV', price: '$7X,XXX', engine: 'none', description: 'A versatile and stylish compact SUV, offering a comfortable ride, advanced technology, and ample space for families.', tags: ['SUV'] },
            { id: 3, name: 'GAC GS3 Emzoom', images: [
            
            'images/Image_2025-08-28_140811_857.png',
            'images/Image_2025-08-28_140818_601.png',
            'images/Image_2025-08-28_140821_705.png',
            'images/Image_2025-08-28_140824_384.png',
            'images/Image_2025-08-28_140826_809.png',
            ], 

            type: 'SUV', price: '$2X,XXX', engine: '1.5 Turbo', description: 'A futuristic and bold all-electric MPV with a cutting-edge design, lounge-like interior, and formidable performance.', tags: ['SUV', 'Popular'] },
            { id: 4, name: 'GAC M8', images: [
                'images/Image_2025-08-28_141546_024.jpg',
                'images/Image_2025-08-28_141549_145.jpg',
                'images/Image_2025-08-28_141607_768.jpg',
                'images/Image_2025-08-28_141610_784.jpg',
                'images/Image_2025-08-28_141613_904.jpg',
                'images/Image_2025-08-28_141616_648.jpg',
                'images/Image_2025-08-28_141619_760.jpg',
            ], 

            type: 'MPV', price: '$6X,XXX', engine: '2.0T', description: 'A compact and agile SUV perfect for city driving, featuring a modern, aggressive look and smart, user-friendly features.', tags: ['MPV', 'Popular'] },
            { id: 5, name: 'GAC GS8', images: [

      
            ],
             
            type: 'SUV', price: '$41,500', engine: '2.0L Turbo', description: 'A commanding and luxurious 7-seater SUV that delivers powerful performance and premium comfort for all passengers.', tags: ['SUV', 'Popular'] },
            { id: 6, name: 'GAC M8', images: [

            'https://images.unsplash.com/photo-1617469723732-4e4b3d3958a4?q=80&w=2070&auto=format&fit=crop', 
            'https://placehold.co/800x600/1a1a1a/ffffff?text=M8+Lounge'],

             type: 'MPV', price: '$55,000', engine: '2.0L PHEV', description: 'The ultimate luxury MPV, designed with a first-class cabin experience, sophisticated style, and smooth hybrid power.', tags: ['MPV'] },
            { id: 7, name: 'AVATR 12', images: [

            'https://images.unsplash.com/photo-1691122335914-8d356879412a?q=80&w=2070&auto=format&fit=crop', 
            'https://placehold.co/800x600/1a1a1a/ffffff?text=AVATR+12+Interior'], 

            type: 'SEDAN', price: '$65,000', engine: 'Dual-Motor EV', description: 'A revolutionary electric gran coupe featuring avant-garde design, exceptional intelligence, and exhilarating performance.', tags: ['SEDAN', 'Popular', 'New Arrival'] },
            { id: 8, name: 'AVATR 07', images: [

            'https://images.unsplash.com/photo-1603584946321-c579a5313f57?q=80&w=1974&auto=format&fit=crop', 
            'https://placehold.co/800x600/1a1a1a/ffffff?text=AVATR+07+Concept'], 

            type: 'SUV', price: '$68,000', engine: 'Dual-Motor EV', description: 'A premium smart electric SUV that combines rugged capability with elegant design and a highly intuitive user experience.', tags: ['SUV', 'Pre-Order'] },
            { id: 9, name: 'XIAOMI SU7 Max', images: [
            
            'https://images.unsplash.com/photo-1708224522262-6c08f439d75a?q=80&w=2070&auto=format&fit=crop', 
            'https://placehold.co/800x600/1a1a1a/ffffff?text=SU7+Interior'],

             type: 'SEDAN', price: '$59,999', engine: 'Dual-Motor EV', description: 'The Max version of Xiaomi\'s debut EV, featuring enhanced performance and extended range for the ultimate driving experience.', tags: ['SEDAN', 'Popular', 'New Arrival'] },
            { id: 10, name: 'Used Toyota Camry', images: [
            
            'https://images.unsplash.com/photo-1631292782229-a8b237773532?q=80&w=2070&auto=format&fit=crop', 
            'https://placehold.co/800x600/1a1a1a/ffffff?text=Camry+Interior'], 

            type: 'SEDAN', price: '$18,500', engine: '2.5L Petrol', description: 'A reliable and well-maintained used sedan, perfect for daily commutes. Excellent condition with low mileage.', tags: ['Used Car', 'SEDAN'] },
        ];

        // --- ELEMENT SELECTORS ---
        const modelsGrid = document.getElementById('modelsGrid');
        const noResultsMessage = document.getElementById('no-results');
        const allModelsTitle = document.getElementById('all-models-title');
        
        const modalOverlay = document.getElementById('modelModal');
        const modalImageSection = document.getElementById('modalImageSection');
        const modalDetailsSection = document.getElementById('modalDetailsSection');
        const modalCloseBtn = document.getElementById('modalCloseBtn');
        
        const modelFilterLinks = document.querySelectorAll('.model-filter-link');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileNav = document.getElementById('mobileNav');
        const mobileDropdownToggle = document.querySelector('.mobile-nav-overlay .dropdown-toggle');
        const mobileDropdownContent = document.querySelector('.mobile-nav-overlay .dropdown-content');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-overlay .nav-link, .mobile-nav-overlay .model-filter-link');

        const newArrivalsGrid = document.getElementById('new-arrivals-grid');
        const inStockGrid = document.getElementById('in-stock-grid');
        const mostPopularGrid = document.getElementById('most-popular-grid');
        const usedCarGrid = document.getElementById('used-car-grid');
        
        // --- NEW SEARCH OVERLAY SELECTORS ---
        const searchOverlay = document.getElementById('searchOverlay');
        const headerSearchTrigger = document.getElementById('headerSearchTrigger');
        const mobileSearchTrigger = document.getElementById('mobileSearchTrigger');
        const searchOverlayCloseBtn = document.getElementById('searchOverlayCloseBtn');
        const overlaySearchInput = document.getElementById('overlaySearchInput');
        const searchRecommendationsGrid = document.getElementById('search-recommendations-grid');
        const searchResultsTitle = document.getElementById('search-results-title');
        const searchNoResults = document.getElementById('search-no-results');

        let currentFilter = 'All';

        // --- HERO SLIDER LOGIC ---
        const slides = document.querySelectorAll('.slide');
        const sliderDotsContainer = document.querySelector('.slider-dots');
        let currentSlide = 0;
        let slideInterval;

        function createDots() {
            slides.forEach((_, i) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.dataset.slideIndex = i;
                sliderDotsContainer.appendChild(dot);
            });
        }

        function showSlide(index) {
            slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
            document.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === index));
            currentSlide = index;
        }

        function nextSlide() {
            showSlide((currentSlide + 1) % slides.length);
        }

        function startAutoPlay() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        }

        document.querySelector('.prev-slide').addEventListener('click', () => {
            showSlide((currentSlide - 1 + slides.length) % slides.length);
            startAutoPlay();
        });

        document.querySelector('.next-slide').addEventListener('click', () => {
            nextSlide();
            startAutoPlay();
        });

        sliderDotsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('dot')) {
                showSlide(parseInt(e.target.dataset.slideIndex));
                startAutoPlay();
            }
        });
        
        // --- MODAL LOGIC ---
        function showModal(car) {
            let imagesHtml = car.images.map((img, index) => `
                <div class="modal-slide-item ${index === 0 ? 'active' : ''}">
                    <img src="${img}" alt="${car.name} image ${index + 1}" onerror="this.onerror=null;this.src='https://placehold.co/800x600/1a1a1a/ffffff?text=Image+Not+Found';">
                </div>
            `).join('');
            
            if (car.images.length > 1) {
                imagesHtml += `
                    <div class="modal-carousel-nav">
                        <button class="modal-prev-btn">&lt;</button>
                        <button class="modal-next-btn">&gt;</button>
                    </div>`;
            }
            modalImageSection.innerHTML = imagesHtml;

            modalDetailsSection.innerHTML = `
                <h2>${car.name}</h2>
                <p class="price">${car.price}</p>
                <p class="description">${car.description}</p>
                <div class="spec-grid">
                    <div class="spec-item"><span>Type</span><span>${car.type}</span></div>
                    <div class="spec-item"><span>Engine</span><span>${car.engine}</span></div>
                </div>
            `;
            
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';

            if (car.images.length > 1) {
                const modalSlides = modalImageSection.querySelectorAll('.modal-slide-item');
                let currentModalSlide = 0;
                
                const showModalSlide = (index) => {
                    modalSlides.forEach((s, i) => s.classList.toggle('active', i === index));
                    currentModalSlide = index;
                };

                modalImageSection.querySelector('.modal-prev-btn').addEventListener('click', () => {
                    showModalSlide((currentModalSlide - 1 + modalSlides.length) % modalSlides.length);
                });
                modalImageSection.querySelector('.modal-next-btn').addEventListener('click', () => {
                    showModalSlide((currentModalSlide + 1) % modalSlides.length);
                });
            }
        }

        function hideModal() {
            modalOverlay.classList.remove('active');
            if(!document.body.classList.contains('search-open')) {
                 document.body.style.overflow = 'auto';
            }
        }
        
        modalCloseBtn.addEventListener('click', hideModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) hideModal();
        });

        // --- DISPLAY & FILTERING LOGIC ---
        function createCard(model) {
            const card = document.createElement('div');
            card.className = 'model-card';
            
            let tagHtml = '';
            if (model.tags.includes('New Arrival')) {
                tagHtml = `<div class="model-card-tag">NEW</div>`;
            } else if (model.tags.includes('Popular')) {
                tagHtml = `<div class="model-card-tag" style="background-color: var(--accent-primary);">POPULAR</div>`;
            }

            card.innerHTML = `
                <div class="model-card-image">
                    <img src="${model.images[0]}" alt="${model.name}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/320x200/1a1a1a/ffffff?text=Not+Found';">
                    ${tagHtml}
                </div>
                <div class="model-card-content">
                    <div>
                        <h3>${model.name}</h3>
                        <p>Engine: ${model.engine}</p>
                    </div>
                    <p class="price">${model.price}</p>
                </div>
            `;
            card.addEventListener('click', () => showModal(model));
            return card;
        }

        function displayModels(grid, modelsToDisplay) {
            if (!grid) return;
            grid.innerHTML = '';
            if (modelsToDisplay.length > 0) {
                modelsToDisplay.forEach(model => {
                    grid.appendChild(createCard(model));
                });
            }
        }

        function filterAndDisplayMainGrid() {
            const filterType = currentFilter;
            allModelsTitle.textContent = filterType === 'All' ? 'All Models' : `${filterType} Models`;

            const filtered = carModels.filter(model => {
                const filterMatch = filterType === 'All' || model.tags.includes(filterType) || model.type === filterType;
                return filterMatch;
            });

            displayModels(modelsGrid, filtered);
            noResultsMessage.style.display = filtered.length === 0 ? 'block' : 'none';
        }

        // --- SEARCH OVERLAY LOGIC ---
        function openSearchOverlay() {
            searchOverlay.classList.add('active');
            document.body.classList.add('search-open');
            // Use a short timeout to ensure the overlay is visible before focusing
            setTimeout(() => {
                overlaySearchInput.focus();
            }, 100); 
            displaySearchRecommendations();
        }

        function closeSearchOverlay() {
            searchOverlay.classList.remove('active');
            document.body.classList.remove('search-open');
            overlaySearchInput.value = ''; // Clear search input on close
        }
        
        function displaySearchRecommendations() {
            const popular = carModels.filter(m => m.tags.includes('Popular'));
            displayModels(searchRecommendationsGrid, popular);
            searchNoResults.style.display = 'none';
            searchResultsTitle.textContent = "Popular Models";
        }

        function handleOverlaySearch() {
            const searchTerm = overlaySearchInput.value.toLowerCase().trim();

            if (searchTerm === '') {
                displaySearchRecommendations();
                return;
            }

            const filtered = carModels.filter(model => 
                model.name.toLowerCase().includes(searchTerm) || 
                model.type.toLowerCase().includes(searchTerm) ||
                model.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );

            displayModels(searchRecommendationsGrid, filtered);
            
            if (filtered.length > 0) {
                searchNoResults.style.display = 'none';
                searchResultsTitle.textContent = `Found ${filtered.length} results for "${searchTerm}"`;
            } else {
                searchNoResults.style.display = 'block';
                 searchResultsTitle.textContent = `No results for "${searchTerm}"`;
            }
        }

        headerSearchTrigger.addEventListener('click', openSearchOverlay);
        mobileSearchTrigger.addEventListener('click', openSearchOverlay);
        searchOverlayCloseBtn.addEventListener('click', closeSearchOverlay);
        overlaySearchInput.addEventListener('keyup', handleOverlaySearch);
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                closeSearchOverlay();
            }
        });


        // --- EVENT LISTENERS ---
        modelFilterLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); 
                currentFilter = e.currentTarget.dataset.filter;
                
                document.querySelectorAll('.main-nav .nav-link').forEach(l => l.classList.remove('active'));
                const modelsLink = document.querySelector('.main-nav .model-filter-link[data-filter="All"]');
                if(modelsLink) modelsLink.classList.add('active');

                filterAndDisplayMainGrid();
                
                const allModelsSection = document.getElementById('all-models-section');
                if (allModelsSection) {
                    allModelsSection.scrollIntoView({ behavior: 'smooth' });
                }

                if (document.body.classList.contains('menu-open')) {
                    document.body.classList.remove('menu-open');
                }
            });
        });

        mobileMenuToggle.addEventListener('click', () => {
            document.body.classList.toggle('menu-open');
        });
        
        mobileDropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            mobileDropdownContent.classList.toggle('open');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                 if (document.body.classList.contains('menu-open')) {
                     document.body.classList.remove('menu-open');
                 }
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                if (document.body.classList.contains('menu-open')) {
                    document.body.classList.remove('menu-open');
                }
            }
        });

        // --- SCROLL ANIMATION OBSERVER ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1
        });
        
        // --- HORIZONTAL SCROLL BUTTONS ---
        function setupHorizontalScroll(sectionId) {
            const section = document.getElementById(sectionId);
            if (!section) return;

            const container = section.querySelector('.card-scroll-container');
            const prevBtn = section.querySelector('.scroll-btn.prev');
            const nextBtn = section.querySelector('.scroll-btn.next');

            if (!container || !prevBtn || !nextBtn) return;

            nextBtn.addEventListener('click', () => {
                const card = container.querySelector('.model-card');
                if (!card) return;
                const scrollAmount = card.offsetWidth + 13; // Card width + gap
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                const card = container.querySelector('.model-card');
                if (!card) return;
                const scrollAmount = card.offsetWidth + 13;
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }


        // --- INITIALIZATION ---
        function initializePage() {
            createDots();
            showSlide(0);
            startAutoPlay();

            const newArrivals = carModels.filter(m => m.tags.includes('New Arrival'));
            const inStock = carModels.filter(m => !m.tags.includes('Pre-Order'));
            const mostPopular = carModels.filter(m => m.tags.includes('Popular'));
            const usedCars = carModels.filter(m => m.tags.includes('Used Car'));
            
            displayModels(newArrivalsGrid, newArrivals);
            displayModels(inStockGrid, inStock);
            displayModels(mostPopularGrid, mostPopular);
            displayModels(usedCarGrid, usedCars);
            
            currentFilter = 'All';
            filterAndDisplayMainGrid();

            setupHorizontalScroll('new-arrivals-section');
            setupHorizontalScroll('in-stock-section');
            setupHorizontalScroll('most-popular-section');
            setupHorizontalScroll('used-car-section');

            document.querySelectorAll('.content-section, .models-page-container, .main-footer').forEach(el => {
                el.classList.add('animate-on-scroll');
                el.style.transform = 'translateY(24px)';
                observer.observe(el);
            });
        }

        initializePage();
    });





