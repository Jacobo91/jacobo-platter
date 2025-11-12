document.addEventListener("DOMContentLoaded", () => {

        const products = [
                {
                    'title': 'outside vibes t-shirt sunshine',
                    'price': '104.95',
                    'featured-image': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                    'images': [
                        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                        'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1113'
                    ],
                    'tags': [
                        'bestseller'
                    ],
                    'url': 'https://www.google.com',
                },
                {
                    'title': 'nike bottle outside vibes forest green',
                    'price': '104.95',
                    'featured-image': 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880',
                    'images': [
                        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880',
                        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880'
                    ],
                    'tags': [
                        'bestseller',
                        'save 15%'
                    ],
                    'url': '',
                },
                {
                    'title': 'rest in nature t-shirt charcoal',
                    'price': '104.95',
                    'featured-image': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                    'images': [
                        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                        'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1112'
                    ],
                    'tags': [
                        'bestseller'
                    ],
                    'url': '',
                },
                {
                    'title': 'outside vibes cap forest green',
                    'price': '104.95',
                    'featured-image': 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1539',
                    'images': [
                        'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1539',
                        'https://images.unsplash.com/photo-1605666807892-8c11d020bede?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471'
                    ],
                    'tags': [
                        'bestseller',
                        'save 15%'
                    ],
                    'url': '',
                },
                {
                    'title': 'rest in nature t-shirt charcoal',
                    'price': '104.95',
                    'featured-image': 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                    'images': [
                        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                        'https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632'
                    ],
                    'tags': [
                        'bestseller'
                    ],
                    'url': '',
                },
                {
                    'title': 'outside vibes t-shirt sunshine',
                    'price': '104.95',
                    'featured-image': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                    'images': [
                        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                        'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1113'
                    ],
                    'tags': [
                        'bestseller'
                    ],
                    'url': 'https://www.google.com',
                },
                {
                    'title': 'nike bottle outside vibes forest green',
                    'price': '104.95',
                    'featured-image': 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880',
                    'images': [
                        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880',
                        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880'
                    ],
                    'tags': [
                        'bestseller',
                        'save 15%'
                    ],
                    'url': '',
                },
                {
                    'title': 'rest in nature t-shirt charcoal',
                    'price': '104.95',
                    'featured-image': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                    'images': [
                        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                        'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1112'
                    ],
                    'tags': [
                        'bestseller'
                    ],
                    'url': '',
                },
                {
                    'title': 'outside vibes cap forest green',
                    'price': '104.95',
                    'featured-image': 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1539',
                    'images': [
                        'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1539',
                        'https://images.unsplash.com/photo-1605666807892-8c11d020bede?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471'
                    ],
                    'tags': [
                        'bestseller',
                        'save 15%'
                    ],
                    'url': '',
                },
                {
                    'title': 'rest in nature t-shirt charcoal',
                    'price': '104.95',
                    'featured-image': 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                    'images': [
                        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                        'https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632'
                    ],
                    'tags': [
                        'bestseller'
                    ],
                    'url': '',
                }
        ];

        const grid = document.querySelector('#product-grid');
        const template = document.querySelector('#product-card-template');

        function createProductCard(product) {
            const productCard = document.createElement('div');
            productCard.setAttribute('id', 'product-card');
            
            const card = template.content.cloneNode(true);
            const featuredImage = card.querySelector('#featured-image');
            const tagsContainer = card.querySelector('#tags-container');
            const tags = product.tags;

            tags.forEach(tag => {
                const span = document.createElement('span');
                span.textContent = tag;
                span.classList.add(
                    'text-[8px]', 
                    'md:text-[10px]', 
                    `${tag == 'bestseller' ? 'bg-[#FFFFFF]' : 'bg-[#5C7962]'}`, 
                    'py-[4px]', 
                    'px-[8px]', 
                    'rounded-full', 
                    'border-black',
                    'border-[1px]',
                    'border-[solid]',
                    'border-[black]',
                    'uppercase',
                    `${tag == 'bestseller' ? 'text-[#000000]' : 'text-[#FFFFFF]'}`,
                    'tracking-[0.32px]'
                );

                tagsContainer.appendChild(span);
            });

            card.querySelector('a').href = product.url;
            featuredImage.src = product['featured-image'];

            featuredImage.addEventListener('mouseover', () => {
                featuredImage.src = product.images[1];
            })

            featuredImage.addEventListener('mouseout', () => {
                featuredImage.src = product['featured-image'];
            })

            card.querySelector('#product-title').textContent = product.title;
            card.querySelector('#product-price').textContent = `$${product.price}`;

            productCard.appendChild(card);
            grid.appendChild(productCard);
        }

        products.forEach((product, index) => {

            createProductCard(product);
            
        });
});