import { useId } from 'react'

import { Container } from '@/components/Container'

const features = [
    
    {
        name: 'Accurate and sassy responses',
        description:
            'Senny provides accurate information in response to your questions, with a touch of sassiness to keep things interesting.',
        icon: DeviceArrowIcon,
    },
    {
        name: 'Image recognition',
        description:
            'Senny can recognize images with objects and text, and respond questions about the images.',
        icon: DeviceClockIcon,
    },
    {
        name: 'Friendly correction',
        description:
            'Senny corrects your mistakes when asked in a friendly and constructive way to help you improve your Spanish skills.',
        icon: DeviceListIcon,
    },
    {
        name: 'Practice exercises',
        description:
            'Senny provides a variety of teaching methods, including examples, explanations, and practice exercises, to help you practice speaking and writing in Spanish.',
        icon: DeviceLockIcon,
    },
    {
        name: 'Interesting facts about Spain',
        description:
            'Senny sometimes shares interesting or funny facts about Spain to keep the conversation engaging and entertaining.',
        icon: DeviceCardsIcon,
    },
    {
        name: 'Voice messages',
        description:
            'Senny can receive voice messages sent through WhatsApp. Just talk like you would do to a friend.',
        icon: DeviceChartIcon,
    },
]


function DeviceArrowIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-12c.33 1.465 2.826 4 6.001 4 3.134 0 5.665-2.521 5.999-4zm-9.5-6c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm9.5 2.002l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002z" />
    </svg>
  )
}

function DeviceCardsIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"> <path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" fill-rule="nonzero" /></svg>
    );
}

function DeviceClockIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" fill="#000" />
        </svg>
    );
}



function DeviceListIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="black"
      />
      <circle cx={11} cy={14} r={2} fill="#171717" />
      <circle cx={11} cy={20} r={2} fill="#171717" />
      <circle cx={11} cy={26} r={2} fill="#171717" />
      <path
        d="M16 14h6M16 20h6M16 26h6"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="square"
      />
      
    </svg>
  )
}

function DeviceLockIcon(props) {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z" /></svg>
  )
}

function DeviceChartIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16 10c0 2.209-1.791 4-4 4s-4-1.791-4-4v-6c0-2.209 1.791-4 4-4s4 1.791 4 4v6zm4-2v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13.03v-2.03h-2v2.03c-2.282.139-4 .744-4 1.47 0 .829 2.238 1.5 5 1.5s5-.671 5-1.5c0-.726-1.718-1.331-4-1.47z" /></svg>
    );
}



export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
          className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
                  <h2 className="text-3xl font-medium tracking-tight text-green-500">
            Improve your Spanish in your day to day life.
          </h2>
          <p className="mt-2 text-lg text-white">
            From image recognition to practice exercises, Senny has everything you need to improve your Spanish skills.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3 text-black"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
                  className="rounded-2xl p-8 bg-white "
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-black">
                {feature.name}
              </h3>
                  <p className="mt-2 text-black">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
