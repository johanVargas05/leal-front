const categoriesExample = [
  { value:"smartphones",icon:'assets/icons/001-cellphone.png', title:'Celulares' },
  { value:"laptops",icon:'assets/icons/002-notebook-computer.png', title:'Portátiles' },
  { value:"fragrances",icon:'assets/icons/003-fragrance.png', title:'Perfumes' },
  { value:"skincare",icon:'assets/icons/004-cosmetics.png', title:'Cosméticos' },
  { value:"groceries",icon:'assets/icons/005-grocery-cart.png', title:'Despensa' },
  { value:"home-decoration",icon:'assets/icons/007-shelves.png', title:'Decoración del hogar' },
  { value:"furniture",icon:'assets/icons/006-house-decoration.png', title:'Muebles' },
  { value:"tops",icon:'assets/icons/008-badge.png', title:'Los mejores' },
  { value:"womens-dresses",icon:'assets/icons/009-dress.png', title:'Ropa dama' },
  { value:"womens-shoes",icon:'assets/icons/010-high-heel.png', title:'Zapatos dama' },
  { value:"mens-shirts",icon:'assets/icons/011-mens-clothing.png', title:'Ropa caballero' },
  { value:"mens-shoes",icon:'assets/icons/012-shoe.png', title:'Zapatos caballero' },
  { value:"mens-watches",icon:'assets/icons/013-wristwatch.png', title:'Relojes caballero' },
  { value:"womens-watches",icon:'assets/icons/013-wristwatch.png', title:'Relojes dama' },
  { value:"womens-bags",icon:'assets/icons/014-handbag.png', title:'Bolsos dama' },
  { value:"womens-jewellery",icon:'assets/icons/015-pearl-necklace.png', title:'Joyas' },
  { value:"sunglasses",icon:'assets/icons/016-sunglass.png', title:'Gafas de sol' },
  { value:"automotive",icon:'assets/icons/017-maintenance.png', title:'Vehículos' },
  { value:"motorcycle",icon:'assets/icons/018-motorbike.png', title:'Motos' },
  { value:"lighting",icon:'assets/icons/019-lamp.png', title:'Iluminación'}
];

export const categories = categoriesExample.sort((a,b)=>a.title.localeCompare(b.title));
