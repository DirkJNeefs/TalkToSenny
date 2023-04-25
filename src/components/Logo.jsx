import Image from 'next/image'

export function Logomark(props) {
  return (
      <div className="relative flex h-16 w-16 flex-none items-center justify-center">
          <img
              src="Senny_Icon.png"
              alt="header Senny Logo"
          />
      </div>
  )
}

export function Logo(props) {
    return (
        <div className="relative flex h-24 w-28 flex-none items-center justify-center">
            <img
                src="Senny_Logo.png"
                alt="header Senny Logo"
            />
        </div>
  )
}
