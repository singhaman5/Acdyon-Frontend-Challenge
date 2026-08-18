const footerLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'GitHub', href: 'https://github.com', target: '_blank' },
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-surface-200">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-neutral-900 tracking-tight mb-1">
              Prep<span className="text-accent-600">IQ</span>
            </p>
            <p className="text-sm text-neutral-400">
              Interview preparation, measured.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.target}
                    rel={link.target ? 'noopener noreferrer' : undefined}
                    className="text-sm text-neutral-400 hover:text-neutral-700 transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-100">
          <p className="text-xs text-neutral-300">
            Built as a frontend challenge submission. Not a real product.
          </p>
        </div>
      </div>
    </footer>
  );
}
