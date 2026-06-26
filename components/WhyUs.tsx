const FEATURES = [
  {
    icon: "🪵",
    title: "100% Artesanal",
    description:
      "Cada juguete es creado a mano por artesanos chilenos con años de experiencia. Ningún juguete es igual a otro.",
  },
  {
    icon: "🛡️",
    title: "Seguro para niños",
    description:
      "Pinturas no tóxicas, madera certificada y sin bordes filosos. Cumplimos todas las normas de seguridad chilenas.",
  },
  {
    icon: "🌿",
    title: "Ecológico",
    description:
      "Madera de bosques certificados y acabados con aceites naturales biodegradables. Cuidamos el planeta.",
  },
  {
    icon: "🚚",
    title: "Envío a todo Chile",
    description:
      "Despachamos desde Arica hasta Punta Arenas. Entrega en 3 a 7 días hábiles con seguimiento en línea.",
  },
];

export function WhyUs() {
  return (
    <section className="py-16 bg-moss" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Más de 5 años regalando infancias felices en Chile
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/15 rounded-2xl mb-4">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-14 border-t border-white/20 pt-10">
          {[
            { value: "+2.000", label: "Familias felices" },
            { value: "100%", label: "Madera certificada" },
            { value: "5★", label: "Valoración promedio" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-white/60 text-xs sm:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
