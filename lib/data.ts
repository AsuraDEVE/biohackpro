import { Article, Author, AffiliateProduct, Category } from "./types";

export const categories: Category[] = [
  "Sueño",
  "Nootrópicos",
  "Rendimiento",
  "Suplementos",
];

export const authors: Record<string, Author> = {
  "carlos-mendoza": {
    name: "Carlos Mendoza",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    bio: "Neurocientífico y especialista en biohacking con más de 10 años de experiencia optimizando el rendimiento cognitivo.",
    twitter: "carlosbiohack",
  },
  "ana-garcia": {
    name: "Ana García",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    bio: "Nutricionista funcional certificada, enfocada en suplementación estratégica y optimización metabólica.",
    twitter: "ananutricion",
  },
  "miguel-torres": {
    name: "Miguel Torres",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    bio: "Coach de rendimiento humano y experto en técnicas de recuperación y optimización del sueño.",
    twitter: "miguelrendimiento",
  },
};

export const articles: Article[] = [
  {
    slug: "guia-completa-melatonina",
    title: "Guía Completa de Melatonina: Dosis, Timing y Efectos",
    excerpt: "Todo lo que necesitas saber sobre la hormona del sueño. Aprende a usar melatonina correctamente para optimizar tu ciclo circadiano.",
    content: `
## ¿Qué es la Melatonina?

La melatonina es una hormona producida naturalmente por la glándula pineal en respuesta a la oscuridad. Juega un papel crucial en la regulación del ciclo sueño-vigilia.

### Producción Natural

Tu cuerpo comienza a producir melatonina cuando el sol se pone, alcanzando su pico entre las 2:00 y 4:00 AM. Sin embargo, factores como la luz azul de las pantallas, el jet lag y el envejecimiento pueden reducir su producción.

## Dosis Recomendadas

### Para Insomnio Leve
- **0.5 - 3 mg** 30-60 minutos antes de dormir
- Comenzar con la dosis más baja

### Para Jet Lag
- **0.5 - 5 mg** al acostarse en el destino
- Continuar por 2-5 días

### Para Cambios de Turno
- **1 - 3 mg** antes del período de sueño deseado

## Timing Óptimo

El momento de la toma es crucial:

1. **30-60 minutos antes de dormir** para la mayoría de casos
2. **Consistencia diaria** a la misma hora
3. **Evitar luz brillante** después de la toma

## Efectos Secundarios

Generalmente bien tolerada, pero puede incluir:
- Somnolencia diurna
- Dolores de cabeza
- Mareos leves

## Conclusión

La melatonina es una herramienta valiosa cuando se usa correctamente. Comienza con dosis bajas y ajusta según tu respuesta individual.
    `,
    category: "Sueño",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=400&fit=crop",
    author: authors["miguel-torres"],
    publishedAt: "2024-01-15",
    readingTime: 8,
    featured: true,
  },
  {
    slug: "nootropicos-principiantes",
    title: "Los 5 Mejores Nootrópicos para Principiantes",
    excerpt: "Descubre los compuestos cognitivos más seguros y efectivos para comenzar tu viaje en la optimización mental.",
    content: `
## Introducción a los Nootrópicos

Los nootrópicos son sustancias que pueden mejorar la función cognitiva, la memoria, la creatividad y la motivación en individuos sanos.

### ¿Por qué empezar con precaución?

Es importante comenzar con nootrópicos bien estudiados y con un perfil de seguridad establecido.

## 1. L-Teanina

**Dosis:** 100-200 mg
**Mejor con:** Café (para el efecto sinérgico)

La L-Teanina es un aminoácido encontrado en el té verde que promueve la relajación sin sedación.

### Beneficios
- Reduce el nerviosismo causado por la cafeína
- Mejora el enfoque y la atención
- Promueve ondas cerebrales alfa

## 2. Cafeína

**Dosis:** 50-200 mg
**Timing:** Mañana, evitar después del mediodía

El nootrópico más estudiado y utilizado en el mundo.

### Beneficios
- Aumenta la alerta
- Mejora el rendimiento físico
- Potencia la concentración

## 3. Bacopa Monnieri

**Dosis:** 300 mg (extracto estandarizado al 50% bacosides)
**Tiempo:** Efectos acumulativos en 8-12 semanas

Hierba ayurvédica tradicional con sólida evidencia científica.

### Beneficios
- Mejora la memoria a largo plazo
- Reduce la ansiedad
- Efectos neuroprotectores

## 4. Rhodiola Rosea

**Dosis:** 200-400 mg
**Mejor momento:** Mañana o temprano en la tarde

Adaptógeno que ayuda al cuerpo a manejar el estrés.

### Beneficios
- Reduce la fatiga
- Mejora el rendimiento mental bajo estrés
- Potencializa el estado de ánimo

## 5. Creatina

**Dosis:** 3-5 g diarios
**Tipo:** Creatina monohidrato

No solo para atletas, la creatina también beneficia al cerebro.

### Beneficios
- Mejora la memoria de trabajo
- Aumenta la energía cerebral
- Neuroprotección

## Conclusión

Comienza con uno o dos nootrópicos, mantén un diario de efectos y ajusta según tu respuesta individual.
    `,
    category: "Nootrópicos",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=400&fit=crop",
    author: authors["carlos-mendoza"],
    publishedAt: "2024-01-20",
    readingTime: 12,
    featured: true,
  },
  {
    slug: "optimizar-ciclo-circadiano",
    title: "Cómo Optimizar Tu Ciclo Circadiano",
    excerpt: "Estrategias basadas en evidencia para sincronizar tu reloj biológico y mejorar tu energía, sueño y rendimiento.",
    content: `
## Entendiendo el Ritmo Circadiano

Tu ritmo circadiano es un reloj interno de 24 horas que regula numerosos procesos biológicos.

### Impacto en la Salud

Un ritmo circadiano desalineado se asocia con:
- Problemas de sueño
- Metabolismo alterado
- Mayor riesgo de enfermedades crónicas

## Estrategias de Luz

### Luz de Mañana
- **Exponerte a luz brillante** dentro de la primera hora del día
- **10-30 minutos** de luz solar directo
- **Beneficio:** Suprime la melatonina y establece el ciclo

### Luz de Tarde/Noche
- **Reducir luz brillante** 2-3 horas antes de dormir
- **Usar luces cálidas** (tonos naranjas/rojos)
- **Bloquear luz azul** con gafas o configuraciones de pantalla

## Timing de Comidas

### Ventana de Alimentación
- **Limitar a 10-12 horas** durante el día
- **Evitar comidas pesadas** 3 horas antes de dormir
- **Desayuno sustancioso** después de la luz matutina

## Ejercicio y Movimiento

### Momento Óptimo
- **Rendimiento máximo:** Tarde (2-6 PM)
- **Mejor para el sueño:** Mañana o temprano en la tarde
- **Evitar:** Ejercicio intenso cerca de la hora de dormir

## Temperatura Corporal

### Regulación
- **Baño caliente** 1-2 horas antes de dormir
- **Habitación fresca:** 18-20°C para dormir
- **Exposición al frío** en la mañana

## Conclusión

La consistencia es clave. Implementa estos cambios gradualmente y mantén un horario regular incluso los fines de semana.
    `,
    category: "Rendimiento",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
    author: authors["miguel-torres"],
    publishedAt: "2024-01-25",
    readingTime: 10,
    featured: false,
  },
  {
    slug: "vitamina-d-guia-completa",
    title: "Vitamina D: La Guía Definitiva para Biohackers",
    excerpt: "Todo sobre la vitamina del sol: dosis óptimas, formas de suplementación y cómo afecta tu rendimiento cognitivo.",
    content: `
## La Importancia de la Vitamina D

La vitamina D no es solo una vitamina, actúa como una hormona en el cuerpo con receptores en casi todas las células.

### Deficiencia Generalizada
Se estima que más del 50% de la población tiene niveles subóptimos.

## Niveles Óptimos

### Rangos de Referencia
- **Deficiente:** < 20 ng/mL
- **Insuficiente:** 20-30 ng/mL
- **Óptimo:** 40-60 ng/mL
- **Alto:** > 100 ng/mL

## Formas de Suplementación

### Vitamina D3 (Colecalciferol)
- **Forma preferida** por el cuerpo
- **Más efectiva** para elevar niveles
- **Dosis típica:** 2000-5000 UI diarias

### Vitamina D2 (Ergocalciferol)
- Menos efectiva
- De origen vegetal

## Cofactores Importantes

### Vitamina K2
- **Esencial** para dirigir el calcio a los huesos
- **Dosis:** 100-200 mcg diarios
- **Previene** calcificación arterial

### Magnesio
- **Necesario** para activar la vitamina D
- **Dosis:** 200-400 mg diarios

## Síntesis Solar

### Factores que Afectan
- Latitud geográfica
- Pigmentación de la piel
- Edad
- Uso de protector solar

### Recomendación
- **10-30 minutos** de sol al mediodía
- **Exposición** de brazos y piernas
- **Sin protector** durante la exposición

## Conclusión

La vitamina D es fundamental para la salud óptima. Hazte analizar tus niveles y ajusta tu suplementación accordingly.
    `,
    category: "Suplementos",
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&h=400&fit=crop",
    author: authors["ana-garcia"],
    publishedAt: "2024-02-01",
    readingTime: 11,
    featured: true,
  },
  {
    slug: "tecnicas-respiracion-estrés",
    title: "5 Técnicas de Respiración para Reducir el Estrés",
    excerpt: "Aprende técnicas de respiración respaldadas por ciencia para activar tu sistema nervioso parasimpático.",
    content: `
## La Ciencia de la Respiración

La respiración es una función automática que podemos controlar conscientemente para influir en nuestro estado fisiológico.

### Sistema Nervioso
- **Simpático:** Respuesta de lucha o huida
- **Parasimpático:** Reposo y digestión

## 1. Respiración 4-7-8

### Técnica
1. Inhala por la nariz **4 segundos**
2. Retén **7 segundos**
3. Exhala por la boca **8 segundos**
4. Repite **3-4 ciclos**

### Beneficios
- Induce relajación rápida
- Útil antes de dormir
- Reduce ansiedad aguda

## 2. Respiración de Caja (Box Breathing)

### Técnica
1. Inhala **4 segundos**
2. Retén **4 segundos**
3. Exhala **4 segundos**
4. Retén **4 segundos**
5. Repite **4-6 ciclos**

### Beneficios
- Usada por Navy SEALs
- Mejora el enfoque
- Estabiliza emociones

## 3. Respiración Diafragmática

### Técnica
1. Coloca una mano en el pecho, otra en el abdomen
2. Inhala permitiendo que solo se mueva la mano abdominal
3. Exhala lentamente
4. Practica **5-10 minutos** diarios

### Beneficios
- Activación parasimpática
- Mejora la oxigenación
- Reduce la tensión muscular

## 4. Respiración Alternada (Nadi Shodhana)

### Técnica
1. Tapa la fosa nasal derecha, inhala por la izquierda
2. Tapa ambas, retén brevemente
3. Destapa la derecha, exhala
4. Inhala por la derecha
5. Repite el ciclo

### Beneficios
- Equilibra los hemisferios cerebrales
- Calma la mente
- Mejora la concentración

## 5. Suspiro Fisiológico

### Técnica
1. Dos inhalaciones seguidas por la nariz
2. Una exhalación larga por la boca
3. Repite **1-3 veces**

### Beneficios
- Reexpande los alvéolos
- Reset rápido del sistema
- Muy efectivo para estrés agudo

## Conclusión

La respiración es una herramienta gratuita y siempre disponible. Practica diariamente para mejores resultados.
    `,
    category: "Rendimiento",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
    author: authors["miguel-torres"],
    publishedAt: "2024-02-05",
    readingTime: 7,
    featured: false,
  },
  {
    slug: "omega-3-guia-completa",
    title: "Omega-3: Guía Completa de EPA y DHA",
    excerpt: "Descubre cómo los ácidos grasos omega-3 pueden mejorar tu cerebro, corazón y recuperación muscular.",
    content: `
## ¿Qué son los Omega-3?

Los omega-3 son ácidos grasos esenciales que el cuerpo no puede producir por sí mismo.

### Tipos Principales
- **EPA:** Ácido eicosapentaenoico
- **DHA:** Ácido docosahexaenoico
- **ALA:** Ácido alfa-linolénico (vegetal)

## Fuentes Alimentarias

### Pescados Grasos
- Salmón
- Sardinas
- Caballa
- Arenque

### Fuentes Vegetales (ALA)
- Semillas de lino
- Chía
- Nueces
- Aceite de algas (EPA/DHA)

## Dosis Recomendadas

### Para Salud General
- **250-500 mg** combinados EPA+DHA diarios

### Para Optimización Cognitiva
- **1000-2000 mg** diarios
- Ratio EPA:DHA de 2:1 o 1:1

### Para Inflamación
- **2000-4000 mg** diarios
- Mayor proporción de EPA

## Beneficios Demostrados

### Salud Cerebral
- Mejora la memoria
- Reduce el deterioro cognitivo
- Apoya el estado de ánimo

### Salud Cardiovascular
- Reduce triglicéridos
- Mejora la función arterial
- Efecto antiarrítmico

### Recuperación Muscular
- Reduce la inflamación
- Mejora la síntesis de proteínas
- Acelera la recuperación

## Calidad del Suplemento

### Qué Buscar
- **Certificación** de pureza (IFOS, GOED)
- **Bajo en metales pesados**
- **Forma triglicéridos** o etil ésteres
- **Tocoferoles** para prevenir oxidación

## Conclusión

Los omega-3 son fundamentales para la salud óptima. Prioriza fuentes alimentarias y suplementa con productos de calidad.
    `,
    category: "Suplementos",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop",
    author: authors["ana-garcia"],
    publishedAt: "2024-02-10",
    readingTime: 9,
    featured: false,
  },
  {
    slug: "modafinilo-guia",
    title: "Modafinilo: Guía Completa para Profesionales",
    excerpt: "Análisis profundo del modafinilo: mecanismos, dosis, efectos secundarios y consideraciones legales.",
    content: `
## ¿Qué es el Modafinilo?

El modafinilo es un fármaco eugeroico aprobado para tratar narcolepsia, pero ampliamente usado off-label como potenciador cognitivo.

### Estatus Legal
- **México:** Venta libre
- **España:** Medicamento con receta
- **USA:** Medicamento controlado Schedule IV
- **Consultar** regulaciones locales

## Mecanismo de Acción

### Neurotransmisores Afectados
- Dopamina (inhibe la recaptación)
- Norepinefrina
- Histamina
- Orexina

## Dosis y Uso

### Dosis Estándar
- **100-200 mg** por la mañana
- **Efecto:** 12-15 horas
- **Inicio:** 30-60 minutos

### Mejores Prácticas
- Comenzar con **100 mg**
- Tomar temprano para no afectar el sueño
- Ciclar uso para evitar tolerancia
- **No usar diario**

## Efectos y Beneficios

### Positivos
- Alerta sostenida sin nerviosismo
- Mejora la concentración
- Reduce la fatiga
- Efecto suave comparado con estimulantes

### Efectos Secundarios
- Dolor de cabeza
- Sequedad bucal
- Náuseas leves
- Insomnio si se toma tarde

## Contraindicaciones

### No Usar Si
- Problemas cardíacos
- Hipertensión no controlada
- Ansiedad severa
- Embarazo o lactancia

## Conclusión

El modafinilo es una herramienta potente que debe usarse con responsabilidad. Consulta siempre con un profesional de la salud.
    `,
    category: "Nootrópicos",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=400&fit=crop",
    author: authors["carlos-mendoza"],
    publishedAt: "2024-02-15",
    readingTime: 13,
    featured: false,
  },
  {
    slug: "higiene-sueno-avanzada",
    title: "Higiene del Sueño Avanzada: Más Allá de lo Básico",
    excerpt: "Técnicas avanzadas para optimizar tu sueño: temperatura, ruido, luz y protocolos de recuperación.",
    content: `
## Más Allá de lo Básico

Ya sabes evitar pantallas y mantener horarios. Aquí están las técnicas avanzadas.

## Optimización Térmica

### Temperatura Corporal
- **Habitación:** 18-20°C
- **Efecto:** Facilita el descenso de temperatura necesario para el sueño

### Protocolo de Baño Caliente
- **1-2 horas** antes de dormir
- **Duración:** 10-20 minutos
- **Efecto:** Caída de temperatura post-baño induce sueño

### Colchón Térmico
- **ChiliPad** o similar
- Control preciso de temperatura
- Programable por ciclos de sueño

## Ambiente Sonoro

### Ruido Blanco vs Rosa vs Marrón
- **Blanco:** Frecuencias iguales, sonido de TV estática
- **Rosa:** Más graves, como lluvia
- **Marrón:** Aún más graves, como cascada

### Recomendación
- **Ruido rosa** para la mayoría
- Experimentar con preferencias personales

## Luz y Oscuridad

### Habitación Oscura
- **Cortinas blackout**
- **Máscara de sueño** de calidad
- **Cubrir LEDs** de dispositivos

### Luz Roja Nocturna
- Si necesitas luz nocturna
- **Mínimo impacto** en melatonina
- Bombillas inteligentes

## Rastreo del Sueño

### Dispositivos
- **Oura Ring**
- **Whoop**
- **Apple Watch**

### Métricas Clave
- Tiempo total de sueño
- Eficiencia del sueño
- Fases REM y profundo
- Variabilidad cardíaca

## Suplementación Estratégica

### Stack de Sueño
- **Glicina:** 3 g
- **Magnesio bisglicinato:** 400 mg
- **L-Teanina:** 200 mg
- **Apigenina:** 50 mg (opcional)

## Conclusión

El sueño optimizado requiere atención a múltiples variables. Experimenta sistemáticamente y rastrea tus resultados.
    `,
    category: "Sueño",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=400&fit=crop",
    author: authors["miguel-torres"],
    publishedAt: "2024-02-20",
    readingTime: 10,
    featured: false,
  },
];

export const affiliateProducts: AffiliateProduct[] = [
  {
    id: "melatonina-now",
    name: "NOW Foods Melatonina 5mg",
    description: "Melatonina de alta pureza, 5mg por cápsula. Ideal para jet lag y problemas de sueño ocasionales.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
    price: "$12.99",
    originalPrice: "$15.99",
    affiliateUrl: "https://amazon.com/dp/B0013OVZAG?tag=biohackpro-20&utm_source=biohackpro&utm_medium=affiliate&utm_campaign=melatonin",
    source: "amazon",
    badge: "Más Vendido",
  },
  {
    id: "l-theanine-suntheanine",
    name: "Doctor's Best L-Teanina",
    description: "Suntheanine® pura, 150mg por cápsula. Perfecta combinación con café para enfoque sin nerviosismo.",
    image: "https://images.unsplash.com/photo-1556909114-f6e9ad847f99?w=200&h=200&fit=crop",
    price: "$18.49",
    affiliateUrl: "https://amazon.com/dp/B0036RHAFM?tag=biohackpro-20&utm_source=biohackpro&utm_medium=affiliate&utm_campaign=ltheanine",
    source: "amazon",
  },
  {
    id: "omega3-nordic",
    name: "Nordic Naturals Ultimate Omega",
    description: "Concentrado de omega-3 de alta calidad. 1280mg EPA+DHA por porción. Certificado Friend of the Sea.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
    price: "$34.95",
    originalPrice: "$39.95",
    affiliateUrl: "https://iherb.com/pr/nordic-naturals-ultimate-omega/23329?rcode=biohackpro&utm_source=biohackpro&utm_medium=affiliate",
    source: "iherb",
    badge: "Calidad Premium",
  },
  {
    id: "magnesio-threonate",
    name: "Magtein Magnesio L-Treonato",
    description: "Forma de magnesio que cruza la barrera hematoencefálica. Ideal para función cognitiva y sueño.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c273?w=200&h=200&fit=crop",
    price: "$29.95",
    affiliateUrl: "https://amazon.com/dp/B008NIHCS4?tag=biohackpro-20&utm_source=biohackpro&utm_medium=affiliate&utm_campaign=magnesium",
    source: "amazon",
  },
  {
    id: "creatina-optimum",
    name: "Optimum Nutrition Creatina",
    description: "Creatina monohidrato micronizada, 5g por servicio. La más pura del mercado, testeada por laboratorios independientes.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5b2979f2?w=200&h=200&fit=crop",
    price: "$19.99",
    affiliateUrl: "https://amazon.com/dp/B002DYIZEO?tag=biohackpro-20&utm_source=biohackpro&utm_medium=affiliate&utm_campaign=creatine",
    source: "amazon",
  },
  {
    id: "organifi-green",
    name: "Organifi Green Juice",
    description: "Superfood verde premium con espirulina, chlorella y adaptógenos. Energía natural sin cafeína.",
    image: "https://images.unsplash.com/photo-1505576399279-78c6e1a2c84d?w=200&h=200&fit=crop",
    price: "$69.95",
    originalPrice: "$79.95",
    affiliateUrl: "https://organifi.com/biohackpro?utm_source=biohackpro&utm_medium=affiliate&utm_campaign=greenjuice",
    source: "organifi",
    badge: "Superfood Premium",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter((article) => article.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}

export function getRecentArticles(limit: number = 6): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
