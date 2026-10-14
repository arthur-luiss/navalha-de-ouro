import { seo } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Layout, WhatsAppButton } from "@/components/Layout";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Navalha de Ouro Barbearia | Cortes e barba",
      description:
        "Barbearia clássica com cortes modernos, barba na navalha e agendamento pelo WhatsApp.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <img
          src={hero}
          alt="Interior da barbearia"
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative px-5 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
            Desde 2010
          </p>
          <h1 className="font-display text-5xl leading-none sm:text-7xl md:text-9xl">
            Estilo afiado.
            <br />
            Tradição na navalha.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
            Cortes clássicos e modernos, barba com toalha quente e um ambiente
            feito para você.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton />
            <Link to="/precos" className="btn-outline">
              Ver preços
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
