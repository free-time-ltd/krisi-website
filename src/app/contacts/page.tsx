import Image from "next/image";
import KrisiTransparent from "@/assets/kk-transparent.webp";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";

export default async function ContactPage() {
  return (
    <Container>
      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
        <Image
          src={KrisiTransparent}
          alt="Kristina Kostova Profile Picture"
          width={128}
          priority
          quality={85}
        />
      </div>
      <div id="contacts" className="my-10">
        <ContactForm />
      </div>
    </Container>
  );
}
