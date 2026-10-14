import { seo } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import c1 from "@/assets/corte1.jpg";
import c2 from "@/assets/corte2.jpg";
import c3 from "@/assets/corte3.jpg";
import { Layout, PageTitle, WhatsAppButton } from "@/components/Layout";

export const Route = createFileRoute("/galeria")({
  head: () =>
    seo({
      title: "Galeria de cortes | Navalha de Ouro",
      description:
        "Veja os cortes e barbas feitos na Navalha de Ouro Barbearia: degradê, pompadour e desenhos na navalha.",
      path: "/galeria",
    }),
  component: Galeria,
});

const cortes = [
  { img: c1, nome: "Degradê com topete texturizado" },
  { img: c2, nome: "Pompadour + barba completa" },
  { img: c3, nome: "Low fade com desenho" },
];

function Galeria() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <PageTitle kicker="Nosso trabalho" title="Galeria de cortes" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cortes.map((c) => (
            <figure
              key={c.nome}
              className="group overflow-hidden rounded-lg border border-border bg-card"
            >
              <img
                src={c.img}
                alt={c.nome}
                loading="lazy"
                width={768}
                height={960}
                className="aspect-4/5 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="flex items-center justify-between p-4">
                <span className="font-display text-2xl tracking-wide">
                  {c.nome}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 text-center">
          <WhatsAppButton />
        </div>
      </section>
    </Layout>
  );
}
