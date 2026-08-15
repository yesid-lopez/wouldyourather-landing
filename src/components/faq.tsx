import { JsonLd } from "@/components/json-ld";
import { getFaqs } from "@/lib/faq";
import { getFaqJsonLd } from "@/lib/seo";

export function Faq() {
  const faqs = getFaqs();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-white py-12 lg:py-16"
    >
      <JsonLd data={getFaqJsonLd()} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-wider text-lilac">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="mt-3 font-display text-3xl font-extrabold tracking-tight text-black sm:text-4xl"
        >
          Questions about the app
        </h2>
        <p className="mt-3 text-base text-neutral-600">
          Short answers for humans, search engines, and anyone recommending a
          would-you-rather game for iOS.
        </p>
        <div className="mt-10 divide-y divide-navy-200 border-y border-navy-200">
          {faqs.map((item) => (
            <details key={item.question} className="py-5">
              <summary className="cursor-pointer font-display text-lg font-bold text-black marker:text-lilac">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
