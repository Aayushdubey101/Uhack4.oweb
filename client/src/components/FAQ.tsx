import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Who can participate in UHACK 4.0?",
      answer: "UHACK 4.0 is open to students, recent graduates, and early-career professionals. Whether you're a beginner or experienced developer, designer, or entrepreneur, you're welcome to join! Teams can have 2-4 members."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, chargers, and any development tools you prefer. We'll provide WiFi, power outlets, meals, snacks, and workspace. Don't forget to bring your creativity and enthusiasm!"
    },
    {
      question: "Do I need to have a team before registering?",
      answer: "No! You can register individually and we'll help you find teammates during our team formation session. You can also come with a pre-formed team of up to 4 members."
    },
    {
      question: "What kind of projects can we build?",
      answer: "You can build anything! Web apps, mobile apps, hardware projects, AI/ML solutions, games, or anything that solves a real problem. We encourage innovation and creativity across all domains."
    },
    {
      question: "Is there any cost to participate?",
      answer: "UHACK 4.0 is completely free for all participants! This includes meals, snacks, workspace, mentorship, and access to all workshops and talks."
    },
    {
      question: "Will there be mentors available during the event?",
      answer: "Yes! We have industry experts and senior developers available throughout the event to help with technical challenges, provide guidance, and answer questions about your projects."
    },
    {
      question: "What if I'm new to hackathons?",
      answer: "Perfect! UHACK 4.0 is beginner-friendly. We have workshops, mentors, and resources specifically designed to help first-time hackers. Plus, there's a special prize for the best beginner team!"
    },
    {
      question: "Can we use existing code or open-source libraries?",
      answer: "You can use existing libraries, frameworks, and APIs, but the core application logic must be built during the hackathon. Pre-existing codebases are not allowed as starting points."
    },
    {
      question: "How will projects be judged?",
      answer: "Projects are evaluated on innovation (25%), technical execution (25%), design & UX (20%), business viability (15%), and presentation quality (15%). All teams will present to our panel of expert judges."
    },
    {
      question: "What happens after the hackathon?",
      answer: "Winners receive prizes, all participants get certificates, and many projects get opportunities for further development. We also facilitate connections with investors and potential employers."
    },
    {
      question: "Is accommodation provided?",
      answer: "The venue is open 24/7 during the hackathon, but accommodation isn't provided. We recommend local hotels or staying with friends. We'll share a list of nearby affordable options."
    },
    {
      question: "What COVID-19 safety measures are in place?",
      answer: "We follow all local health guidelines. Hand sanitizers are available throughout the venue, and we maintain proper ventilation. Participants should follow any current health recommendations."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers! Find everything you need to know about UHACK 4.0.
          </p>
        </div>

        <Card className="p-8 bg-card border border-border">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger 
                  className="text-left text-foreground hover:text-primary"
                  data-testid={`faq-trigger-${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-muted-foreground"
                  data-testid={`faq-content-${index}`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Still Have Questions */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Email us:</p>
              <p className="text-foreground font-semibold">hello@uhack4.com</p>
            </div>
            <div className="hidden sm:block w-px bg-border"></div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Join our Discord:</p>
              <p className="text-foreground font-semibold">UHACK Community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}