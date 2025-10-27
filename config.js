// Archivo de configuración para personalizar la tienda (Versión FINAL)
const STORE_CONFIG = {
    // --- DATOS DEL NEGOCIO ---
    NOMBRE_TIENDA: "RENACER NATURAL", // <--- Nombre de tu tienda
    PROMOCION_TEXTO: "🌿 ¡Promoción! Envíos gratis y 10% de descuento en todos los productos 🌿", // <--- Tu texto de promoción
    
    // Rutas de imágenes que usan la carpeta local 'imgparaproduccion'
    LOGO_URL: "imgparaproduccion/LOGORENACERNATURALNEGRO.png",
    FONDO_URL: "imgparaproduccion/fondo4.jpg", 

    // --- DATOS DE CONTACTO Y PAGO (TUS DATOS REALES) ---
    WHATSAPP_NUMERO: '528182534891', // Código de país (52) + número
    
    PAGO: {
        // Rellena estos datos con la información de tu cuenta bancaria real
        CLABE: '5579100400057897', 
        BANCO: 'Santander',
        BENEFICIARIO: 'Dylan Miramontes Gomez'
    },

    // --- PRODUCTOS DISPONIBLES (TUS PRODUCTOS) ---
    PRODUCTOS_DISPONIBLES: [
        {
            id: "GOLDULTRA",
            nombre: "ULTRA ADVANC3 GOLD CON 30 CAPSULAS",
            precio: 250,
            descripcionCorta: "Mejora tu energía y rendimiento diario con ingredientes naturales.",
            imagenProducto: "imgparaproduccion/GOLDULTRA.png",
            imagenFicha: "imgparaproduccion/fichaGOLDULTRA.png"
        },
        {
            id: "ASHWAGANDHA",
            nombre: "ASHWAGANDHA CON 60 CAPSULAS",
            precio: 220,
            descripcionCorta: "Relaja cuerpo y mente con nuestro suplemento natural.",
            imagenProducto: "imgparaproduccion/ashwagandha.png",
            imagenFicha: "imgparaproduccion/FICHAASHWAGANDHA.png"
        },
        {
            id: "BPASSDORADO",
            nombre: "BPASS DORADO CON 30 CAPSULAS",
            precio: 250,
            descripcionCorta: "Limpia y renueva tu organismo de forma 100% natural.",
            imagenProducto: "imgparaproduccion/bypassdorado.png",
            imagenFicha: "imgparaproduccion/fichabpassdorado.png"
        }
        // Agrega o modifica más productos aquí
    ]
};