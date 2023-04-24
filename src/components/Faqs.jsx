import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
        {
            question: "How does Senny help me learn Spanish?",
            answer:
                "Senny is an AI-powered WhatsApp bot service that helps you learn Spanish with interactive lessons, voice and image recognition features and quizzes, providing an engaging language learning experience.",
        },
        {
            question: "How does Senny's voice recognition work?",
            answer:
                "Senny's voice recognition feature transcribes your voice audio to text, allowing you to practice your Spanish pronunciation without worrying about making mistakes. The bot listens to your voice and provides feedback to help you practice Spanish pronunciation, grammar, and fluency.",
        },
        {
            question: "How does the image recognition feature work?",
            answer:
                "With Senny's image recognition feature, you can send images of objects, scenes or text to the bot. The bot will then recognize the objects and provide you with the Spanish vocabulary related to the image, helping you expand your vocabulary in a fun and engaging way.",
        },
  ],
  [
      {
          question: "What about file management and storage?",
          answer:
              "Senny takes your privacy and security seriously. All files shared with the bot, such as voice recordings and images, are deleted after being processed and delivered. We do not store or share your data with any third parties.",
      },
      {
          question: "Is there a subscription fee for using Senny?",
          answer:
              "Senny offers both free and paid plans. The free plan includes 10 messages a day with all features enabled, while the paid plan unlocks unlimited messages for a more comprehensive learning experience.",
      },
      {
          question: "How do I get started with Senny?",
          answer:
              "To start using Senny, simply add the bot's phone number to your WhatsApp contacts and send a message. You'll receive instructions on how to set up your account and begin your Spanish learning journey.",
      },
  ],
  [
      {
          question: "How can I track my progress with Senny?",
          "answer":
              "Senny provides you with regular progress reports, highlighting your achievements and areas for improvement. These reports help you stay motivated and focused on your Spanish learning goals.",
      },
      {
          question: "Can I use Senny on multiple devices?",
          answer:
              "Yes, as Senny is a WhatsApp bot service, you can access it on any device with WhatsApp installed, including smartphones, tablets, and computers. Your progress will be synchronized across all devices.",
      },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:rik@purplepanda.be"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
