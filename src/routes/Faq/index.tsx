import { PageHero } from "../../components/PageHero";
import { LinkButton } from "../../components/Button";
import { AccordionItem } from "../../components/Accordion";
import { faqItems } from "../../data/faq";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import imgPhone from "../../assets/hero/img-phone.png";

/** Página de perguntas frequentes — migrada de paginas/informacao/faq.html. */
export default function Faq() {
  useDocumentTitle("FAQ");

  return (
    <>
      <PageHero
        titulo="Perguntas Frequentes"
        imagem={imgPhone}
        imagemAlt="Celulares com a interface do SoulUp"
        acoes={<LinkButton to="/contato">Fale conosco</LinkButton>}
      >
        <p>
          Tire suas dúvidas sobre a SoulPass. Se não encontrar o que procura,
          entre em contato com a gente.
        </p>
      </PageHero>

      <section className="mx-auto max-w-3xl space-y-4 px-6 py-14 tablet:py-20">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}
