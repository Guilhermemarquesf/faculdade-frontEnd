// ===== CARRINHO DE COMPRAS =====
let carrinho = [];

// ===== SISTEMA DE FILTRO DE PRODUTOS =====
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card-produto-3d');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        cards.forEach(card => {
            card.style.display = 'none';
            if (filterValue === 'all' || card.getAttribute('data-filter').includes(filterValue)) {
                card.style.display = 'block';
                card.style.animation = 'slideUp 0.6s ease-out forwards';
            }
        });
    });
});

// ===== COMPRAR PRODUTOS 3D =====
const botoesComprar3D = document.querySelectorAll('.btn-comprar-3d');

botoesComprar3D.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const card = this.closest('.card-produto-3d');
        const nomeProduto = card.querySelector('.card-front h3').textContent;
        const preco = card.querySelector('.preco-grande').textContent;
        
        carrinho.push({ nome: nomeProduto, preco: preco });
        
        const badge = document.getElementById('badge-count');
        badge.textContent = carrinho.length;
        badge.style.animation = 'none';
        setTimeout(() => {
            badge.style.animation = 'bounce 0.5s ease-out';
        }, 10);
        
        this.textContent = '✓ Adicionado!';
        this.style.background = '#27ae60';
        
        setTimeout(() => {
            this.textContent = 'Comprar';
            this.style.background = '';
        }, 2000);
        
        console.log('Carrinho atualizado:', carrinho);
    });
});

// ===== ANIMAÇÃO DOS NÚMEROS DE STATS =====
function animarNumeros() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 30);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('stats-section')) {
            animarNumeros();
            observer.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    observer.observe(statsSection);
}

// ===== NEWSLETTER =====
const formNewsletter = document.querySelector('.form-newsletter-inovador');
if (formNewsletter) {
    formNewsletter.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const btn = this.querySelector('button');
        
        btn.textContent = '✓ Bem-vindo à Liga!';
        btn.style.background = '#27ae60';
        
        console.log('E-mail inscrito:', email);
        
        setTimeout(() => {
            this.reset();
            btn.textContent = 'Entrar na Liga';
            btn.style.background = '';
        }, 2000);
    });
}

// ===== SCROLL SMOOTH PARA BOTÃO HERO =====
const btnHeroCTA = document.querySelector('.btn-hero-cta');
if (btnHeroCTA) {
    btnHeroCTA.addEventListener('click', () => {
        const produtosSection = document.getElementById('produtos');
        produtosSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// ===== EFEITO PARALLAX NO MOUSE =====
document.addEventListener('mousemove', (e) => {
    const floatingBall = document.querySelector('.floating-ball');
    if (floatingBall) {
        const moveX = (e.clientX / window.innerWidth) * 50 - 25;
        const moveY = (e.clientY / window.innerHeight) * 50 - 25;
        floatingBall.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// ===== MOSTRAR CARRINHO =====
function mostrarCarrinho() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        let mensagem = '🛍️ Itens no carrinho:\n\n';
        let total = 0;
        carrinho.forEach((item, index) => {
            const preco = parseFloat(item.preco.replace('R$ ', '').replace(',', '.'));
            total += preco;
            mensagem += `${index + 1}. ${item.nome} - ${item.preco}\n`;
        });
        mensagem += `\n💰 Total: R$ ${total.toFixed(2).replace('.', ',')}`;
        alert(mensagem);
    }
}

const badge = document.querySelector('.carrinho-badge');
if (badge) {
    badge.style.cursor = 'pointer';
    badge.addEventListener('click', mostrarCarrinho);
}

// ===== LOG DE INICIALIZAÇÃO =====
console.log('🚀 Liga dos Craques Store - Site Inovador Carregado!');
console.log('⚽ Bem-vindo ao futuro do comércio de camisas!');
console.log('💡 Clique no badge do carrinho para ver seus itens');

// ===== ANIMAÇÃO DE ENTRADA DOS CARDS =====
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.card-produto-3d');
    cards.forEach((card, index) => {
        card.style.animation = `slideUp 0.6s ease-out ${index * 0.1}s backwards`;
    });
    
    const playerCards = document.querySelectorAll('.player-card');
    playerCards.forEach((card, index) => {
        card.style.animation = `slideUp 0.6s ease-out ${index * 0.1}s backwards`;
    });
});

// ===== EFEITO HOVER NOS CARDS 3D =====
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
