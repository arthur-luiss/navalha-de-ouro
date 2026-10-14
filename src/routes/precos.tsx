import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageTitle } from "@/components/Layout";
import { PRECOS, whatsappLink } from "@/lib/barbearia";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/precos")({
  head: () =>
    seo({
      title: "Tabela de preços | Navalha de Ouro",
      description:
        "Preços de corte, barba, combos e mais na Navalha de Ouro Barbearia. Agende pelo WhatsApp.",
      path: "/precos",
    }),
  component: Precos,
});

function Precos() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-5 py-16">
        <PageTitle kicker="Serviços" title="Tabela de preços" />
        <ul className="divide-y divide-border rounded-lg border border-border bg-card">
          {PRECOS.map((p) => (
            <li key={p.nome} className="flex flex-wrap items-center gap-4 p-5">
              <div className="flex-1">
                <h2 className="font-display text-2xl sm:text-3xl tracking-wide">
                  {p.nome}
                </h2>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
              <span className="font-display text-3xl sm:text-4xl text-primary">
                R$ {p.preco}
              </span>
              <a
                href={whatsappLink(p.nome)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs"
              >
                Agendar
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
