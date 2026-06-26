export function Footer() {
  return (
    <footer className="bg-wood-dark text-white" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-1">
                <img
                  src="/logo.png"
                  alt="TRONC — Juguetes de madera"
                  className="h-14 w-14 object-contain"
                />
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              Juguetes de madera artesanales hechos en Chile con amor y
              dedicación para los más pequeños del hogar.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { label: "Facebook", icon: "f" },
                { label: "Instagram", icon: "📷" },
                { label: "Twitter/X", icon: "✕" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors text-xs font-bold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-white/50">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Inicio" },
                { href: "#productos", label: "Productos" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#contacto", label: "Contacto" },
                { href: "/admin", label: "Panel Admin" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-white/50">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>hola@maderatoys.cl</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Santiago, Chile</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Lun–Vie 9:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© 2025 MaderaToys SpA. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ en Chile 🇨🇱</p>
        </div>
      </div>
    </footer>
  );
}
