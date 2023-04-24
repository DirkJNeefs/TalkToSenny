import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Got any questions or issues?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Contact us at rik@blackbearlabs.ai or on twitter:
          </p>
          <div className="mt-8 flex justify-center">
                      <a href="https://twitter.com/rikvk01" target="_blank" className="group block flex-shrink-0">
                          <div className="flex items-center">
                              <div>
                                  <img
                                      className="inline-block h-16 w-16 rounded-full"
                                      src="https://pbs.twimg.com/profile_images/1599872650402320387/i9mEGZCT_400x400.jpg"
                                      alt=""
                                  />
                              </div>
                              <div className="ml-3">
                                  <p className="text-sm font-medium text-white group-hover:text-gray-300">@rikvk01</p>
                                  <p className="text-xs font-medium text-white group-hover:text-gray-300">View profile</p>
                              </div>
                          </div>
                      </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
