import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { whatsappLink } from "@/lib/barbearia";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Início" },
  { to: "/galeria", label: "Galeria" },
  { to: "/precos", label: "Preços" },
  { to: "/localizacao", label: "Localização" },
] as const;

export function WhatsAppButton({ servico, className = "" }: { servico?: string; className?: string }) {
  return (
    <a href={whatsappLink(servico)} target="_blank" rel="noopener noreferrer" className={`btn-gold ${className}`}>
      Agendar no WhatsApp
    </a>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44a9.38 9.38 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44zm8.04-17.49A11.3 11.3 0 0 0 12.04.68C5.77.68.67 5.78.67 12.04c0 2 .52 3.96 1.52 5.68L.57 23.5l5.9-1.55a11.33 11.33 0 0 0 5.57 1.42h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.33-8.03z" />
    </svg>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-3 sm:flex-row sm:justify-between sm:px-5">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <img src={logo} alt="" width={40} height={40} className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
            <span className="truncate font-logo text-lg sm:text-xl font-bold tracking-wide text-primary">Navalha de Ouro</span>
          </Link>
          <div className="flex w-full justify-between gap-0.5 rounded-full border border-border/60 bg-card/50 p-1 text-xs sm:w-auto sm:text-sm font-medium">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="rounded-full px-2.5 py-1.5 text-muted-foreground sm:px-4 transition-colors hover:text-foreground" activeProps={{ className: "bg-primary !text-primary-foreground" }} activeOptions={{ exact: true }}>
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Navalha de Ouro Barbearia
      </footer>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Agendar pelo WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition hover:scale-110">
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

export function PageTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h1 className="font-display text-4xl sm:text-6xl md:text-7xl">{title}</h1>
    </div>
  );
}
