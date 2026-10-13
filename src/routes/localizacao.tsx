import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageTitle, WhatsAppButton } from "@/components/Layout";
import { ENDERECO } from "@/lib/barbearia";

export const Route = createFileRoute("/localizacao")({
  head: () => ({
    meta: [
      { title: "Localização e horários | Navalha de Ouro" },
      { name: "description", content: "Endereço, mapa e horário de funcionamento da Navalha de Ouro Barbearia." },
      { property: "og:title", content: "Localização | Navalha de Ouro" },
      { property: "og:description", content: "Saiba como chegar na barbearia." },
    ],
  }),
  component: Localizacao,
});

function Localizacao() {
  const q = encodeURIComponent(ENDERECO);
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <PageTitle kicker="Venha nos visitar" title="Localização" />
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div className="space-y-6 rounded-lg border border-border bg-card p-6">
            <div>
              <h2 className="font-display text-2xl text-primary">Endereço</h2>
              <p>{ENDERECO}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-primary">Horários</h2>
              <p>Seg a Sex: 9h às 20h</p>
              <p>Sábado: 9h às 18h</p>
              <p>Domingo: fechado</p>
            </div>
            <WhatsAppButton />
          </div>
          <iframe
            title="Mapa da barbearia"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            className="h-[450px] w-full rounded-lg border border-border"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}
