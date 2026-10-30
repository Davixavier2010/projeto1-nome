// Padaria Prestígio - Brand Kit Engine & Interactive Logic
// Identidade Visual 1986 | Sabor e tradição em cada detalhe!
// Av. Cassiano Ricardo, 1560, Av. da Liberdade, 812 - Jardim Alvorada, São José dos Campos - SP
// Telefone / WhatsApp: (12) 3937-7095

const WHATSAPP_PHONE = "551239377095"; // Formato internacional
const PHONE_DISPLAY = "(12) 3937-7095";

// Cardápio Completo Fiel às Imagens Oficiais da Padaria Prestígio
const menuItems = [
  // --- CHAPA & MATINAIS ---
  {
    id: 1,
    title: "Pão na Chapa com Requeijão",
    category: "chapa",
    price: "R$ 9,90",
    badge: "Campeão da Manhã",
    description: "Pão francês quentinho e estalando com farta camada de requeijão cremoso tostadinho direto na chapa.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    title: "Pão de Queijo com Requeijão na Chapa",
    category: "chapa",
    price: "R$ 10,90",
    badge: "Favorito da Casa",
    description: "Pão de queijo artesanal prensado na chapa com requeijão cremoso derretido e crosta dourada.",
    image: "https://images.unsplash.com/photo-1598143152818-38840be4613e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    title: "Misto Quente Tradicional",
    category: "chapa",
    price: "R$ 16,00",
    badge: "Clássico Paulista",
    description: "Pão francês crocante prensado com fatias nobres de presunto e queijo prato derretendo.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    title: "Pão com Mortadela na Chapa",
    category: "chapa",
    price: "R$ 14,00",
    badge: "Tradição Paulista",
    description: "Generosas lâminas de mortadela aquecidas na chapa, servidas no pão francês crocante quentinho.",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    title: "Queijo Quente Dourado",
    category: "chapa",
    price: "R$ 16,90",
    badge: "Muito Queijo",
    description: "Porção farta de queijo mussarela e prato derretidos na chapa com manteiga da roça.",
    image: "https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    title: "Pão com Manteiga na Chapa",
    category: "chapa",
    price: "R$ 4,50",
    badge: "Café da Manhã",
    description: "O autêntico pão francês douradinho com manteiga derretida estalando na chapa quente.",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7,
    title: "Pão com Ovo na Chapa",
    category: "chapa",
    price: "R$ 10,00",
    badge: "Energia do Dia",
    description: "Ovos caipiras preparados no ponto com manteiga, servidos no pão crocante quentinho.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8,
    title: "Croissant Folhado Francês",
    category: "chapa",
    price: "R$ 10,50",
    badge: "Fornada Fresca",
    description: "Massa folhada amanteigada francesa com casca leve e dourada. Consultar opções de recheios.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 9,
    title: "Catarina Folhada Trançada",
    category: "chapa",
    price: "R$ 13,90",
    badge: "Especialidade",
    description: "Tradicional massa trançada da confeitaria com recheio saboroso e massa macia aerada.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 10,
    title: "Mini Pão de Queijo Mineiro",
    category: "chapa",
    price: "R$ 1,50",
    badge: "Unidade",
    description: "Pão de queijo quentinho com queijo da Canastra. Opção recheada (R$ 2,00) ou Grande (R$ 8,00).",
    image: "https://images.unsplash.com/photo-1598143152818-38840be4613e?auto=format&fit=crop&w=700&q=80"
  },

  // --- CAFETERIA & BEBIDAS MATINAIS ---
  {
    id: 11,
    title: "Capuccino Prestígio Cremoso",
    category: "cafes",
    price: "R$ 9,50",
    badge: "Destaque da Casa",
    description: "Espresso curto, leite aveludado vaporizado, toque aromático de cacau puro e canela.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 12,
    title: "Café Expresso da Casa",
    category: "cafes",
    price: "R$ 6,50",
    badge: "Grão Selecionado",
    description: "Expresso tirado na hora com crema aveludada e aroma intenso. Opção Grande por R$ 8,50.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 13,
    title: "Expresso com Leite Vaporizado",
    category: "cafes",
    price: "R$ 7,00",
    badge: "Cremoso",
    description: "Equilíbrio perfeito entre café expresso encorpado e microespuma de leite fresco. Grande por R$ 9,00.",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 14,
    title: "Pingado Tradicional",
    category: "cafes",
    price: "R$ 5,50",
    badge: "Tradicional",
    description: "O clássico do balcão: café passado quentinho com a quantidade perfeita de leite vaporizado. Pingadinho: R$ 4,50.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 15,
    title: "Café Coado Tradicional",
    category: "cafes",
    price: "R$ 4,00",
    badge: "Passado na Hora",
    description: "Café quentinho, aromático e suave. Opção tamanho Grande por R$ 5,00.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 16,
    title: "Achocolatado Cremoso (Quente/Frio)",
    category: "cafes",
    price: "R$ 8,50",
    badge: "Cremoso",
    description: "Feito com chocolate nobre e leite cremoso no capricho. Também disponível no tamanho grande por R$ 11,00.",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 17,
    title: "Copo de Leite Puro",
    category: "cafes",
    price: "R$ 4,00",
    badge: "Copo Pequeno",
    description: "Copo de leite integral quentinho com espuminha ou gelado. Opção copo grande por R$ 6,00.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80"
  },

  // --- PIZZAS ARTESANAIS (DA FOTO DO CARDÁPIO) ---
  {
    id: 18,
    title: "Pizza À Moda da Casa",
    category: "pizzas",
    price: "R$ 52,90",
    badge: "Especial Prestígio",
    description: "Presunto especial, queijo mussarela farto, ovo, ervilha, milho fresco, peito de peru defumado, cebola e rodelas de tomate.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 19,
    title: "Pizza Frango com Catupiry",
    category: "pizzas",
    price: "R$ 48,90",
    badge: "Mais Pedida",
    description: "Frango desfiado bem temperado, queijo mussarela derretido e cobertura generosa do autêntico Catupiry.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 20,
    title: "Pizza Calabresa Acebolada",
    category: "pizzas",
    price: "R$ 46,90",
    badge: "Favorita da Galera",
    description: "Calabresa fatiada crocante, queijo mussarela borbulhante, fatias finas de cebola fresca e orégano chileno.",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 21,
    title: "Pizza Portuguesa Especial",
    category: "pizzas",
    price: "R$ 49,90",
    badge: "Clássica",
    description: "Presunto fatiado, queijo mussarela, ovo cozido, ervilha macia, milho verde, cebola e tomate em rodelas.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 22,
    title: "Pizza Mussarela Tradicional",
    category: "pizzas",
    price: "R$ 42,90",
    badge: "Cremosa",
    description: "Massa artesanal assada no ponto, molho de tomate caseiro, camada dupla de queijo mussarela e orégano.",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 23,
    title: "Pizza Presunto e Queijo",
    category: "pizzas",
    price: "R$ 47,90",
    badge: "Saborosa",
    description: "Recheio farto de presunto cozido de primeira qualidade com cobertura uniforme de queijo mussarela derretido.",
    image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 24,
    title: "Pizza de Milho com Mussarela",
    category: "pizzas",
    price: "R$ 45,90",
    badge: "Delicada",
    description: "Milho verde selecionado coberto com generosa camada de queijo mussarela derretido e gratinado.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80"
  },

  // --- SUCOS NATURAIS & BEBIDAS GELADAS ---
  {
    id: 25,
    title: "Suco de Laranja Espremido na Hora",
    category: "sucos",
    price: "R$ 13,50",
    badge: "100% Puro",
    description: "Laranjas frescas espremidas na hora sem conservantes. Opção copo pequeno por R$ 7,50 ou com frutas por R$ 14,00.",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 26,
    title: "Suco de Abacaxi com Hortelã",
    category: "sucos",
    price: "R$ 10,00",
    badge: "Refrescante",
    description: "Abacaxi maduro batido com folhas frescas de hortelã. Muito gelo e sabor natural revigorante.",
    image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 27,
    title: "Suco Detox Verde Revigorante",
    category: "sucos",
    price: "R$ 15,00",
    badge: "Super Saúde",
    description: "Mix energético de couve, maçã, limão, gengibre e hortelã batidos na hora para desintoxicar.",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 28,
    title: "Suco de Frutas Vermelhas",
    category: "sucos",
    price: "R$ 12,50",
    badge: "Antioxidante",
    description: "Combinação natural de morango, amora e framboesa fresca, com sabor marcante e refrescante.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 29,
    title: "Limonada Suíça Cremosa",
    category: "sucos",
    price: "R$ 13,00",
    badge: "Tradicional",
    description: "Limões frescos batidos na hora com toque suave de leite condensado e bastante gelo.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 30,
    title: "Vitamina Mista Completa",
    category: "sucos",
    price: "R$ 14,00",
    badge: "Nutritiva",
    description: "Banana, maçã, mamão e leite fresco batidos com aveia na consistência aveludada perfeita.",
    image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 31,
    title: "Tigela de Açaí Puro (500ml)",
    category: "sucos",
    price: "R$ 13,00",
    badge: "Açaí Artesanal",
    description: "Açaí cremoso de verdade batido no ponto ideal. Opção 300ml por R$ 10,00. Adicionais de leite em pó, paçoca e frutas por R$ 4,00.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 32,
    title: "Iogurte Natural Batido com Frutas",
    category: "sucos",
    price: "R$ 15,90",
    badge: "Leve & Natural",
    description: "Iogurte cremoso artesanal acompanhado de pedaços de frutas frescas da estação e mel.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80"
  },

  // --- CONFEITARIA & FORNADAS ---
  {
    id: 33,
    title: "Pão Francês Quentinho (Fornada da Hora)",
    category: "padaria",
    price: "R$ / kg",
    badge: "Fornadas a cada 30 min",
    description: "A grande estrela da casa: casca super crocante, miolo macio e dourado perfeito saindo o dia todo.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 34,
    title: "Sonho de Padaria com Creme de Baunilha",
    category: "padaria",
    price: "R$ 8,50",
    badge: "Doce Tradicional",
    description: "Massa frita douradinha, açúcar de confeiteiro e recheio abundante de creme de baunilha aveludado.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 35,
    title: "Bolo Caseiro de Cenoura com Brigadeiro",
    category: "padaria",
    price: "R$ 9,00",
    badge: "Receita de Família",
    description: "Fatia farta de bolo de cenoura macio e úmido coberto com calda cascão de brigadeiro artesanal.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80"
  }
];

// Estado global de filtragem e busca
let currentCategory = "todos";
let currentSearchTerm = "";

// Renderizar itens do Cardápio com as Cores e Estilos do Brand Kit
function renderMenu() {
  const container = document.getElementById('menu-items-container');
  if (!container) return;

  let filtered = menuItems;

  if (currentCategory !== 'todos') {
    filtered = filtered.filter(item => item.category === currentCategory);
  }

  if (currentSearchTerm.trim() !== '') {
    const term = currentSearchTerm.toLowerCase();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.badge.toLowerCase().includes(term)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-[#6B4E3D] bg-white rounded-3xl border border-[#E7C9A6] p-8">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFF6E6] flex items-center justify-center text-[#C62828] border border-[#E7C9A6]">
          <i data-lucide="search-x" class="w-8 h-8"></i>
        </div>
        <h3 class="text-xl font-bold text-[#4B2E1E] mb-2 font-script text-3xl">Nenhum item encontrado</h3>
        <p class="text-sm text-[#6B4E3D]">Tente pesquisar por outro termo ou mude a categoria acima.</p>
        <button onclick="resetMenuFilter()" class="mt-4 px-5 py-2.5 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A81F1F] rounded-xl transition-all shadow-sm">
          Ver todos os itens
        </button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => {
    const orderText = encodeURIComponent(`Olá, Padaria Prestígio! Gostaria de pedir pelo cardápio: *${item.title}* (${item.price}).`);
    const waLink = `https://wa.me/${WHATSAPP_PHONE}?text=${orderText}`;

    return `
      <div class="prestigio-card group flex flex-col justify-between overflow-hidden">
        <div>
          <!-- Imagem e Badges do Brand Kit -->
          <div class="relative h-52 w-full overflow-hidden bg-[#FFF6E6]">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>
            
            <!-- Badge Superior no Creme & Marrom -->
            <span class="absolute top-3 left-3 bg-[#FFF6E6]/95 backdrop-blur-md text-[#4B2E1E] text-[11px] font-bold px-3 py-1 rounded-full border border-[#E7C9A6] shadow-sm">
              ${item.badge}
            </span>
            
            <!-- Preço no Vermelho Prestígio -->
            <span class="absolute bottom-3 right-3 text-white font-black text-lg bg-[#C62828] px-3.5 py-1.5 rounded-xl shadow-md border border-white/20">
              ${item.price}
            </span>
          </div>

          <!-- Informações de Conteúdo -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-[#2B1A12] group-hover:text-[#C62828] transition-colors mb-2 leading-snug">
              ${item.title}
            </h3>
            <p class="text-[#6B4E3D] text-sm leading-relaxed line-clamp-3">
              ${item.description}
            </p>
          </div>
        </div>

        <!-- Botão de Ação: WhatsApp Direto -->
        <div class="p-6 pt-0 mt-2">
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" 
             class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FFF6E6] hover:bg-[#C62828] text-[#4B2E1E] hover:text-white font-bold text-sm transition-all duration-200 border border-[#E7C9A6] hover:border-[#C62828] shadow-sm group/btn">
            <svg class="w-4 h-4 fill-current text-[#C62828] group-hover/btn:text-white transition-colors" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.086-.179.18-.077.355.101.174.449.741.964 1.2.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.102-.115.434-.506.55-.679.115-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.044.072.044.419-.1.824z"/>
            </svg>
            <span>Pedir no WhatsApp ↗</span>
          </a>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function resetMenuFilter() {
  currentCategory = "todos";
  currentSearchTerm = "";
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) searchInput.value = "";
  
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(t => {
    if (t.getAttribute('data-category') === 'todos') {
      t.classList.remove('bg-white', 'text-[#4B2E1E]', 'border-[#E7C9A6]');
      t.classList.add('bg-[#C62828]', 'text-white', 'border-[#C62828]', 'shadow-md');
    } else {
      t.classList.remove('bg-[#C62828]', 'text-white', 'border-[#C62828]', 'shadow-md');
      t.classList.add('bg-white', 'text-[#4B2E1E]', 'border-[#E7C9A6]');
    }
  });

  renderMenu();
}

// Configurar Troca de Abas
function setupCategoryFilters() {
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('bg-[#C62828]', 'text-white', 'border-[#C62828]', 'shadow-md');
        t.classList.add('bg-white', 'text-[#4B2E1E]', 'border-[#E7C9A6]');
      });
      tab.classList.remove('bg-white', 'text-[#4B2E1E]', 'border-[#E7C9A6]');
      tab.classList.add('bg-[#C62828]', 'text-white', 'border-[#C62828]', 'shadow-md');

      currentCategory = tab.getAttribute('data-category');
      renderMenu();
    });
  });

  // Campo de busca em tempo real
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchTerm = e.target.value;
      renderMenu();
    });
  }
}

// Status Dinâmico de Funcionamento - Padaria Prestígio
// Segunda a Sábado: 06:00 às 22:00
// Domingo: 06:00 às 20:00
function updateStoreStatus() {
  const statusBadge = document.getElementById('store-status-badge');
  const heroStatusBadge = document.getElementById('hero-live-badge');
  if (!statusBadge && !heroStatusBadge) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Domingo, 1 a 6 = Segunda a Sábado
  const hour = now.getHours();
  const minute = now.getMinutes();
  const timeInMinutes = hour * 60 + minute;

  let isOpen = false;
  let closingInfo = "";

  if (day === 0) {
    // Domingo: 06:00 às 20:00 (360 a 1200 minutos)
    if (timeInMinutes >= 360 && timeInMinutes < 1200) {
      isOpen = true;
      closingInfo = "Fecha hoje às 20:00";
    }
  } else {
    // Segunda a Sábado: 06:00 às 22:00 (360 a 1320 minutos)
    if (timeInMinutes >= 360 && timeInMinutes < 1320) {
      isOpen = true;
      closingInfo = "Fecha hoje às 22:00";
    }
  }

  const openHtml = `
    <span class="relative flex h-2.5 w-2.5">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
    </span>
    <span class="font-bold text-emerald-800">Aberto Agora</span>
    <span class="text-emerald-700/80 text-xs hidden sm:inline">• ${closingInfo}</span>
  `;

  const closedHtml = `
    <span class="h-2.5 w-2.5 rounded-full bg-amber-600"></span>
    <span class="font-bold text-amber-800">Fechado no momento</span>
    <span class="text-amber-700/80 text-xs hidden sm:inline">• Abre às 06:00</span>
  `;

  if (statusBadge) {
    if (isOpen) {
      statusBadge.innerHTML = openHtml;
      statusBadge.className = "inline-flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-300 shadow-sm";
    } else {
      statusBadge.innerHTML = closedHtml;
      statusBadge.className = "inline-flex items-center gap-2 text-xs text-amber-800 bg-amber-50 px-4 py-2 rounded-full border border-amber-300 shadow-sm";
    }
  }

  if (heroStatusBadge) {
    if (isOpen) {
      heroStatusBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span> Aberto agora: Fornadas quentinhas saindo!`;
      heroStatusBadge.className = "inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-white/90 border border-emerald-300 px-3.5 py-1.5 rounded-full shadow-sm";
    } else {
      heroStatusBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-600"></span> Fornadas amanhã a partir das 06:00`;
      heroStatusBadge.className = "inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-white/90 border border-amber-300 px-3.5 py-1.5 rounded-full shadow-sm";
    }
  }

  // Destacar o dia da semana atual na tabela de horários
  highlightCurrentDay(day);
}

function highlightCurrentDay(todayDayIndex) {
  // 0: Domingo, 1: Segunda ... 6: Sábado
  const dayRows = document.querySelectorAll('[data-day-index]');
  dayRows.forEach(row => {
    const rowDay = parseInt(row.getAttribute('data-day-index'), 10);
    if (rowDay === todayDayIndex) {
      row.classList.add('bg-[#FFF6E6]', 'border-[#C62828]');
      row.classList.remove('border-[#E7C9A6]/50');
      const badge = row.querySelector('.today-badge');
      if (badge) badge.classList.remove('hidden');
    }
  });
}

// Modal Fale Conosco
function setupModal() {
  const openButtons = document.querySelectorAll('[data-open-modal]');
  const closeButton = document.getElementById('close-modal-btn');
  const modal = document.getElementById('contact-modal');
  const backdrop = document.getElementById('modal-backdrop');

  const open = () => {
    if (!modal) return;
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      const box = modal.querySelector('.modal-box');
      if (box) {
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }
    }, 10);
  };

  const close = () => {
    if (!modal) return;
    modal.classList.add('opacity-0');
    const box = modal.querySelector('.modal-box');
    if (box) {
      box.classList.remove('scale-100');
      box.classList.add('scale-95');
    }
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  };

  openButtons.forEach(btn => btn.addEventListener('click', open));
  if (closeButton) closeButton.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);

  // Form no modal / formulário principal de contato
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || "Cliente";
      const motive = document.getElementById('form-motive')?.value || "Informações";
      const message = document.getElementById('form-message')?.value || "Olá, gostaria de saber mais.";

      const text = encodeURIComponent(
        `Olá, Padaria Prestígio!\n\n` +
        `👤 *Nome:* ${name}\n` +
        `📋 *Assunto:* ${motive}\n` +
        `💬 *Mensagem:* ${message}`
      );

      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank');
      close();
    });
  }
}

// Lightbox para visualizar as fotos originais do cardápio e Brand Kit
function setupMenuPhotoModal() {
  const triggers = document.querySelectorAll('[data-open-menu-photo]');
  const photoModal = document.getElementById('menu-photo-modal');
  const photoBackdrop = document.getElementById('menu-photo-backdrop');
  const closeBtn = document.getElementById('close-photo-modal-btn');
  const modalImg = document.getElementById('photo-modal-img');
  const modalTitle = document.getElementById('photo-modal-title');

  if (!photoModal) return;

  const open = (src, title) => {
    if (modalImg) modalImg.src = src;
    if (modalTitle) modalTitle.textContent = title;
    photoModal.classList.remove('hidden');
    setTimeout(() => {
      photoModal.classList.remove('opacity-0');
      const box = photoModal.querySelector('.photo-modal-box');
      if (box) {
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }
    }, 10);
  };

  const close = () => {
    photoModal.classList.add('opacity-0');
    const box = photoModal.querySelector('.photo-modal-box');
    if (box) {
      box.classList.remove('scale-100');
      box.classList.add('scale-95');
    }
    setTimeout(() => {
      photoModal.classList.add('hidden');
    }, 300);
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const src = trigger.getAttribute('data-img-src');
      const title = trigger.getAttribute('data-img-title') || "Padaria Prestígio";
      open(src, title);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (photoBackdrop) photoBackdrop.addEventListener('click', close);
}

// Menu Mobile
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = menu ? menu.querySelectorAll('a') : [];

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}

// Cookie Banner
function setupCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  const dismissed = localStorage.getItem('prestigio_cookies_accepted');
  if (dismissed) {
    banner.style.display = 'none';
  }

  const buttons = banner.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      localStorage.setItem('prestigio_cookies_accepted', 'true');
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(30px)';
      banner.style.transition = 'all 0.4s ease';
      setTimeout(() => banner.remove(), 400);
    });
  });
}

// Inicializar na montagem do documento
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  setupCategoryFilters();
  setupModal();
  setupMenuPhotoModal();
  setupMobileMenu();
  setupCookieBanner();
  updateStoreStatus();

  // Atualizar status a cada 1 minuto
  setInterval(updateStoreStatus, 60000);
});
