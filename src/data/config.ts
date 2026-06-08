export const siteConfig = {
    // Datos del centro
    name: 'Bienestar y Familia',
    tagline: 'Tu espacio de salud mental, bienestar y crecimiento personal',
    description: 'Centro de psicología y bienestar emocional con atención presencial y online.',

    // Contacto
    whatsapp: '+58XXXXXXXXXX',
    whatsappMessage: 'Hola, me gustaría obtener más información sobre sus servicios.',
    email: 'contacto@bienestaryfamilia.com',
    address: 'Dirección del centro, Ciudad, Venezuela',

    // Moneda
    currency: 'USD',
    currencySymbol: '$',

    // Redes sociales
    instagram: 'https://instagram.com/bienestaryfamilia',
    facebook: 'https://facebook.com/bienestaryfamilia',

    // Modalidad
    modalities: [
        {
            id: 'presencial',
            title: 'Atención Presencial',
            description: 'Visítanos en nuestro espacio diseñado para que te sientas cómodo y seguro. Contamos con consultorios privados, sala de talleres grupales y un ambiente cálido y acogedor.',
            details: ['Consultorios privados', 'Sala de talleres grupales', 'Ambiente acogedor'],
        },
        {
            id: 'online',
            title: 'Atención Online',
            description: 'Recibe atención psicológica profesional desde la comodidad de tu hogar. Realizamos sesiones por videollamada con la misma calidad y confidencialidad que la atención presencial.',
            details: ['Desde cualquier lugar', 'Misma calidad terapéutica', 'Plataforma segura'],
        },
    ],

    images: {
        hero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        about: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
        salon: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    },

    about: {
        title: 'Un espacio pensado para ti',
        description: 'En Bienestar y Familia creemos que cada persona merece un espacio seguro donde ser escuchada, comprendida y acompañada en su proceso de cambio. Nuestro equipo de profesionales trabaja desde un enfoque humanista e integrador, adaptado a las necesidades de cada consultante.',
        values: [
            { icon: '🤝', label: 'Trato cercano', description: 'Un vínculo terapéutico basado en la confianza y el respeto.' },
            { icon: '🌱', label: 'Enfoque integral', description: 'Atendemos a la persona en todas sus dimensiones.' },
            { icon: '💙', label: 'Para todos', description: 'Individuos, parejas, familias y niños son bienvenidos.' },
        ],
    },

    services: [
        {
            id: 'psicologia-individual',
            title: 'Psicología Individual',
            description: 'Acompañamiento personalizado para adultos que buscan herramientas para gestionar sus emociones y superar dificultades.',
            details: [
                'Evaluación psicológica inicial',
                'Plan terapéutico personalizado',
                'Sesiones de 50 minutos',
                'Seguimiento continuo del proceso',
            ],
            price: 30,
        },
        {
            id: 'terapia-parejas',
            title: 'Terapia de Parejas',
            description: 'Espacio de diálogo y reflexión para parejas que desean mejorar su comunicación y fortalecer su vínculo.',
            details: [
                'Sesiones conjuntas y/o individuales',
                'Técnicas de comunicación efectiva',
                'Resolución de conflictos',
                'Sesiones de 60 minutos',
            ],
            price: 40,
        },
        {
            id: 'psicologia-infantil',
            title: 'Psicología Infantil',
            description: 'Atención especializada para niños y adolescentes, con enfoque lúdico y adaptado a cada etapa del desarrollo.',
            details: [
                'Evaluación psicológica inicial',
                'Plan terapéutico personalizado',
                'Sesiones de 50 minutos',
                'Seguimiento continuo del proceso',
            ],
            price: 30,
        },
        {
            id: 'terapia-familiar',
            title: 'Terapia Familiar',
            description: 'Intervención sistémica para familias que atraviesan conflictos o cambios y buscan mejorar su dinámica.',
            details: [
                'Sesiones conjuntas y/o individuales',
                'Técnicas de comunicación efectiva',
                'Resolución de conflictos',
                'Sesiones de 60 minutos',
            ],
            price: 45,
        },
        {
            id: 'talleres',
            title: 'Talleres Grupales',
            description: 'Sesiones grupales en un espacio amplio y acogedor, diseñadas para el crecimiento personal y el bienestar colectivo.',
            details: [
                'Actividades lúdicas y participativas',
                'Espacio seguro para la expresión emocional',
                'Aprendizaje colaborativo',
            ],
            price: 20,
        },
    ],

}